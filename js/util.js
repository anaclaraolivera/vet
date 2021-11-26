function peticion(url){
    let resultado={};
    return fetch(url)
    .then(resp=>{
        if(resp.ok){
            return resp.json();
        }
        else{
            throw Error(resp.statusText);
        }
    })
    .then(json=>{
        resultado.estado = "ok";
        resultado.datos= json;
        return resultado;
    })
    .catch(error=>{
        resultado.estado = "error";
        resultado.datos = error;
        return resultado;
    })
}



function getUser(){
    let nombre =localStorage.getItem("user");
    if(nombre!=undefined && nombre!=""){
        document.getElementById("nombreUsuario").innerHTML +=" "+nombre;
    }
    else{
        window.location.href = "login.html"
    }
}

document.addEventListener("DOMContentLoaded",function(e){
    getUser();
})