let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
 


const addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach(button => {
    button.addEventListener("click", function () {
        const item = this.closest(".plan-card");

        const titleElement = item.querySelector("h3");
        const priceElement = Array.from(item.querySelectorAll("p")).find(p => p.innerText.includes("$"));


        const title = titleElement.innerText;
        const priceText = priceElement.innerText;
        const price = parseFloat(priceText.replace(/[^0-9.]/g, ""));

        const cartItem = { title,price };
        cartItems.push(cartItem);
        localStorage.setItem("cart", JSON.stringify(cartItems));

        alert(`تمت إضافة "${title}" إلى العربة`);
    });

    const searchInput = document.querySelector('.search input ');
    const plancards = document.querySelectorAll('.plan-card');
    
    searchInput.addEventListener('input', () => {
      const searchTerm = searchInput.value.trim().toLowerCase();
    
      plancards.forEach((plancard) => {
        const title = plancard.querySelector('h3').innerText.toLowerCase();
        if (title.includes(searchTerm)) {
          plancard.style.display = 'block';
        } else {
          plancard.style.display = 'none';
        }
      });
     
      });
});
