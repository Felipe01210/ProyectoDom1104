const add = document.getElementById("add");
const header = document.getElementById("header");

const titulo = document.getElementById("titulo");
const descripcion = document.getElementById("descripcion");
const tipo = document.getElementById("tipo");

const notas = document.getElementById("notas");
const recordatorios = document.getElementById("recordatorios");
const eventos = document.getElementById("eventos");

//Get de notas, recordatorios y eventos

//con XMLHttpRequest

function getData(tipo){
    //Cada vez que ejecuto la funcion se crea una nueva peticion
    let peticion = new XMLHttpRequest();

    //Mando la peticion
    let result = null;
    peticion.open('GET', `http://localhost:3000/${tipo}`);
    peticion.send();
    peticion.addEventListener('readystatechange', function() {
        if (peticion.readyState === 4) {
            if (peticion.status === 200) {
                result = JSON.parse(peticion.responseText);
                switch(tipo){
                    case("notas"):
                        console.log(result);
                        break;
                    case("recordatorio"):
            
                        break;
                    case("evento"):
            
                        break;
                    default:
                        console.log("Ande va mostro");
                }
            } else {
                result = "Error en la peticion";
            }
        }
    })

}

getData("notas");
getData("recordatorios");
getData("eventos");

//con fetch

//async await

function addObjeto(tipo, objeto){
    switch(tipo){
        case("Notas"):

            break;
        case("Recordatorio"):

            break;
        case("Evento"):

            break;
        default:
            console.log("Ande va mostro");
    }
}

function listar(array, tipo){
    switch(tipo){
        case("notas"):
            
            break;
        case("recordatorio"):

            break;
        case("evento"):

            break;
        default:
            console.log("Ande va mostro");
    }

    array.forEach(element => {
        let li = document.createElement("li");
        let text = document.createElement("p");
        text.textContent = `${element.titulo}: ${element.descripcion}`;
        let editBtt = document.createElement("button");
        editBtt.textContent = "Editar";
        let deleteBtt = document.createElement("button");    
    });


}