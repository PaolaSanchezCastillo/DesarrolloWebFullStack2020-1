var tr;
$("#agregar").on("click", function(e) {
    $("#partidas").append(
        "<tr>\
<td>\
<span class='ui-icon ui-icon-arrowthick-2-n-s'></span>\
</td>\
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
<td>\
<img class='eliminar' src='http://icons.iconarchive.com/icons/hopstarter/button/16/Button-Delete-icon.png' />\
</td>\
</tr>"
    );

    $(".precio:last, .unidades:last").on("change", function(e) {
        var tr = $(this).closest("tr");

        calcularImporte(tr);
        calcularTotales();
    });

    $(".clave:last").on("keydown", function(e) {
        var f2 = 9;
        var keycode = e.which;

        if (keycode === f2) {
            tr = $(this).closest("tr");
            $("#dialog").dialog("open");
        }
    });

    $(".eliminar:last").on("click", function(e) {
        $(this).closest("tr").remove();
        calcularTotales();
    });
});

$("tr.articulo td").on("click", function(e) {
    var articulo = $(this).closest("tr");

    var claveArticulo = $(articulo).find(".claveArticulo").text();
    var precioArticulo = Number(
        $(articulo).find(".precioArticulo").text()
        .replace('$', '')
        .replace(',', '')
    );

    $(tr).find(".clave").val(claveArticulo);

});

function calcularImporte(tr) {
    var precio = Number($(tr).find(".precio").val());
    var unidades = Number($(tr).find(".unidades").val());

    var importe = precio * unidades;
    $(tr).find(".importe").val(importe)
}

function calcularTotales() {
    var subtotal = 0;
    $(".importe").each(function() {
        subtotal += Number($(this).val());
    });

    $("#subtotal").text(subtotal.toFixed(2));

    var iva = subtotal * 0.16;
    $("#iva").text(iva.toFixed(2));

    var total = subtotal * 1.16;
    $("#total").text(total.toFixed(2));
}