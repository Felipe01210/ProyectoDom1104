const add = document.getElementById("add");
const addForm = document.getElementById("addForm");
const header = document.getElementById("header");

const titulo = document.getElementById("titulo");
const descripcion = document.getElementById("descripcion");
const tipo = document.getElementById("tipo");

const notas = document.getElementById("notas");
const recordatorios = document.getElementById("recordatorios");
const eventos = document.getElementById("eventos");

add.addEventListener("click", (e) => {
    if(add.className == "add"){

        e.preventDefault();
        let objeto = {titulo: titulo.value, descripcion: descripcion.value};
    
        let li = document.createElement("li");
        li.setAttribute("titulo",objeto.titulo);
    
        let p = document.createElement("p");
        p.textContent = `${objeto.titulo}: ${objeto.descripcion}`;
    
        let label = document.createElement("label");
        label.textContent = "Cambiar categoria: ";
    
        let editar = document.createElement("button");
        editar.textContent = "Editar";
        editar.setAttribute("titulo", objeto.titulo);
    
        editar.addEventListener("click", (e) => {
            let item = localStorage.getItem(e.target.getAttribute("titulo"));
            titulo.value = editar.getAttribute("titulo");
            titulo.setAttribute("readOnly", "true");
            descripcion.value = item.split(",")[0].split(":")[1].trim();
            tipo.value = item.split(",")[1].split(":")[1].trim();
            add.classList = ["edit"];
            add.textContent = "Editar";
            header.textContent = `Editando ${tipo.value}: ${titulo.value}`;
        })
    
        let borrar = document.createElement("button");
        borrar.textContent = "Borrar";
        borrar.addEventListener("click", (e) => {
            e.target.parentNode.parentNode.removeChild(e.target.parentNode);
        })
    
        li.appendChild(p);
        li.appendChild(label);
        li.appendChild(borrar);
        li.appendChild(editar);
        
    
        switch(tipo.value){
            case("Nota"):
                notas.appendChild(li);
                localStorage.setItem(`${objeto.titulo}`, `descripcion: ${objeto.descripcion}, tipo: ${tipo.value}`);
                break;
            case("Recordatorio"):
                recordatorios.appendChild(li);
                localStorage.setItem(`${objeto.titulo}`, `descripcion: ${objeto.descripcion}, tipo: ${tipo.value}`);
                break;
            case("Evento"):
                eventos.appendChild(li);
                localStorage.setItem(`${objeto.titulo}`, `descripcion: ${objeto.descripcion}, tipo: ${tipo.value}`);
                break;
            default:
                console.log("default");
        }
    }else if(add.className == "edit"){
        e.preventDefault();
        let objeto = {titulo: titulo.value, descripcion: descripcion.value};
        let oldTipo = localStorage.getItem(objeto.titulo).split(",")[1].split(":")[1].trim();
        
        let newLi = document.createElement("li");
        newLi.setAttribute("titulo",objeto.titulo);
    
        let p = document.createElement("p");
        p.textContent = `${objeto.titulo}: ${objeto.descripcion}`;
    
        let label = document.createElement("label");
        label.textContent = "Cambiar categoria: ";
    
        let editar = document.createElement("button");
        editar.textContent = "Editar";
        editar.setAttribute("titulo", objeto.titulo);
    
        editar.addEventListener("click", (e) => {
            let item = localStorage.getItem(e.target.getAttribute("titulo"));
            titulo.value = editar.getAttribute("titulo");
            titulo.setAttribute("readOnly", "true");
            descripcion.value = item.split(",")[0].split(":")[1].trim();
            tipo.value = item.split(",")[1].split(":")[1].trim();
            add.classList = ["edit"];
            add.textContent = "Editar";
            header.textContent = `Editando ${tipo.value}: ${titulo.value}`;
        })
    
        let borrar = document.createElement("button");
        borrar.textContent = "Borrar";
        borrar.addEventListener("click", (e) => {
            e.target.parentNode.parentNode.removeChild(e.target.parentNode);
        })
    
        newLi.appendChild(p);
        newLi.appendChild(label);
        newLi.appendChild(borrar);
        newLi.appendChild(editar);

        

        switch(tipo.value){
            case("Nota"):
                if(oldTipo == tipo.value){
                    notas.querySelectorAll("li").forEach(li => {
                        if(li.getAttribute("titulo") == objeto.titulo){
                            li.parentNode.replaceChild(newLi, li);
                        }
                    });
                }else{
                    document.querySelectorAll("li").forEach(li => {
                        if(li.getAttribute("titulo") == objeto.titulo){
                            li.parentNode.removeChild(li);
                            notas.appendChild(newLi);
                        }
                    })
                }
                localStorage.setItem(`${objeto.titulo}`, `descripcion: ${objeto.descripcion}, tipo: ${tipo.value}`);
                break;
            case("Recordatorio"):
                if(oldTipo == objeto.tipo){
                    recordatorios.querySelectorAll("li").forEach(li => {
                        if(li.getAttribute("titulo") == objeto.titulo){
                            li.parentNode.replaceChild(newLi, li);
                        }
                    });
                }else{
                    document.querySelectorAll("li").forEach(li => {
                        if(li.getAttribute("titulo") == objeto.titulo){
                            li.parentNode.removeChild(li);
                            recordatorios.appendChild(newLi);
                        }
                    })
                }
                localStorage.setItem(`${objeto.titulo}`, `descripcion: ${objeto.descripcion}, tipo: ${tipo.value}`);
                break;
            case("Evento"):
                if(oldTipo == objeto.tipo){
                    eventos.querySelectorAll("li").forEach(li => {
                        if(li.getAttribute("titulo") == objeto.titulo){
                            li.parentNode.replaceChild(newLi, li);
                        }
                    });
                }else{
                    document.querySelectorAll("li").forEach(li => {
                        if(li.getAttribute("titulo") == objeto.titulo){
                            li.parentNode.removeChild(li);
                            eventos.appendChild(newLi);
                        }
                    })
                }
                localStorage.setItem(`${objeto.titulo}`, `descripcion: ${objeto.descripcion}, tipo: ${tipo.value}`);
                break;
            default:
                console.log("default");
        }
    }

    add.classList = ["add"]
    add.textContent = "Añadir"
    header.textContent = `Agregar`;
    titulo.removeAttribute("readOnly");

})