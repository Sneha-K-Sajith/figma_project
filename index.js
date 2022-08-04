let menu_btn = document.getElementById("menu_btn");
let menu = document.getElementById("menu");
let search = document.getElementById("search");
let search_box = document.getElementById("search_box");
let search_switch = document.getElementById("search_switch");
menu_btn.addEventListener("click", function handleClick() {
  menu.classList.toggle("active");
});
search_switch.addEventListener("click", function handleClick() {
  search.classList.toggle("active");
  search_box.classList.toggle("active");
});
