// To make the nav bar sticky at top when certain scroll point is reached

const nav = document.querySelector('nav')
window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 86) {
        nav.classList.add('sticky')
    } else {
        nav.classList.remove('sticky')
    }
})