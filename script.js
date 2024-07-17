// CONTADOR

document.addEventListener("DOMContentLoaded", function(){

    const elementoContador = this.getElementById('contador')

    function updateContador(){

        const dataEvento = new Date("2024-07-18T19:00:00").getTime()
        const dataHoje = new Date().getTime()

        const diferenca = dataEvento - dataHoje

        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24))
        const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 *60))
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

//-----------------------------------------------------------------------------------------
function clickMenu1() {
    nav1 = document.getElementById("nav1")
    if (nav1.style.display == 'block') {
        nav1.style.display = 'none'
    } else {
        nav1.style.display = 'block'
    }
}