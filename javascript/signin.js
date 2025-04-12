document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nameinput = document.getElementById("name");
    const passwordinput = document.getElementById("password");
   
    form.addEventListener("submit", function (e) {
      e.preventDefault(); 
      const name = nameinput.value.trim();
      const password = passwordinput.value.trim();
  
  
      localStorage.setItem("username", name);
  
     
  
    });
  
   
  });
  