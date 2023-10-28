const btn = document.querySelector(".mobile-nav-toggle");
const nav = document.querySelector(".primary-navigation");
const header = document.querySelector("header");
btn.addEventListener("click", ()=>{
    btn.classList.toggle("visible");
    nav.classList.toggle("visible");
    header.classList.toggle("overlay");
});

//# sourceMappingURL=index.9a97c2a9.js.map
