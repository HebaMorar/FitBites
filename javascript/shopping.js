   let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    document.getElementById("filter-btn").addEventListener("click", function() {
        var filterValue = document.getElementById("filter-food").value;
        var items = document.querySelectorAll("#food-products .item");
    
        items.forEach(function(item) {
            if (filterValue === "all" || item.getAttribute("data-type") === filterValue) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
    
   
    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
          const item = this.closest(".item");
      
          const title = item.querySelector("h3").innerText;
          const priceElement = item.querySelector(".price") || Array.from(item.querySelectorAll("p")).find(p => p.innerText.includes("$"));
          const priceText = priceElement?.innerText || "$0";
          const price = parseFloat(priceText.replace(/[^0-9.]/g, ""));
      
          const cartItem = { title, price };
          cartItems.push(cartItem);
          localStorage.setItem("cart", JSON.stringify(cartItems));
      
          alert(`تمت إضافة "${title}" إلى العربة`);
        });
      });
      