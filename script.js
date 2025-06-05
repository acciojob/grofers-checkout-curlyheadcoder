const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const priceElements = document.querySelectorAll(".prices");
  let total = 0;

  priceElements.forEach(priceEl => {
    const price = parseFloat(priceEl.textContent);
    if (!isNaN(price)) {
      total += price;
    }
  });

  const table = document.querySelector("table");
  const totalRow = document.createElement("tr");
  const totalCell = document.createElement("td");

  totalCell.colSpan = 2;
  totalCell.textContent = `Total Price: ₹${total.toFixed(2)}`;

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);
