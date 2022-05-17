// Função "Máquina de Escrever"
function typeWriter(text) {
    // Guardar o elemento de texto em Array
    const textArray = text.innerHTML.split("");
    
    // Limpar o texto que já estava na tela
    text.innerHTML = "";

    // Laço para acrescentar as letras ao elemento vazio
    textArray.forEach(function(letra, i) {
        setTimeout(() => text.innerHTML += letra, 75 * i);
    });
};

const title = document.querySelector("#title");
typeWriter(title);