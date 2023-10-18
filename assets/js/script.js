
document.getElementById("btn_register").addEventListener("click", register);
document.getElementById("btn_iniciar-sesion").addEventListener("click", iniciarSesion);
window.addEventListener("resize", anchoPagina);
document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){
    document.getElementById("move-content").classList.toggle('move-container-all');
}

//Variables
var contenedor_login_register = document.querySelector(".contenedor_login-register");
var formulario_login = document.querySelector(".formulario_login");
var formulario_register = document.querySelector(".formulario_register");
var caja_trasera_login = document.querySelector(".caja_trasera-login");
var caja_trasera_register = document.querySelector(".caja_trasera-register");





function anchoPagina(){
    if(window.innerWidth > 850){
        caja_trasera_login.style.display= "block";
        caja_trasera_register.style.display= "block";
    }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display ="block";
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px"; 
    }
}


anchoPagina();


function iniciarSesion(){
    if(window.innerWidth > 850){
    formulario_register.style.display = "none";
    contenedor_login_register.style.left = "10px";
    formulario_login.style.display = "block";
    caja_trasera_register.style.opacity = "1";
    caja_trasera_login.style.opacity = "0";
    }else{
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "none";
    }
}



function register(){

    if(window.innerWidth > 850){
        formulario_register.style.display = "block";
        formulario_register.style.top= "-195px";
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
    }else{
     formulario_register.style.display = "block";
    // formulario_register.style.top= "-130px";
    contenedor_login_register.style.left = "0px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.display = "none";
    caja_trasera_login.style.display = "block";
    caja_trasera_login.style.opacity = "1";
 }
}


//filtro de busqueda 
document.getElementById("search-input").addEventListener("keyup", buscador_interno);

function buscador_interno(){
    filter = inputSearch.value.toUpperCase;
    li = box_search.getElementsByTagName("li"); 
    
    //elementos
    for(i = 0; i < li.length; i++){
        a = li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText;
        if(textValue.toUpperCase().indexOf(filter) < -1){
            li[i].style.display = "";
        }else{
            li[i].style.display = "none";
        }
    }
}


// Manejador de eventos para los enlaces de la barra de navegación
document.querySelectorAll("#navbar a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Evita el comportamiento predeterminado del enlace

    const sectionId = this.getAttribute("href"); // Obtiene el ID de la sección objetivo

    // Desplazamiento suave hacia la sección objetivo
    document.querySelector(sectionId).scrollIntoView({
      behavior: "smooth",
    });
  });
});


