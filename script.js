function generateTable() {
  
  const tableNumber = document.querySelector('#tableNumber').value;
  const tableContainer = document.querySelector('#tableContainer');

  if (!tableNumber || tableNumber < 2 || tableNumber > 12) {
    alert('Please enter a number between 2 and 12.');
    return;
  }

  let tableHTML = `<table>`;
  tableHTML += `
    <tr>
      <th>&nbsp;</th>
    </tr>
  `;

  for (let i = 2; i <= 12; i++) {
    tableHTML += `
      <tr>
        <td>${tableNumber} x ${i} = ${tableNumber * i}</td>
      </tr>
    `;
  }

  tableHTML += `</table>`;
  tableContainer.innerHTML = tableHTML;
}

generateTable();