from rest_framework import serializers
from .models import Product, Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer()  # Вложенный сериализатор

    class Meta:
        model = Product
        fields = '__all__'

    def create(self, validated_data):
        category_data = validated_data.pop('category', None)
        if category_data:
            category, _ = Category.objects.get_or_create(**category_data)  # Создаём или получаем категорию
            validated_data['category'] = category

        return Product.objects.create(**validated_data)
