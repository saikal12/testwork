from .models import Product
from rest_framework import serializers


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

    def validate_name(self, value):
        if not value.strip():
            return serializers.ValidationError("Название продукта не может быть пустым.")
        return value

    def validate_price(self, value):
        if value <= 0:
            return serializers.ValidationError("Цена должна быть положительным числом.")
        return value
