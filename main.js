const hideMobileMenu = () => {
    document.querySelector('.menu-btn').classList.toggle('menu-btn-active')
    document.querySelector('.header-nav-logo').classList.toggle('header-nav-logo-active')
    document.querySelector('.header-nav').classList.toggle('header-nav-active')
    document.querySelector('.header-nav-menu').classList.toggle('header-nav-menu-active')
    document.querySelector('.mobive-nav-menu').classList.toggle('mobile-menu-active')
}

const menuItems = [...document.querySelectorAll('.site-nav__item')]
const menuLinks = [...document.querySelectorAll('.site-nav__link')]
const mobileMenuLinks = [...document.querySelectorAll('.mobive-nav-menu .site-nav__link')]
let paddingFromTop = window.innerWidth > 1024 ? 120 : -430
menuLinks[0].classList.add('active-link')
mobileMenuLinks[0].classList.add('active-link')
menuItems.map(el => {
    el.addEventListener('click', ()=>{
        window.scrollTo({ top: document.querySelector(`.section-${[...el.classList][1]}`).offsetTop + 1 - paddingFromTop, 
        behavior: 'smooth' })
    })
})
mobileMenuLinks.map(el => el.addEventListener('click', () => {
    hideMobileMenu()
    document.body.classList.toggle('body-overflow')
}))
window.addEventListener('resize', () => {
    paddingFromTop = window.innerWidth > 1024 ? 120 : -430
    window.innerHeight >= 512 ? document.querySelector('.mobive-nav-menu').style.overflowY = 'hidden'
    : document.querySelector('.mobive-nav-menu').style.overflowY = 'scroll'
    if (window.innerWidth > 1024) {
        document.querySelector('.menu-btn').classList.remove('menu-btn-active')
        document.querySelector('.header-nav-logo').classList.remove('header-nav-logo-active')
        document.querySelector('.header-nav').classList.remove('header-nav-active')
        document.querySelector('.header-nav-menu').classList.remove('header-nav-menu-active')
        document.querySelector('.mobive-nav-menu').classList.remove('mobile-menu-active')
    }
})
document.querySelector('.button-container').addEventListener('click', ()=>{
    window.scrollTo({ top: document.querySelector(`.section-contacts`).offsetTop + 1 - paddingFromTop, 
        behavior: 'smooth' })
})
window.addEventListener('scroll', () => {
    
    if (window.pageYOffset + paddingFromTop > document.querySelector(`.section-home`).offsetTop) {
        menuLinks.map(el => el.classList.remove('active-link'))
        mobileMenuLinks.map(el => el.classList.remove('active-link'))
        menuLinks[0].classList.add('active-link')
        mobileMenuLinks[0].classList.add('active-link')
    }
    if (window.pageYOffset + paddingFromTop > document.querySelector(`.section-about`).offsetTop) {
        menuLinks.map(el => el.classList.remove('active-link'))
        mobileMenuLinks.map(el => el.classList.remove('active-link'))
        menuLinks[1].classList.add('active-link')
        mobileMenuLinks[1].classList.add('active-link')
    }
    if (window.pageYOffset + paddingFromTop > document.querySelector(`.section-skills`).offsetTop) {
        menuLinks.map(el => el.classList.remove('active-link'))
        mobileMenuLinks.map(el => el.classList.remove('active-link'))
        menuLinks[2].classList.add('active-link')
        mobileMenuLinks[2].classList.add('active-link')
    }
    if (window.pageYOffset + paddingFromTop > document.querySelector(`.section-projects`).offsetTop) {
        menuLinks.map(el => el.classList.remove('active-link'))
        mobileMenuLinks.map(el => el.classList.remove('active-link'))
        menuLinks[3].classList.add('active-link')
        mobileMenuLinks[3].classList.add('active-link')
    }
    if (window.pageYOffset + paddingFromTop > document.querySelector(`.section-languages`).offsetTop) {
        menuLinks.map(el => el.classList.remove('active-link'))
        mobileMenuLinks.map(el => el.classList.remove('active-link'))
        menuLinks[4].classList.add('active-link')
        mobileMenuLinks[4].classList.add('active-link')
    }
    if (window.pageYOffset + paddingFromTop > document.querySelector(`.section-education`).offsetTop) {
        menuLinks.map(el => el.classList.remove('active-link'))
        mobileMenuLinks.map(el => el.classList.remove('active-link'))
        menuLinks[5].classList.add('active-link')
        mobileMenuLinks[5].classList.add('active-link')
    }
    if (window.pageYOffset + paddingFromTop > document.querySelector(`.section-code`).offsetTop) {
        menuLinks.map(el => el.classList.remove('active-link'))
        mobileMenuLinks.map(el => el.classList.remove('active-link'))
        menuLinks[6].classList.add('active-link')
        mobileMenuLinks[6].classList.add('active-link')
    }
    if (window.pageYOffset + paddingFromTop > document.querySelector(`.section-contacts`).offsetTop) {
        menuLinks.map(el => el.classList.remove('active-link'))
        mobileMenuLinks.map(el => el.classList.remove('active-link'))
        menuLinks[7].classList.add('active-link')
        mobileMenuLinks[7].classList.add('active-link')
    }
    if (Math.round(window.scrollY + window.innerHeight) === document.body.scrollHeight) {
        menuLinks.map(el => el.classList.remove('active-link'))
        mobileMenuLinks.map(el => el.classList.remove('active-link'))
        menuLinks[7].classList.add('active-link')
        mobileMenuLinks[7].classList.add('active-link')
    }
})

document.querySelector('.menu-btn').addEventListener('click', ()=>{
    hideMobileMenu()
    window.innerHeight >= 512 ? document.querySelector('.mobive-nav-menu').style.overflowY = 'hidden'
    : document.querySelector('.mobive-nav-menu').style.overflowY = 'scroll' 
    document.body.classList.toggle('body-overflow')
        
})

document.querySelector('.themetoggle').addEventListener('click', (event) => {
  event.preventDefault();
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
  } else {
    localStorage.setItem('theme', 'dark');
  }
  addDarkClassToHTML();
});

function addDarkClassToHTML() {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      document.querySelector('html').classList.add('dark');
      document.querySelector('.themetoggle span').textContent = 'dark_mode';
      document.querySelector('header').style.backgroundColor = '#585858';
      document.querySelector('.header-nav').style.backgroundColor = '#585858';
      document.querySelector('footer').style.backgroundColor = '#585858';
      const paragraphs = document.querySelectorAll('p.home-bio, p.about-bio, p.language-bio, p.education-description, p.contact-text a, .contact-text');
      paragraphs.forEach(paragraph => {
        paragraph.style.color = '#fff';
      });
    } else {
      document.querySelector('html').classList.remove('dark');
      document.querySelector('.themetoggle span').textContent = 'wb_sunny';
      document.querySelector('header').style.backgroundColor = '#fff';
      document.querySelector('.header-nav').style.backgroundColor = '#fff';
      document.querySelector('footer').style.backgroundColor = '#e0e1e2';
      const paragraphs = document.querySelectorAll('p.home-bio, p.about-bio, p.language-bio, p.education-description, p.contact-text a, .contact-text');
      paragraphs.forEach(paragraph => {
        paragraph.style.color = '#585858';
      });
    }
  } catch (err) { }
}

addDarkClassToHTML();

