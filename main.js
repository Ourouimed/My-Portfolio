// Dark Mode
let DarkBtn = document.querySelector(".dark-mode");
let body = document.body;

if (localStorage.getItem("dark-mode") === "enabled") {
  body.classList.add("dark");
}

const DarkMode = () => {
  body.classList.toggle("dark");
  
  if (body.classList.contains("dark")) {
    localStorage.setItem("dark-mode", "enabled");
  } else {
    localStorage.setItem("dark-mode", "disabled");
  }
}

DarkBtn.addEventListener("click", DarkMode);

// Sticky Header
const StickyHeader = ()=>{
  let header = document.querySelector("header");
  if (window.pageYOffset > 30) {
    header.classList.add("sticky");
  } 
  else {
    header.classList.remove("sticky");
  }
}

// Onscroll sections
const SecOnscroll = ()=>{
  let sections = document.querySelectorAll("section")
  sections.forEach(sec =>{
    let top = window.scrollY
    let offset = sec.offsetTop
    let height = sec.offsetHeight
    top >= offset && top < offset + height ?
       sec.classList.add("active") + document.querySelector(sec.dataset.sec).classList.add("active")
       : sec.classList.remove("active") + document.querySelector(sec.dataset.sec).classList.remove("active")
  })
}


window.addEventListener("scroll", () => {
  StickyHeader();
  SecOnscroll()
});




