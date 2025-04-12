document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nameinput = document.getElementById("name");
    const emailinput = document.getElementById("email");
    const passwordinput = document.getElementById("password");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault(); 
      const name = nameinput.value.trim();
      const email =   emailinput.value.trim();
      const password = passwordinput.value.trim();
  
  
      localStorage.setItem("username", name);
  
     
     });
  
   
  });
  