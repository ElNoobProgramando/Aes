
 //la condición
 

function descargarArchivo(contenidoEnBlob, nombreArchivo) {
    var reader = new FileReader();
    reader.onload = function (event) {
        var save = document.createElement('a');
        save.href = event.target.result;
        save.target = '_blank';
        save.download = nombreArchivo || 'archivo.dat';
        var miCampoTexto = document.getElementById("textNombre").value;
        var contra = document.getElementById("password").value;
        console.log(miCampoTexto.length);
        console.log(contra.length);

    if(miCampoTexto.length==16 ||contra.length==16){ 
        var clicEvent = new MouseEvent('click', {
            'view': window,
            'bubbles': true,
            'cancelable': true
    })}else{alert('El campo dess texto esta vacio!');};
    
        save.dispatchEvent(clicEvent);
        (window.URL || window.webkitURL).revokeObjectURL(save.href);
    };
    reader.readAsDataURL(contenidoEnBlob);
};
var mensaje= document.getElementById('textNombre').value
var passwords = document.getElementById('password').value
function obtenerDatos() {
    return {
         nombre: CryptoJS.AES.encrypt(mensaje, passwords)
        
        
      
    };
};




function generarTexto(datos) {
    var texto = [];
    texto.push(datos.nombre);
    
    return new Blob(texto, {
        type: 'text/plain'
    });
};





document.getElementById('boton-txt').addEventListener('click', function () {
    var datos = obtenerDatos();
    descargarArchivo(generarTexto(datos), 'cifrado.txt');
}, false);