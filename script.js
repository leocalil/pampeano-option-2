let menuBars = document.getElementById('menu-bars');
let overlay = document.getElementById('overlay');
let nav1 = document.getElementById('nav-1');
let nav2 = document.getElementById('nav-2');
let nav3 = document.getElementById('nav-3');
let nav4 = document.getElementById('nav-4');
let nav5 = document.getElementById('nav-5');


function toggleNav(){
    // Toggle: Mini Menu Icon Open/Closed 
    menuBars.classList.toggle("change");
    // Togge: Navigation Menu On/Off Screen
    overlay.classList.toggle('overlay-active');
    if(overlay.classList.contains('overlay-active')){
        // Animate in overlay
        overlay.classList.remove('overlay-slide-left'); 
        overlay.classList.add('overlay-slide-right');           
    }else{
        // Aninimate out overlay
        overlay.classList.remove('overlay-slide-right');
        overlay.classList.add('overlay-slide-left');
    }

}

// Event Listeners
menuBars.addEventListener('click', toggleNav);
nav1.addEventListener('click', toggleNav);
nav2.addEventListener('click', toggleNav);
nav3.addEventListener('click', toggleNav);
nav4.addEventListener('click', toggleNav);
nav5.addEventListener('click', toggleNav);

