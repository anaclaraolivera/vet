/*mostrar los productos relacionados de la url "https://virmorrone.github.io/veterinaria-api/1.json"*/
let productos=[];
let infoProducto={};
function mostrarRelacionados(array){

    let html = "";
    for(let i = 0; i< array.length;i++){
        let relacionado = array[i];
        html +=`<div>${productos[relacionado].nombre} </div>`
    }

    document.getElementById("relacionados").innerHTML = html;

}

document.addEventListener("DOMContentLoaded",function(e){
    peticion("https://virmorrone.github.io/veterinaria-api/1.json")
    .then(respuesta1=>{
        if(respuesta1.estado==="ok"){
            infoProducto = respuesta1.datos[0];
            //mostrarInfoProducto(imagen, descripcion, precio)
            peticion("https://virmorrone.github.io/veterinaria-api/productos.json")
            .then(respuesta2=>{
                if(respuesta2.estado=="ok"){
                    productos = respuesta2.datos;
                    mostrarRelacionados(infoProducto.relacionados);
                }
            })


        }
    })
 
   
})