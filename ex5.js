function calculateBill() {
  let rainbow = parseInt(document.getElementById("Oreo").value) || 0;
  let chocolate = parseInt(document.getElementById("chocolate").value) || 0;
  let redvelvet = parseInt(document.getElementById("redvelvet").value) || 0;
  let blackforest = parseInt(document.getElementById("Caramel").value) || 0;

  let total = (Oreo * 300) + (chocolate * 200) + (redvelvet * 250) + (Caramel * 350);

  document.getElementById("bill").innerHTML = `
    <p>Purchase Order Bill!!!</p>
    <p style="background:green;color:white;padding:8px;border-radius:5px;">
      Total Price: Rs. ${total}
    </p>`;
}