function mostrarPainelDeControle() {
    containerRelatorios.style.display = "none";
    containerMaquinas.style.display = "flex";
    containerConfig.style.display = "none";
    btnConfig.style.display = "none";
    containerCadastroMaq.style.display = "none";
    containerCadastroFunc.style.display = "none";
    mostrarFormMaq.style.display = "none";
    mostrarFormFunc.style.display = "none";
}

function mostrarCadastroMaq() {
    containerCadastroMaq.style.display = "block";
    containerConfig.style.display = "none"
    btnConfig.style.display = "none";
    containerRelatorios.style.display = "none";
    containerMaquinas.style.display = "none";
    containerCadastroFunc.style.display = "none";
    mostrarFormMaq.style.display = "none";
    mostrarFormFunc.style.display = "none";
}

function mostrarCadastroFunc() {
    containerRelatorios.style.display = "none";
    containerMaquinas.style.display = "none";
    containerConfig.style.display = "none";
    btnConfig.style.display = "none";
    containerCadastroMaq.style.display = "none";
    containerCadastroFunc.style.display = "block";
    mostrarFormMaq.style.display = "none";
    mostrarFormFunc.style.display = "none";
}

function mostrarRelatorios() {
    containerRelatorios.style.display = "flex";
    containerMaquinas.style.display = "none";
    containerConfig.style.display = "none"
    btnConfig.style.display = "none";
    containerCadastroMaq.style.display = "none";
    containerCadastroFunc.style.display = "none";
    mostrarFormMaq.style.display = "none";
    mostrarFormFunc.style.display = "none";
}

function mostrarConfig() {
    containerConfig.style.display = "flex"
    btnConfig.style.display = "flex";
    containerRelatorios.style.display = "none";
    containerMaquinas.style.display = "none";
    containerCadastroMaq.style.display = "none";
    containerCadastroFunc.style.display = "none";
    mostrarFormMaq.style.display = "none";
    mostrarFormFunc.style.display = "none";
}

function mostrarSuporte() {
    containerCadastroMaq.style.display = "none";
    containerConfig.style.display = "none"
    btnConfig.style.display = "none";
    containerRelatorios.style.display = "none";
    containerMaquinas.style.display = "none";
    containerCadastroMaq.style.display = "none";
    containerCadastroFunc.style.display = "none";
    mostrarFormMaq.style.display = "none";
    mostrarFormFunc.style.display = "none";
}

function adicionarMaquina(){
    mostrarFormMaq.style.display = "flex";
    containerCadastroMaq.style.display = "none";
    containerConfig.style.display = "none"
    btnConfig.style.display = "none";
    containerRelatorios.style.display = "none";
    containerMaquinas.style.display = "none";
    containerCadastroMaq.style.display = "none";
    containerCadastroFunc.style.display = "none";
    mostrarFormFunc.style.display = "none";
}

function adicionarFunc(){
    mostrarFormFunc.style.display = "flex";
    containerCadastroFunc.style.display = "none";
    containerCadastroMaq.style.display = "none";
    containerConfig.style.display = "none"
    btnConfig.style.display = "none";
    containerRelatorios.style.display = "none";
    containerMaquinas.style.display = "none";
    containerCadastroMaq.style.display = "none";
}

// function fecharForm(){
//     mostrarFormMaq.style.display = "none";
//     containerCadastroMaq.style.display = "block";
//     containerConfig.style.display = "none"
//     btnConfig.style.display = "none";
//     containerRelatorios.style.display = "none";
//     containerMaquinas.style.display = "none";
//     containerCadastroFunc.style.display = "none";
// }

function outputInfo() {
    if( mostrarDadosMaq.style.display == "none"){
        mostrarDadosMaq.style.display = "flex"
        containerConfig.style.display = "none"
        btnConfig.style.display = "none";
        containerRelatorios.style.display = "none";
        containerMaquinas.style.display = "none";
        mostrarFormMaq.style.display = "none";
    }else{
        mostrarDadosMaq.style.display = "none";
        mostrarDadosMaq.style.display = "flex"
        containerConfig.style.display = "none"
        btnConfig.style.display = "none";
        containerRelatorios.style.display = "none";
        containerMaquinas.style.display = "none";
        mostrarFormMaq.style.display = "none";
    }
   
}