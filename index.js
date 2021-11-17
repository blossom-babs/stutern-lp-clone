const menu = document.querySelector('.nav__mobile--toggle')

menu.addEventListener('click', () => {
    const sideBar = document.querySelector('.nav__sideContent')
    const menu = document.querySelector('.nav__mobile--toggle')



    sideBar.classList.toggle('nav__active')
    menu.classList.toggle('active')
})