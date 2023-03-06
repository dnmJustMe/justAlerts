$(function () {

    var elementos = document.getElementsByClassName("smooth-scroll")

    Array.prototype.forEach.call(elementos, e => {
        e.onclick = () => {
            var href = e.getAttribute('href')

            var scroll_to = document.getElementById(href)
            scroll_to.scrollIntoView({ behavior: "smooth", block: "start" });

        };
    });

$("#tipo").change(function () {
    $("#btn-probar").removeClass("btn-secondary")
    var tipo = ""
    switch ($("#tipo").val()) {
        case "success":
            tipo = "btn-success"
            break;
        case "danger":
            tipo = "btn-danger"
            break;
        case "warning":
            tipo = "btn-warning"
            break;
        case "info":
            tipo = "btn-primary"
            break;
    }

    $("#btn-probar").removeClass("btn-secondary")
    $("#btn-probar").removeClass("btn-success")
    $("#btn-probar").removeClass("btn-danger")
    $("#btn-probar").removeClass("btn-warning")
    $("#btn-probar").removeClass("btn-primary")
    $("#btn-probar").addClass(tipo)
})
    
    
})

function activar_alerta() {
    var tipo = $("#tipo").val()
    var mensaje = $("#mensaje").val()
    var x = $("#x").val()
    var y = $("#y").val()
    var tiempo = $("#tiempo").val()
    var distancia = $("#distancia").val()    

    if(tipo != null && mensaje != "" && x != null && y != null && tiempo != "" && distancia != ""){
        alerta(tipo, mensaje, x, y, parseInt(tiempo), parseInt(distancia))
    }else{
        alerta('danger', 'Debe ingresar todos los parámetros de la función.', 'left', 'top', 3000, 0)
    }
    
}

// Get the button:
let mybutton = document.getElementById("back_to_top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}