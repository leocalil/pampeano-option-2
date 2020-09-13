let menuBars = document.getElementById('menu-bars');
let overlay = document.getElementById('overlay');
let nav1 = document.getElementById('nav-1');
let nav2 = document.getElementById('nav-2');
let nav3 = document.getElementById('nav-3');
let nav4 = document.getElementById('nav-4');
let nav5 = document.getElementById('nav-5');
let navItems = [nav1, nav2, nav3, nav4, nav5];

// Control navigation automation
function navAnimation(direction1, direction2){
    navItems.forEach((element,i)=> {
        element.classList.replace(`slide-${direction1}-${i+1}`,`slide-${direction2}-${i+1}`);
    });
}

function toggleNav(){
    // Toggle: Mini Menu Icon Open/Closed 
    menuBars.classList.toggle("change");
    // Togge: Navigation Menu On/Off Screen
    overlay.classList.toggle('overlay-active');
    if(overlay.classList.contains('overlay-active')){
        // Animate in overlay
        overlay.classList.replace('overlay-slide-left','overlay-slide-right');
        // Animate in Nav Items
        navAnimation('out','in');

    }else{
        // Aninimate out overlay
        overlay.classList.replace('overlay-slide-right','overlay-slide-left');
        // Animate out Nav Items
        navAnimation('in','out');
    }
}

// Event Listeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach((element)=>{
    element.addEventListener('click', toggleNav);
});

