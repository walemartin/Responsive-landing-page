 
const bigWrapper=document.querySelector(".big-wrapper");
const btn=document.querySelector(".toggle");
const main=document.querySelector("main");


let dark=false
const animationFtn=function(){
    dark=!dark
    if(dark== true){
        bigWrapper.classList.remove("light");
        bigWrapper.classList.add("dark");
        bigWrapper.classList.add("display-effect");
        bigWrapper.classList.remove("display-re-effect");

    }else{
        bigWrapper.classList.remove("dark");
        bigWrapper.classList.add("light");
        bigWrapper.classList.remove("display-effect");
        bigWrapper.classList.add("display-re-effect");

    }};

    btn.addEventListener("click", animationFtn);


const navMenuSlide=()=>{
const navMenu=document.querySelector(".nav-menu");
const burger=document.querySelector(".burger");

burger.addEventListener("click", ()=>{
    navMenu.classList.toggle("nav-display");
    const navItem=document.querySelectorAll(".nav-menu li");
    navItem.forEach((value, index)=>{
    if(value.style.animation){
        value.style.animation="";
    }else{
        value.style.animation=`nav-item-animate 0.2s ease forwards ${index / 20 + 0.5}s`
    }
});
burger.classList.toggle("toggleHam");
})
}

navMenuSlide();
