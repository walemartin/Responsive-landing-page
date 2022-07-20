const main=document.querySelector("main");
const bigWrapper=document.querySelector(".big-wrapper");
const btn=document.querySelector(".toggle");
let dark=false;
const animationFtn=function(){
    const conle=bigWrapper.cloneNode(true);
    main.appendChild(conle);
    dark=!dark;
    if(dark==true){
        bigWrapper.classList.remove("light");
        bigWrapper.classList.add("dark");
    }else{
        bigWrapper.classList.remove("dark");
        bigWrapper.classList.add("light");
    }
};


btn.addEventListener("click", animationFtn);