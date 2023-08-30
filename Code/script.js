const bar = document.getElementById("bar");
const close = document.getElementById("close");

const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

// script.js
function updateTotal(id) {
  var quantity = document.getElementById("quantity-" + id).value;
  var price = document.getElementById("price-" + id).innerHTML;
  var total = document.getElementById("total-" + id);

  total.innerHTML = "$" + (quantity * price).toFixed(2);

  updateGrandTotal();
}

function updateGrandTotal() {
  var grandTotal = document.getElementById("grand-total");
  var totalPrice = 0;

  for (var i = 1; i <= 2; i++) {
    var total = document.getElementById("total-" + i).innerHTML;
    total = parseFloat(total.substring(1));
    totalPrice += total;
  }

  grandTotal.innerHTML = "$" + totalPrice.toFixed(2);
}

// script.js
function addToCart() {
  // Add item to cart

  // Redirect to cart page
  window.location.href = "cart.html";
}
