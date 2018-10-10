var baseUrlDMS = "http://localhost:8085/DispensarioMedicoService/api"; ///DispensarioMedicoServiceAPI
var baseUrl = "http://localhost:3000/";

$(document).ready(function () {
    
    obtenerListado();
    
    function obtenerListado() {
        var serviceUrl = "/LaboratorioFabricante/ObtenerListado";
        var endPoint = baseUrlDMS + serviceUrl;

        $.ajax({
            type: "GET",
            url: endPoint,
            dataType: "json",

            success: function (response) {
                if (response.respuesta.codigo === "0") {
                    var datos = response.laboratorioFabricantes;
                    var datosJSON = JSON.stringify(datos)

                    
                    for (var i = 0; i < datos.length; i++) {
                        var id = datos[i].id;
                        var nombre = datos[i].nombre;
                        var descripcion = datos[i].descripcion;
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
