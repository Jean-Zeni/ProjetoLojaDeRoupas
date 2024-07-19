// CONTADOR
document.addEventListener("DOMContentLoaded", function () {

    const elementoContador = this.getElementById('contador')

    function updateContador() {

        const dataEvento = new Date("2024-07-19T19:00:00").getTime()
        const dataHoje = new Date().getTime()

        const diferenca = dataEvento - dataHoje

        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24))
        const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const mins = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60))
        const seg = Math.floor((diferenca % (1000 * 60)) / 1000)

        document.getElementById('dias').innerText = dias
        document.getElementById('horas').innerText = horas
        document.getElementById('min').innerText = mins
        document.getElementById('seg').innerText = seg
    }

    setInterval(updateContador, 1000)
})
//FIM DO CONTADOR

// SLIDER

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides')
    const slide = document.querySelectorAll('.slide')
    const next = document.querySelector('.next')
    const prev = document.querySelector('.prev')

    let currentIndex = 0
    let slideinterval

    function showSlide(index) {
        slides.style.transform = `translateX(${-index * 100}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slide.length
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slide.length) % slide.length
        showSlide(currentIndex)
    }

    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 2000);
    }

    function stopSlideShow() {
        clearInterval(slideInterval);
    }

    next.addEventListener('click', () => {
        stopSlideShow();
        nextSlide();
        startSlideShow();
    });

    prev.addEventListener('click', () => {
        stopSlideShow();
        prevSlide();
        startSlideShow();
    });

    slides.addEventListener('mouseenter', stopSlideShow);
    slides.addEventListener('mouseleave', startSlideShow);

    startSlideShow();
});

// FIM DO SLIDER

//-----------------------------------------------------------------------------------------
function clickMenu1() {
    nav1 = document.getElementById("nav1")
    if (nav1.style.display == 'block') {
        nav1.style.display = 'none'
    } else {
        nav1.style.display = 'block'
    }
}
