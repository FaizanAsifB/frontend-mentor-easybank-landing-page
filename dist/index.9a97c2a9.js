const btn = document.querySelector(".mobile-nav-toggle");
const nav = document.querySelector(".primary-navigation");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");
btn.addEventListener("click", ()=>{
    btn.classList.toggle("visible");
    nav.classList.toggle("visible");
    overlay.classList.toggle("fade-in");
    // overlay.classList.toggle('fade-out')
    body.classList.toggle("noscroll");
});

//# sourceMappingURL=index.9a97c2a9.js.map
