

let contador = 0;

function Adicionar_Tarefa(){
    let inputElement = document.getElementById("input_tarefa");
    let valor =  inputElement.value.trim().toLowerCase();
    let main = document.getElementById("area_lista");

    // Se não for vazio, nem nulo, nem indefinido
    if(valor !== ""){
        contador++;
        let novo_item = `
        <div id="${contador}" class="item">
            <div onclick="marcar_tarefa(${contador})" class="item_icone">
                <i id="icone_${contador}" class="bi bi-circle"></i>
            </div>
            <div onclick="marcar_tarefa(${contador})" class="item_nome">
                ${valor}
            </div>
            <div class="item_botao" style="display: flex;">
                <button onclick="eliminar(${contador})" class="delete">
                    Eliminar<i class="bi bi-file-x"></i>
                </button>
            </div>
        </div>`;
        // Adicionar novo item no main
        main.innerHTML += novo_item;

        // Zerar o campo do input
        inputElement.value = "";
        inputElement.focus();
    }
}
        // Para prestar a atenção quando o evento acontecer
        input_tarefa.addEventListener("keyup", function(event) { 
            // Se digitou a tecla 13 que é o enter
            if(event.keyCode === 13){
            // Impedir com que o enter faça qualquer coisa maliciosa
                event.preventDefault();
            // Usado para clicar no enter
                btn_add.click();
            }
        });
        
        function marcar_tarefa(id){
            let item = document.getElementById(id);
            let icone = document.getElementById('icone_' + id);

            if(item.classList.contains('clicado')){
                item.classList.remove('clicado');
                icone.classList.remove('bi-check-circle');
                icone.classList.add('bi-circle');
            } else {
                item.classList.add('clicado');
                icone.classList.remove('bi-circle');
                icone.classList.add('bi-check-circle');
                item.parentNode.appendChild(item);
            }
        }

        function eliminar(id){
            let tarefa = document.getElementById(id);
            tarefa.remove();
        }
