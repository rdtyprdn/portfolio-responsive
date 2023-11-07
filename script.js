// NavScroll..
let nav = document.querySelector('nav');

window.addEventListener('scroll',()=>{
    nav.classList.toggle('nav-scroll', window.scrollY > 0);
});

// Active Toggle..
let AllNavLinkA = document.querySelectorAll('.nav-links li a')

//Active Add...
AllNavLinkA.forEach(item=>{
    item.addEventListener('click',()=>{
        removeActive();
        item.classList.add('active')
    })
})
//Active Remove
const removeActive =()=> AllNavLinkA.forEach(itme=>{
    itme.classList.remove('active')
});
//nav links toggler
let menuBars = document.querySelector('nav button');
let navlinks = document.querySelector('.nav-links')
menuBars.addEventListener('click',()=>{
navlinks.classList.toggle('nav-link-block')
});