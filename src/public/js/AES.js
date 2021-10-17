function Aceptar(){
    var n="no";
    for(var i=0; i<document.c.tipo.length; i++){
        if(document.c.tipo[i].checked){
            if(document.c.tipo[i].value == 1){
                const b = document.createElement("a");
                b.href="/cifrado1"
                b.click();
                n="si"
            }
            if(document.c.tipo[i].value==2){
                const b = document.createElement("a");
                b.href="/cifrado2"
                b.click();
                n="si"
            }
            if(document.c.tipo[i].value==3){
                const b = document.createElement("a");
                b.href="/cifrado3"
                b.click();
                n="si"
            }
        }
    }
    if(n=="no"){
        alert("Por favor elije una opcion")
    }
}
