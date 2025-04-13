from django.urls import path
from . import views

urlpatterns = [
    # ======================
    # Company URLs (CBV)
    # ======================
    path('companies/', views.CompanyList.as_view(), name='company-list'),  # GET, POST
    path('companies/<int:pk>/', views.CompanyDetail.as_view(), name='company-detail'),  # GET, PUT, PATCH, DELETE
    path('companies/<int:pk>/vacancies/', views.CompanyVacancies.as_view(), name='company-vacancies'),  # GET
    
    # ======================
    # Vacancy URLs (CBV)
    # ======================
    path('vacancies/', views.VacancyList.as_view(), name='vacancy-list'),  # GET, POST
    path('vacancies/<int:pk>/', views.VacancyDetail.as_view(), name='vacancy-detail'),  # GET, PUT, PATCH, DELETE
    path('vacancies/top_ten/', views.TopTenVacancies.as_view(), name='top-ten-vacancies'),  # GET
    
    # ======================
    # Function-Based View (FBV)
    # ======================
    path('companies/<int:pk>/vacancies_count/', views.company_vacancies_count, name='company-vacancies-count'),  # GET
]