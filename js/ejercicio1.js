var cadena = prompt("Introduce el nombre y los apellidos")
var sinEspacios = cadena.replaceAll(' ', '');
var partes = cadena.split(' ');
var usuario1 = partes[0] + partes[1].charAt(0) + partes[2].charAt(0);
var usuario2 = partes[0].charAt(0) + partes[0].charAt(1) + partes[1].charAt(0) + partes[1].charAt(1) + partes[2].charAt(0) + partes[2].charAt(1);

function generarPasswd(nombre) {
    var contraseña = "";

    for (var i = 0; i < nombre.length; i++) {
        contraseña += nombre[i] + i;
    }

    return contraseña;
}


var nombre = prompt("Introduce tu nombre");



alert("La longitud de la cadena es " + sinEspacios.length);
alert("cadena en minusculas : " + cadena.toLowerCase());
alert("cadena en mayúsculas: " + cadena.toUpperCase);
alert( "Nombre: " + partes[0] + "\nApellido 1: " + partes[1] + "\nApellido 2: " + partes[2]);
alert("Propuesta de nombre de usuario 1: " + usuario1);
alert("Propuesta de nombre de usuario 2: " + usuario2);
//      RETO EXTRA    //
alert("Contraseña generada: " + generarPasswd(nombre));





