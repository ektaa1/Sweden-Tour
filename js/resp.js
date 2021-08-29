burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightnav = document.querySelector('.rightnav')
navlist = document.querySelector('.navlist')
burger.addEventListener('click',()=>{
    rightnav.classList.toggle('vis-r');
    navlist.classList.toggle('vis-r');
    navbar.classList.toggle('heightnav-r');
})