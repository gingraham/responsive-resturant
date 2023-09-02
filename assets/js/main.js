//================== Mobile Menu Toggle Functionality =================//
const toggleBtn = document.querySelector('#nav-toggle');
const navMenu = document.querySelector('#nav-menu');
const navLinks = document.querySelectorAll('.nav__link')

// Implement function that opens and closes the menu

toggleBtn.addEventListener('click', ()=>{
    if(navMenu.classList.contains('show__menu')){
        navMenu.classList.remove('show__menu')
    }else{
        navMenu.classList.add('show__menu')
    }
})
// Implement function that closes the menu when a link is clicked
navLinks.forEach(navLink =>{
    navLink.addEventListener('click', ()=>{
        navMenu.classList.remove('show__menu') 
    })
})

//================== Scroll sections add Active link =================//
const section = document.querySelectorAll('section[id]');
const scrollActive = () =>{
    const scrollY = window.pageYOffset
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop =  current.offsetTop - 50;
        sectionId = current.getAttribute('id');
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

//================== Change Header Background on Scroll =================//

const scrollHeader = () =>{
    const nav = document.querySelector('#header');
    if(this.scrollY >= 200){
        nav.classList.add('scroll-header')
    }else{
        nav.classList.remove('scroll-header')
    }
}

window.addEventListener('scroll', scrollHeader)


//================== BUTTON TO SCROLL TO TOP =================//

const scrollTop = () =>{
    const scrollTop = document.querySelector('#scroll-top');
    if(this.scrollY >= 560){
        scrollTop.classList.add('scroll-top')
    }else{
        scrollTop.classList.remove('scroll-top')
    }
}

window.addEventListener('scroll', scrollTop)