function mostrarPainelDeControle() {
    containerRelatorios.style.display = "none";
    containerMaquinas.style.display = "flex";
    containerCadastrarMaq.style.display = "none";
    btnMaqAdd.style.display = "none";
    containerConfig.style.display = "none";
    btnConfig.style.display = "none";
}

function mostrarCadastroMaq() {
    containerRelatorios.style.display = "none";
    containerMaquinas.style.display = "none";
    containerCadastrarMaq.style.display = "flex";
    btnMaqAdd.style.display = "flex";
    containerConfig.style.display = "none";
    btnConfig.style.display = "none";
}

function mostrarCadastroFunc() {
    containerRelatorios.style.display = "none";
    containerMaquinas.style.display = "none";
    containerCadastrarMaq.style.display = "none";
    btnMaqAdd.style.display = "none";
    containerConfig.style.display = "none";
    btnConfig.style.display = "none";

}

function mostrarRelatorios() {
    containerRelatorios.style.display = "flex";
    containerMaquinas.style.display = "none";
    containerCadastrarMaq.style.display = "none";
    btnMaqAdd.style.display = "none";
    containerConfig.style.display = "none"
    btnConfig.style.display = "none";
}

function mostrarConfig() {
    containerConfig.style.display = "flex"
    btnConfig.style.display = "flex";
    containerRelatorios.style.display = "none";
    containerMaquinas.style.display = "none";
    containerCadastrarMaq.style.display = "none";
    btnMaqAdd.style.display = "none";
}

function mostrarSuporte() {

}