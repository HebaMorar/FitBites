let cartitems = JSON.parse(localStorage.getItem("cart")) || [];

function updateCart() {
  const cart = document.getElementById("product");
  cart.innerHTML = "";

  if (cartitems.length > 0) {
    let total = 0;
    cartitems.forEach((item, index) => {
      const cartItemDiv = document.createElement("div");
      cartItemDiv.classList.add("cart-item");

      cartItemDiv.innerHTML = `
        <div>
          <h3>${item.title}</h3>
          <span>$${item.price}</span>
        </div>
      `;

      const deletebtn = document.createElement("button");
      deletebtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
      deletebtn.classList.add("delete-btn");
      deletebtn.addEventListener("click", () => {
        cartitems.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cartitems));
        updateCart();
      });

      cartItemDiv.appendChild(deletebtn);
      cart.appendChild(cartItemDiv);

      total += parseFloat(item.price);
    });

    const totalcart = document.createElement("div");
    totalcart.style.cssText = `
      margin-top: 30px;
      padding: 10px;
      border-top: 1px solid #ccc;
      font-size: 18px;
      color: #2e7d32;
      font-weight: bold;
      background-color: #f9f9f9;
      border-radius: 8px;
      text-align: center;
    `;
    totalcart.innerHTML = `<strong>المجموع: $${total.toFixed(2)}</strong>`;
    cart.appendChild(totalcart);
  } else {
    cart.innerHTML = "<p>عربتك فارغة</p>";
  }
}

document.getElementById("btn").addEventListener("click", function () {
  if (cartitems.length > 0) {
    alert("إتمام الشراء... شكراً لزيارتك!");
    cartitems = [];
    localStorage.removeItem("cart");
    updateCart();
  } else {
    alert("عربتك فارغة!");
  }
});

updateCart();

