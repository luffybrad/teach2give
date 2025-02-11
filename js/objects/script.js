document.addEventListener('DOMContentLoaded', () => {
  const tableBody = document.querySelector('#productTable tbody');

  async function fetchData() {
    try {
      const response = await fetch('http://localhost:3000/products');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const products = await response.json();



      products.forEach(product => {
        const row = tableBody.insertRow();
        for (prod in product){
            const cell = row.insertCell();
            cell.textContent = (prod, product[prod])
        }
      });
    } catch (error) {
      console.error('Error fetching or processing data:', error);
      tableBody.innerHTML = `<tr><td colspan="6">Error fetching data!</td></tr>`;
    }
  }

  fetchData();
});
