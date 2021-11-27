const nav=document.querySelector(".navbar-demo");
const boton=document.querySelector(".menu-btn");
const enlaces=document.querySelectorAll(".nav-bar a");

boton.addEventListener("click",
    ()=>{
        nav.classList.toggle('open-nav');
    });

enlaces.forEach(
    (item)=>{
        item.addEventListener("click",
            ()=>{
                nav.classList.remove('open-nav');
            });
    }
);