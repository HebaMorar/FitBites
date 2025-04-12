let cartitems = JSON.parse(localStorage.getItem("cart")) || [];

function updateCart() {
  const container = document.getElementById("cart-items") || document.getElementById("product");
  container.innerHTML = "";

  if (cartitems.length === 0) {
    container.innerHTML = "<p>السلة فارغة 🛒</p>";
    return;
  }

  let total = 0;

  cartitems.forEach((item, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("cart-item");

    itemDiv.innerHTML = `
      <div>
        <h3>${item.title}</h3>
        <span>$${item.price}</span>
      </div>
    `;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => {
      cartitems.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cartitems));
      updateCart();
    });

    itemDiv.appendChild(deleteBtn);
    container.appendChild(itemDiv);

    total += parseFloat(item.price);
  });

  if (container.id === "product") {
    const totalDiv = document.createElement("div");
    totalDiv.style.cssText = `
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
    totalDiv.innerHTML = `<strong>المجموع: $${total.toFixed(2)}</strong>`;
    container.appendChild(totalDiv);
  }
}

const purchaseBtn = document.getElementById("btn");
if (purchaseBtn) {
  purchaseBtn.addEventListener("click", function () {
    if (cartitems.length > 0) {
      alert("إتمام الشراء... شكراً لزيارتك!");
      cartitems = [];
      localStorage.removeItem("cart");
      updateCart();
    } else {
      alert("عربتك فارغة!");
    }
  });
}

updateCart();


