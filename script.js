let presentes = [];

const form = document.getElementById("formCadastro");
const listaPresentes = document.getElementById("listaPresentes");
const resultadoRoleta = document.getElementById("resultadoRoleta");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const sexo = document.getElementById("sexo").value;

    // Cria o objeto presente
    const presente = {
        nome,
        idade,
        sexo
    };

    presentes.push(presente);

    atualizarLista();

    form.reset();
});

// Atualiza a lista de presentes
function atualizarLista() {
    listaPresentes.innerHTML = "";

    presentes.forEach((presente, index) => {
        const li = document.createElement("li");
        li.textContent = `${presente.nome} - ${presente.idade} anos (${presente.sexo})`;
        listaPresentes.appendChild(li);
    });
}

// Função para girar a roleta
function girarRoleta() {
    if (presentes.length === 0) {
        resultadoRoleta.textContent = "🎁 Cadastre pelo menos um presente!";
        return;
    }

    resultadoRoleta.textContent = "🎡 Girando...";
    
    setTimeout(() => {
        const indiceSorteado = Math.floor(Math.random() * presentes.length);
        const presenteSorteado = presentes[indiceSorteado];

        resultadoRoleta.textContent = `🎉 Presente sorteado: ${presenteSorteado.nome} - ${presenteSorteado.idade} anos (${presenteSorteado.sexo})`;
        }, 1500);
}
