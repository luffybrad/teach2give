document.addEventListener('DOMContentLoaded', () => {
  const tableBody = document.querySelector('#productTable tbody');

  async function fetchData() {
      try {
          const response = await fetch('http://localhost:3000/products');
          if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const products = await response.json();

          // Clear any existing rows
          tableBody.innerHTML = '';

          // Populate the table with product data
          products.forEach(product => {
              const row = tableBody.insertRow();
              row.classList.add('product-row');

              // Loop through each property of the product
              for (const key in product) {
                  const cell = row.insertCell();
                  cell.textContent = product[key];
              }
          });
      } catch (error) {
          console.error('Error fetching or processing data:', error);
          tableBody.innerHTML = `<tr><td colspan="6" class="error-message">Error fetching data. Please try again later.</td></tr>`;
      }
  }

  fetchData();
});