let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

const addToCartButtons = document.querySelectorAll(".cart");

addToCartButtons.forEach(button => {
    button.addEventListener("click", function () {
        const item = this.closest(".book,.workshop,.course,.article");

        const titleElement = item.querySelector("h3");
        const priceElement = Array.from(item.querySelectorAll("p")).find(p => p.innerText.includes("$"));

        

        const title = titleElement.innerText;
        const priceText = priceElement.innerText;
        const price = parseFloat(priceText.replace(/[^0-9.]/g, ""));

        const cartItem = { title, price };
        cartItems.push(cartItem);
        localStorage.setItem("cart", JSON.stringify(cartItems));

        alert(`تمت إضافة "${title}" إلى العربة`);
    });
});

//search
const searchInput = document.querySelector('.search input');
const courses = document.querySelectorAll('.coursecard');
const articles =document.querySelectorAll('articlecard')
const workshops =document.querySelectorAll('workshopcard')
const books =document.querySelectorAll('bookcard')

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.trim().toLowerCase();

  courses.forEach((course) => {
    const title = course.querySelector('h3').innerText.toLowerCase();
    if (title.includes(searchTerm)) {
      course.style.display = 'block';
    } else {
      course.style.display = 'none';
    }
  });
  articles.forEach((article) => {
    const title = course.querySelector('h3').innerText.toLowerCase();
    if (title.includes(searchTerm)) {
      course.style.display = 'block';
    } else {
      course.style.display = 'none';
    }
  });
  workshops.forEach((workshop) => {
    const title = course.querySelector('h3').innerText.toLowerCase();
    if (title.includes(searchTerm)) {
      course.style.display = 'block';
    } else {
      course.style.display = 'none';
    }
  });
  books.forEach((book) => {
    const title = course.querySelector('h3').innerText.toLowerCase();
    if (title.includes(searchTerm)) {
      course.style.display = 'block';
    } else {
      course.style.display = 'none';
    }
  });
  
});