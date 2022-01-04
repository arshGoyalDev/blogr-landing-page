
/**************nav bar***************/
let menu = document.querySelector(".menu");
let menuBtn = document.querySelector(".menu-btn");
let mobileItem = document.querySelectorAll(".menu-item");

menuBtn.addEventListener('click', function(){
  menuBtn.classList.toggle("open");
  menu.classList.toggle("mobile-menu");
})

for(let i = 0; i<mobileItem.length; i++){
  mobileItem[i].addEventListener('click', function(){
    mobileItem[i].classList.toggle("mobile-menu-item")
  })
}