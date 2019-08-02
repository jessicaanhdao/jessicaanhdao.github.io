window.addEventListener("scroll", animateNav);;
function animateNav() {
    var nav = document.getElementById("main-navbar");
    //var about = document.getElementById("about");
    console.log(window.scrollY );
    if (window.scrollY > 10) {
        nav.setAttribute('style','opacity : 0.8!important');    
        console.log('scorlling...');    

    } else {
        nav.setAttribute('style','opacity : 1 !important');
    }
}