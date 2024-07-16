// Slider
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelector(".slides")
    const prevBtn = document.querySelector("#prev-btn")
    const proxBtn = document.querySelector("#prox-btn")
    const slideWidth = document.querySelector(".slides img").clientWidth

    let currentIndex = 0;

    function movedorDeSlides(index){
        currentIndex = index;
        slides.style.transform = `translateX(${currentIndex * slideWidth}px)`
    }

    function proxSlide(){
        if(currentIndex < slides.children.length - 1){
            currentIndex++
        }else{
            currentIndex=0
        }
        movedorDeSlides(currentIndex)
    }

    function prevSlide(){
        if(currentIndex > 0){
            currentIndex--
        }else{
            currentIndex = slides.children.length - 1
        }
        movedorDeSlides(currentIndex)
    }

    proxBtn.addEventListener("click", proxSlide)
    prevBtn.addEventListener("click", prevSlide)

    setInterval(proxSlide, 3000)
})

//-----------------------------------------------------------------------------------------
function clickMenu(){
    nav1=document.getElementById("nav1")
    if(nav1.style.display =='block'){
    nav1.style.display='none'
}else{
    nav1.style.display = 'block'
}
}