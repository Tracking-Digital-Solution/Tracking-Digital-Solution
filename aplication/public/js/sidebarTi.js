function mostrarPainelDeControle() {
  containerRelatorios.style.display = "none";
  containerMaquinas.style.display = "flex";
  containerConfig.style.display = "none";
  containerDashboard.style.display = "none";
}

function mostrarRelatorios() {
  containerRelatorios.style.display = "flex";
  containerMaquinas.style.display = "none";
  containerConfig.style.display = "none";
  containerDashboard.style.display = "none";
}

function mostrarConfig() {
  containerRelatorios.style.display = "none";
  containerMaquinas.style.display = "none";
  containerConfig.style.display = "flex";
  containerDashboard.style.display = "none";
}

function mostrarSuporte() {
  containerRelatorios.style.display = "none";
  containerMaquinas.style.display = "none";
  containerConfig.style.display = "none";
  containerDashboard.style.display = "none";
}

function mostrarDashboard() {
  if (containerDashboard.style.display == "none") {
    containerDashboard.style.display = "flex"
    containerMaquinas.style.display = "none";
    containerRelatorios.style.display = "none";
    containerConfig.style.display = "none";
  } else {
    containerDashboard.style.display = "none";
    containerMaquinas.style.display = "flex";
    containerRelatorios.style.display = "none";
    containerConfig.style.display = "none";
  }
}