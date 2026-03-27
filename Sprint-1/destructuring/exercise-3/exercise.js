let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

function takeOutOrder(order) {
  let totalSum = 0;

  console.log("OTY       ITEM             TOTAL");
  order.forEach(({ quantity, itemName, unitPricePence }) => {
    const itemTotal = (quantity * unitPricePence) / 100;
    totalSum += itemTotal;

    console.log(
      `${quantity}       ${itemName.padEnd(18)} ${itemTotal.toFixed(2)}`
    );
  });

  console.log(`\nTotal: ${totalSum.toFixed(2)}`);
}
takeOutOrder(order);
