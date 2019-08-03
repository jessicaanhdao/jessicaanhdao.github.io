window.addEventListener("scroll", animateNav);;
function animateNav() {
    var nav = document.getElementById("main-navbar");
    //var about = document.getElementById("about");
    var height = 4000;
    console.log(window.scrollY +","+window.innerHeight);
    if (window.scrollY > 10 && window.scrollY < height) {
        nav.setAttribute('style','opacity : 0.8!important');    
       
    } else {
        nav.setAttribute('style','opacity : 1 !important');
    }
}
/*var javainfo = document.getElementById("javainfo"); 
document.getElementById("javaskill").addEventListener("click", function(e){
    javainfo.style.visibility = "visible";
    javainfo.style.zIndex = "1"; 
    // javainfo.style.left = e.clientX+"px";
    // javainfo.style.left = e.clientX+"px";
    var leftPos = e.clientX-javainfo.left;
    var topPos = e.clientY-javainfo.top; 
    javainfo.style.transform = "translate3d(" + leftPos + "px," + topPos + "px,0)";
});

document.body.addEventListener('mouseover', function(e) {
    javainfo.style.visibility = "hidden";
}, true); */
