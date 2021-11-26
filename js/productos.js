let listaProductos=[];


function mostrarProductos(){
    let html="";
    for(producto of listaProductos){
        html += `
        <a href="producto-info.html" class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-5">
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                </div>
                <div class="col-3">
                    <p>$ ${producto.precio}</p>
                </div>
                
                
                
            </div>
        </a>
        `
    }

    document.getElementById("lista").innerHTML = html;
}
function buscar() {
    var input, filter, links, h3, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    
    links = document.getElementsByTagName("h3");
    for (i = 0; i < links.length; i++) {
        h3 = links[i];
        txtValue = h3.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            h3.parentNode.parentNode.parentNode.style.display = "";
        
            
        }else{
            h3.parentNode.parentNode.parentNode.style.display = "none";

        }
    }
}
document.addEventListener("DOMContentLoaded",function(e){
    peticion("https://virmorrone.github.io/veterinaria-api/productos.json")
    .then(respuesta=>{
        if(respuesta.estado==="ok"){
            listaProductos= respuesta.datos;
            mostrarProductos();

        }
    })
})