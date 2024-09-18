document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("productForm");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const description = document.getElementById("description").value;
    const price = document.getElementById("price").value;

    if (!name) {
      alert("Name cannot be empty.");
      return;
    }

    if (price <= 0 || isNaN(price)) {
      alert("Price must be a positive number.");
      return;
    }

    const formData = {
      name: name,
      description: description,
      price: price
    };

    try {

      const response = await fetch('/api/product/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Product added successfully!');
        form.reset();
        loadProducts();
      } else {
        alert('Error adding product.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  });

  async function loadProducts() {
    try {
      const response = await fetch('/api/product/');
      const products = await response.json();

      productTableBody.innerHTML = '';
      products.forEach(product => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = product.name;
        row.appendChild(nameCell);

        const descriptionCell = document.createElement('td');
        descriptionCell.textContent = product.description;
        row.appendChild(descriptionCell);

        const priceCell = document.createElement('td');
        priceCell.textContent = product.price;
        row.appendChild(priceCell);

        productTableBody.appendChild(row);
      });
      productTable.style.display = 'table';
    } catch (error) {
      console.error('Error:', error);
    }
  }
});