//toggel background active
const slideNavigator = (name) => {
    let slides = document.querySelectorAll(".bg-slide");
    slides.forEach((slide) => {
        slide.classList.remove("active");
        if (slide.classList.contains(name)) {
            slide.classList.add('active')
        }
    });
};

//switch background
window.addEventListener('load', () => {
    const slideBtnList = document.querySelectorAll('.slide-btn')
    slideBtnList.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault()
            slideBtnList.forEach(el => {
                el.classList.remove('active')
            })
            this.classList.add('active')
            slideNavigator(this.getAttribute('data-target'))
        })
    })
})
// active section
const sectionNavigator = name => {
    let sections = document.querySelectorAll('section')
    let header = decoment.querySelector('header')
    sections.forEach(section => {
        section.classList.remove('section-show')
        if (section.classList.contains(name)) {
            section.classList.add('section-show')
            header.classList.add('active')
        }
    })
}

// navigation  to sections
window.addEventListener('load', () => {
    const navLst = document.querySelectorAll('.nav-btn')
    navLst.forEach(nav => {
        nav.addEventListener('click', function (e) {
            e.preventDefault()
            navLst.forEach(el => {
                el.classList.remove('active')
            })
            this.classList.add('active')
            sectionNavigator(this.getAttribute('data-target'))
            screen, width < 768 && toggleMenu()
        })
    })
})