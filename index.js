let menu_btn = document.getElementById("menu_btn");
let menu = document.getElementById("menu");
menu_btn.addEventListener("click", function handleClick(){
    menu.classList.toggle("active");
  });