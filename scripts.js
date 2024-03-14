const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")


function MostrarForm() {
    form.style.left = "50%"
    form.style.transform = "translatex(-50%)"
    mascara.style.visibility = "visible"
}

function esconderForm(){
    form.style.left = "-300px"
    form.style.transform = "translatex(0)"
    mascara.style.visibility = "hidden"
}