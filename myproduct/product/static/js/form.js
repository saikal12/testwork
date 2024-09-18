document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("productForm");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();  // Предотвращаем перезагрузку страницы

    // Собираем данные из полей формы
    const name = document.getElementById("name").value.trim();
    const description = document.getElementById("description").value;
    const price = document.getElementById("price").value;

    // Валидация: проверяем, что имя не пустое, а цена положительная
    if (!name) {
      alert("Name cannot be empty.");
      return;  // Останавливаем отправку формы
    }

    if (price <= 0 || isNaN(price)) {
      alert("Price must be a positive number.");
      return;  // Останавливаем отправку формы
    }

    const formData = {
      name: name,
      description: description,
      price: price
    };

    try {
      // Отправляем данные на сервер
      const response = await fetch('/api/product/', { // Замените URL на ваш API
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)  // Преобразуем данные в формат JSON
      });

      if (response.ok) {
        alert('Product added successfully!');
        form.reset();  // Очищаем форму после успешной отправки
      } else {
        alert('Error adding product.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  });
});
