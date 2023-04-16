function mostrarPainelDeControle() {
    containerRelatorios.style.display = "none";
    containerMaquinas.style.display = "flex";
    containerConfig.style.display = "none";
    btnConfig.style.display = "none";
    containerDashboard.style.display = "none";
}

function mostrarCadastroMaq() {
    containerRelatorios.style.display = "none";
    containerMaquinas.style.display = "none";
    containerConfig.style.display = "none";
    btnConfig.style.display = "none";
    containerDashboard.style.display = "none";
}

function mostrarCadastroFunc() {
    containerRelatorios.style.display = "none";
    containerMaquinas.style.display = "none";
    containerConfig.style.display = "none";
    btnConfig.style.display = "none";
    containerDashboard.style.display = "none";
}

function mostrarRelatorios() {
    containerRelatorios.style.display = "flex";
    containerMaquinas.style.display = "none";
    containerConfig.style.display = "none"
    btnConfig.style.display = "none";
    containerDashboard.style.display = "none";
}

function mostrarConfig() {
    containerConfig.style.display = "flex"
    btnConfig.style.display = "flex";
    containerRelatorios.style.display = "none";
    containerMaquinas.style.display = "none";
    containerDashboard.style.display = "none";
}

function mostrarSuporte() {

}

function mostrarDashboard() {
  if (containerMaquinas.style.display == "flex") {
    containerMaquinas.style.display = "none";
    containerDashboard.style.display = "flex";
  } else {
    containerMaquinas.style.display = "flex";
    containerDashboard.style.display = "none";
  }
}