function mostrarPainelDeControle() {
  containerRelatorios.style.display = "none";
  containerMaquinas.style.display = "flex";
  containerConfig.style.display = "none";
  containerDashboard.style.display = "none";
  containerSuporte.style.display = "none";
}

function mostrarRelatorios() {
  containerRelatorios.style.display = "flex";
  containerMaquinas.style.display = "none";
  containerConfig.style.display = "none";
  containerDashboard.style.display = "none";
  containerSuporte.style.display = "none";
}

function mostrarConfig() {
  containerRelatorios.style.display = "none";
  containerMaquinas.style.display = "none";
  containerConfig.style.display = "flex";
  containerDashboard.style.display = "none";
  containerSuporte.style.display = "none";
}

function mostrarSuporte() {
  containerSuporte.style.display = "flex";
  containerRelatorios.style.display = "none";
  containerMaquinas.style.display = "none";
  containerConfig.style.display = "none";
  containerDashboard.style.display = "none";
}

function mostrarDashboard() {
  if (containerDashboard.style.display == "none") {
    containerDashboard.style.display = "flex";
    containerMaquinas.style.display = "none";
    containerRelatorios.style.display = "none";
    containerConfig.style.display = "none";
    containerSuporte.style.display = "none";
  } else {
    containerDashboard.style.display = "none";
    containerMaquinas.style.display = "flex";
    containerRelatorios.style.display = "none";
    containerConfig.style.display = "none";
    containerSuporte.style.display = "none";
  }
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




