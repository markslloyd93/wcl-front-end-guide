//DOM elements
let menuIcon = document.querySelector('#open');
let closeIcon = document.querySelector('.btn-close-nav');
let mobileMenu = document.querySelector('.wcl-header-mobile');

// testing the DOM
//console.log(menuIcon);
//console.log(closeIcon);
//console.log(mobileMenu);





//open and close function
function openClose(trigger, close, element){
  trigger.addEventListener('click', event =>{
    element.style.cssText = 'display: block; height: 100vh;';
  });
  close.addEventListener('click', event =>{
    element.style.cssText = "display: none;"
  });
};

function toggle(trigger, element){
  trigger.addEventListener('click', event =>{
    element.style.display == "none" ? element.style.display = "block" : element.style.display = "none";
  });
};

toggle(menuIcon, mobileMenu)


function dropDown(trigger,element){
  trigger.addEventListener('click', function(){
    element.style.cssText = 'display: flex;';
  });
};
