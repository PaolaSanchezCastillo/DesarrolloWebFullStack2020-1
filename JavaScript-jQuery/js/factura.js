var tr;
$("#agregar").on("click", function(e) {
    $("#partidas").append(
        "<tr>\
<td>\
<input class=\"clave\" type=\"text\" />\
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