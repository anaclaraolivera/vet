function validar(){
 
    let nombre = document.getElementById("nombre").value;
    let pass = document.getElementById("pass").value;
    if((nombre !=="")&& (pass!== "")){
        setUser();
        window.location.href="productos.html";
     
    }
    else{
        alert("debe completar los campos");
    }

}



function setUser(){
    let nombre = document.getElementById("nombre").value;  
    localStorage.setItem("user",nombre);

}


