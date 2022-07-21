const main=document.querySelector("main");
const bigWrapper=document.querySelector(".big-wrapper");
const btn=document.querySelector(".toggle");
let dark=false;
const animationFtn=function(){
    dark=!dark;
    /*
    const clone=bigWrapper.cloneNode(true);
    main.appendChild(clone);
    */
    if(dark==true){
        bigWrapper.classList.remove("light");
        bigWrapper.classList.add("dark");
        bigWrapper.classList.add("transition");
        
    }else{
        bigWrapper.classList.remove("dark");
        bigWrapper.classList.add("light");
        bigWrapper.classList.add("transition")
      
    }
};


btn.addEventListener("click", animationFtn);