const STORAGE_KEY = "usuariosODS8";

function carregarUsuarios() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function salvarUsuarios(lista) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lista));
}

function atualizarLista(filtro = "") {
    const listaEl = document.getElementById("lista-usuarios");
    listaEl.innerHTML = "";

    const usuarios = carregarUsuarios();

    usuarios
        .filter(u =>
            u.nome.toLowerCase().includes(filtro.toLowerCase()) ||
            u.email.toLowerCase().includes(filtro.toLowerCase())
        )
        .forEach((usuario, index) => {
            const li = document.createElement("li");
            li.innerHTML =
                `<strong>${usuario.nome}</strong> — ${usuario.email} <br>
                 <small>Enviado em: ${usuario.data}</small>
                 <button class="btn-excluir" data-index="${index}">Excluir</button>`;
            listaEl.appendChild(li);
        });

    document.querySelectorAll(".btn-excluir").forEach(btn => {
        btn.addEventListener("click", excluirItem);
    });
}


function cadastrar() {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!nome || !email) {
        alert("Preencha todos os campos!");
        return;
    }

    const usuarios = carregarUsuarios();

    const novo = {
        nome,
        email,
        data: new Date().toLocaleString("pt-BR")
    };

    usuarios.push(novo);
    salvarUsuarios(usuarios);

    atualizarLista();
    limparCampos();
}

function limparCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
}

function excluirItem(event) {
    const index = event.target.getAttribute("data-index");
    const usuarios = carregarUsuarios();
    usuarios.splice(index, 1);
    salvarUsuarios(usuarios);

    atualizarLista();
}

function excluirTodos() {
    if (!confirm("Tem certeza que deseja excluir todos os usuários?")) return;
    localStorage.removeItem(STORAGE_KEY);
    atualizarLista();
}

function pesquisar() {
    const texto = document.getElementById("pesquisa").textContent || document.getElementById("pesquisa").value;
    atualizarLista(texto);
}


document.getElementById("btn-cadastrar").addEventListener("click", cadastrar);
document.getElementById("btn-limpar").addEventListener("click", limparCampos);
document.getElementById("btn-excluir-todos").addEventListener("click", excluirTodos);
document.getElementById("btn-pesquisar").addEventListener("click", pesquisar);

atualizarLista();
