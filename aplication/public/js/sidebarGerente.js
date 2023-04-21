function mostrarPainelDeControle() {
    containerRelatorios.style.display = "none";
    containerMaquinas.style.display = "flex";
    containerCadastroFunc.style.display = "none";
    mostrarFormMaq.style.display = "none";
    mostrarFormFunc.style.display = "none";
    botaoMaquina.style.display = "flex";
}

function mostrarCadastroMaq() {
    containerRelatorios.style.display = "none";
    containerMaquinas.style.display = "flex";
    containerCadastroFunc.style.display = "none";
    mostrarFormMaq.style.display = "none";
    mostrarFormFunc.style.display = "none";
    botaoMaquina.style.display = "flex";
}

function mostrarCadastroFunc() {
    containerRelatorios.style.display = "none";
    containerMaquinas.style.display = "none";
    containerCadastroFunc.style.display = "block";
    mostrarFormMaq.style.display = "none";
    mostrarFormFunc.style.display = "none";
    botaoMaquina.style.display = "none";
}

function mostrarRelatorios() {
    containerRelatorios.style.display = "flex";
    containerMaquinas.style.display = "none";
    containerCadastroFunc.style.display = "none";
    mostrarFormMaq.style.display = "none";
    mostrarFormFunc.style.display = "none";
    botaoMaquina.style.display = "none";
}

function mostrarConfig() {
    containerRelatorios.style.display = "none";
    containerMaquinas.style.display = "none";
    containerCadastroFunc.style.display = "none";
    mostrarFormMaq.style.display = "none";
    mostrarFormFunc.style.display = "none";
    botaoMaquina.style.display = "none";
}

function mostrarSuporte() {
    containerRelatorios.style.display = "none";
    containerMaquinas.style.display = "none";
    containerCadastroFunc.style.display = "none";
    mostrarFormMaq.style.display = "none";
    mostrarFormFunc.style.display = "none";
    botaoMaquina.style.display = "none";
}

function adicionarMaquina() {
    mostrarFormMaq.style.display = "flex";
    containerRelatorios.style.display = "none";
    containerMaquinas.style.display = "none";
    containerCadastroFunc.style.display = "none";
    mostrarFormFunc.style.display = "none";
    botaoMaquina.style.display = "none";
}

function adicionarFunc() {
    mostrarFormFunc.style.display = "flex";
    containerCadastroFunc.style.display = "none";
    containerRelatorios.style.display = "none";
    containerMaquinas.style.display = "none";
    botaoMaquina.style.display = "none";
}
