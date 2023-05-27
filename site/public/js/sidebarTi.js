function mostrarPainelDeControle() {
  btnVoltar.style.display = "flex";
  identificacaoMaquina.style.display = "none";
  alertas.style.display = "flex";
  containerRelatorios.style.display = "none";
  containerMaquinas.style.display = "flex";
  containerConfig.style.display = "none";
  containerDashboard.style.display = "none";
  containerSuporte.style.display = "none";
}

function mostrarRelatorios() {
  btnVoltar.style.display = "none";
  identificacaoMaquina.style.display = "none";
  alertas.style.display = "none";
  containerRelatorios.style.display = "flex";
  containerMaquinas.style.display = "none";
  containerConfig.style.display = "none";
  containerDashboard.style.display = "none";
  containerSuporte.style.display = "none";
}

function mostrarConfig() {
  btnVoltar.style.display = "none";
  identificacaoMaquina.style.display = "none";
  alertas.style.display = "none";
  containerRelatorios.style.display = "none";
  containerMaquinas.style.display = "none";
  containerConfig.style.display = "flex";
  containerDashboard.style.display = "none";
  containerSuporte.style.display = "none";
}

function mostrarSuporte() {
  btnVoltar.style.display = "none";
  identificacaoMaquina.style.display = "none";
  alertas.style.display = "none";
  containerSuporte.style.display = "flex";
  containerRelatorios.style.display = "none";
  containerMaquinas.style.display = "none";
  containerConfig.style.display = "none";
  containerDashboard.style.display = "none";
}

function mostrarDashboard(id) {
  if (containerDashboard.style.display == "none") {
    btnVoltar.style.display = "flex";
    identificacaoMaquina.style.display = "flex";
    containerDashboard.style.display = "flex";
    alertas.style.display = "none"; 
    containerMaquinas.style.display = "none";
    containerRelatorios.style.display = "none";
    containerConfig.style.display = "none";
    containerSuporte.style.display = "none";
  } else {
    btnVoltar.style.display = "flex";
    identificacaoMaquina.style.display = "none";
    containerDashboard.style.display = "none";
    alertas.style.display = "none"; 
    containerMaquinas.style.display = "flex";
    containerRelatorios.style.display = "none";
    containerConfig.style.display = "none";
    containerSuporte.style.display = "none";
  }
  return buscarDadosDinamicos(id);
}

function logout() {
  Swal.fire({
    title: "Você tem certeza?",
    text: "Deseja sair do perfil?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sim, sair!'
  }).then((result) => {
    if (result.isConfirmed) {
      sessionStorage.clear()
      window.location = "index.html"
    }
  })
}



