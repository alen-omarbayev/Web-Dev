from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer

# ======================================
# Class-Based Views (CBV)
# ======================================

# Company Views
class CompanyList(generics.ListCreateAPIView):
    """Список компаний и создание новой (GET, POST)"""
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class CompanyDetail(generics.RetrieveUpdateDestroyAPIView):
    """Детали компании + обновление/удаление (GET, PUT, PATCH, DELETE)"""
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class CompanyVacancies(generics.ListAPIView):
    """Список вакансий компании (GET)"""
    serializer_class = VacancySerializer

    def get_queryset(self):
        return Vacancy.objects.filter(company_id=self.kwargs['pk'])

# Vacancy Views
class VacancyList(generics.ListCreateAPIView):
    """Список вакансий и создание новой (GET, POST)"""
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

class VacancyDetail(generics.RetrieveUpdateDestroyAPIView):
    """Детали вакансии + обновление/удаление (GET, PUT, PATCH, DELETE)"""
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

class TopTenVacancies(generics.ListAPIView):
    """Топ-10 вакансий по зарплате (GET)"""
    serializer_class = VacancySerializer
    queryset = Vacancy.objects.order_by('-salary')[:10]

# ======================================
# Function-Based View (FBV) - пример
# ======================================
@api_view(['GET'])
def company_vacancies_count(request, pk):
    """Количество вакансий компании (FBV пример)"""
    try:
        company = Company.objects.get(pk=pk)
        count = company.vacancies.count()
        return Response({'count': count})
    except Company.DoesNotExist:
        return Response(
            {'error': 'Company not found'}, 
            status=status.HTTP_404_NOT_FOUND
        )