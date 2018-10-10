var baseUrlDMS = "http://localhost:8085/DispensarioMedicoService/api"; ///DispensarioMedicoServiceAPI
var baseUrl = "http://localhost:3000/";

$(document).ready(function () {
    
    obtenerListado();
    
    function obtenerListado() {
        var serviceUrl = "/TipoMedicamento/ObtenerListado";
        var endPoint = baseUrlDMS + serviceUrl;

        $.ajax({
            type: "GET",
            url: endPoint,
            dataType: "json",

            success: function (response) {
                if (response.respuesta.codigo === "0") {
                    var tipos = response.tipoMedicamentos;
                    var tiposJSON = JSON.stringify(tipos)

                    
                    for (var i = 0; i < tipos.length; i++) {
                        var id = tipos[i].id;
                        var nombre = tipos[i].nombre;
                        var descripcion = tipos[i].descripcion;
                        $('tbody#tableBody').append(
                        '<tr><td>' + nombre + '</td>'
                        +'<td>'+ descripcion + '</td></tr>')
                    }
                } else {
                    ('#tablaMensaje').innerHTML= 'No hay datos que mostrar.';
                    $('#dataTable').addClass("hidden");
                }
                $('.titulo-h1').get(0).scrollIntoView();
            },

            error: function (err) {
                $('#mensajeDetalle').text('Ocurrio un error en el servidor, por favor intentelo nuevamente.');
                $('#mensajes').removeClass("hidden");
                $('.titulo-h1').get(0).scrollIntoView();
            }
        });
    }


});
