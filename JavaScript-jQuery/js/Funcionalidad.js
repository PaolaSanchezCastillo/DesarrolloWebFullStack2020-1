$(document).ready(function() {

    $("#tarea").on("focus", function(e) {
        $(this).css("background-color", "yellow");
    });

    $("#editar").on("mouseenter", function(e) {
        $(this).css("text-transform", "uppercase")
    });


    $("#editar").on("click", function(e) {
        var txt = $(this).text();

        if (txt === "Editar") {
            $("#agregar").removeAttr("disabled");
            $("#tarea").css("boder", "1px solid red");
        } else {
            $(this).text("Editar");
            $("#agregar").attr("disabled", "disable");
        }


    });

    $("#agregar").on("click", function(e) {
        var tarea = $("#tarea").val();
        $("#lista").append("<li> " + tarea + "</li>");

    });

    $("#lista").on("DOMSubtreeModified", function() {
        $("#lista>li").on("click", function(e) {
            $("#realizadas").append(this);
        });



    });

    $("#imprimir").on("click", function(e) {
        var mensaje = "Cosas realizadas: \n ";
        $("#realizadas>li").each(function() {
            mensaje += $(this).text() + " \n";
        });
        alert(mensaje);
    });








});