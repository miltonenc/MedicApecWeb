var baseUrlDMS = "http://localhost:8085/DispensarioMedicoService/api"; ///DispensarioMedicoServiceAPI
var baseUrl = "http://localhost:3000/";

function doLogin(usuario, passwaord) {
    var pUsuario = document.getElementById("inputUsuario").value;
    var pPassword = document.getElementById("inputPassword").value;
    var serviceUrl = "/Usuario/Login?pUsuario=" + pUsuario + "&pPassword=" + pPassword;
    
    var endPoint = baseUrlDMS + serviceUrl;
    var request = new FormData();
    request.append('pUsuario', pUsuario);
    request.append('pPassword', pPassword);

    $.ajax({
        type: "GET",
        url: endPoint,
        dataType: "json",

        success: function (response) {
            if (response.respuesta.codigo === "0") {
                var rol = response.usuario.roles[0];
                if(rol.codigo == "A"){
                    window.location.href = "/inicioAdmin.html";
                }else if(rol.codigo == "M"){
                    window.location.href = "/inicioMedicos.html";
                }else if(rol.codigo == "E" || rol.codigo == "P" || rol.codigo == "P"){
                    window.location.href = "/inicioPacientes.html";
                }else{
                    $('#mensajeDetalle').text('El usuario no tiene permisos.');
                    $('#mensajes').removeClass("hidden");
                }

            } else {
                $('#mensajeDetalle').text('El usuario o la contraseña son invalidos, por favor intentelo nuevamente.');
                $('#mensajes').removeClass("hidden");
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

