const btn = document.getElementById('btn_menu');
const menu = document.getElementById("menu");

let isOpen = false;

btn.addEventListener("click" , ()=>{
    if(isOpen){
        menu.classList.remove("menu-active")
        isOpen= false;
    }else{
        menu.classList.add("menu-active")
        isOpen=true;
    }
})