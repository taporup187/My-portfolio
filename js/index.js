const nav = document.querySelector("nav");

window.onscroll=()=>{
    scrollSwadow();
}
function scrollSwadow(){
    if(document.body.scrollTop > 500 ||
        document.documentElement.scrollTop > 500){
         nav.style.boxShadow="0px 5px 8px #ddd";
    }
    else{
        nav.style.boxShadow="none";
    }
}