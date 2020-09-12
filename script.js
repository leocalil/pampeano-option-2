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
        // Animate in Nav Items
        nav1.classList.remove('slide-out-1');
        nav1.classList.add('slide-in-1');  
        nav2.classList.remove('slide-out-2');
        nav2.classList.add('slide-in-2');
        nav3.classList.remove('slide-out-3');
        nav3.classList.add('slide-in-3');
        nav4.classList.remove('slide-out-4');
        nav4.classList.add('slide-in-4');
        nav5.classList.remove('slide-out-5');
        nav5.classList.add('slide-in-5');
    }else{
        // Aninimate out overlay
        overlay.classList.remove('overlay-slide-right');
        overlay.classList.add('overlay-slide-left');
        // Animate out Nav Items
        nav1.classList.remove('slide-in-1');
        nav1.classList.add('slide-out-1');  
        nav2.classList.remove('slide-in-2');
        nav2.classList.add('slide-out-2');
        nav3.classList.remove('slide-in-3');
        nav3.classList.add('slide-out-3');
        nav4.classList.remove('slide-in-4');
        nav4.classList.add('slide-out-4');
        nav5.classList.remove('slide-in-5');
        nav5.classList.add('slide-out-5');
    }

}

// Event Listeners
menuBars.addEventListener('click', toggleNav);
nav1.addEventListener('click', toggleNav);
nav2.addEventListener('click', toggleNav);
nav3.addEventListener('click', toggleNav);
nav4.addEventListener('click', toggleNav);
nav5.addEventListener('click', toggleNav);

