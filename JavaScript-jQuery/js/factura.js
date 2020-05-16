var tr;
$("#agregar").on("click", function(e) {
    $("#partidas").append(
        "<tr>\
<td>\
<input class=\"clave\" type=\"text\" placeholder='TAB para buscar' />\
</td>\
<td>\
<input class='precio' type='number' />\
</td>\
<td>\
<input class='unidades' type='number' min='1' step='1' />\
</td>\
<td>\
<input class='importe' type='text' readonly='readonly' />\
</td>\
<td> \
<img class='eliminar' src='http://icons.iconarchive.com/icons/hopstarter/plastic-mini/24/Button-Delete-icon.png' /> \
</td>\
</tr>"

    );

    // quien lo va a hacer 
    $(".precio:last, .unidades:last").on("change", function(e) {
        var tr = $(this).closest("tr");
        calcularImporte(tr); // accion 1
        calcularTotal(); // accion 2
    });

    $(".eliminar:last").on("click", function(e) {
        $(this).closest("tr").remove();
        calcularTotal();
    });

    $(".clave:last").on("keydown", function(e) {
        var f2 = 9;
        var keycode = e.which;

        if (keycode === f2) {
            $("#dialog").dialog("open");

            //  tr = $(this).closest("tr"); de la tabla PARTIDAS

            // Paso 1. Apuntar al reglon en el que se encuentran 
            //   var articulo = $(this).closest("tr"); De la tabla articulos
            // Paso 2. Apuntar al elemento especifico tocado precioArticulo, claveArticulo

            // Paso 3. Agregar el dato al renglon y al elemento input especifico 
            // BUSCAR EN LA TABLA ARTICULOS  .text()

            // apunta especificamente al .clave, .precio , (".unidades").val(1);
            // INYECTAR en la tabla PARTIDAS .val()
            //NOTA: Siempre se debe llamar al renglon en donde me encuentro
            // $(tr)
            // Paso 4.  close al dialog $("#dialog").dialog("close");
            // Paso 5. Calcular importe y calcular total 



        }
    })

});

//    $("#boton").on("click",function(e){
// } )
// accion 1
function calcularImporte(tr) {
    var precio = Number($(tr).find(".precio").val());
    var unidades = Number($(tr).find(".unidades").val());

    console.log('precio' + precio);
    console.log("unidades " + unidades);

    var importe = precio * unidades;
    console.log('el importe es ' + importe);
    $(tr).find(".importe").val(importe);

}

function calcularTotal() {
    var subtotal = 0;

    $(".importe").each(
        function() {
            subtotal += Number($(this).val());
        }
    );
    $("#subtotal").text(subtotal);
    console.log("El subtotal es " + subtotal.toFixed(2));

    var iva = subtotal * 0.16;
    $("#iva").text(iva.toFixed(2));

    var total = subtotal + iva;
    $("#total").text(total.toFixed(2));




}