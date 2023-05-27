function mostrarPainelDeControle() {
  mainMaquinas.style.display = "flex";
  mainDash.style.display = "none";
  mainConfig.style.display = "none";
  mainRelatorios.style.display = "none";
  mainSuporte.style.display = "none";
}

function mostrarRelatorios() {
  mainMaquinas.style.display = "none";
  mainDash.style.display = "none";
  mainConfig.style.display = "none";
  mainRelatorios.style.display = "flex";
  mainSuporte.style.display = "none";
}

function mostrarConfig() {
  mainMaquinas.style.display = "none";
  mainDash.style.display = "none";
  mainConfig.style.display = "flex";
  mainRelatorios.style.display = "none";
  mainSuporte.style.display = "none";
}

function mostrarSuporte() {
  mainMaquinas.style.display = "none";
  mainDash.style.display = "none";
  mainConfig.style.display = "none";
  mainRelatorios.style.display = "none";
  mainSuporte.style.display = "flex";
}

async function mostrarDashboard(id) {
  if (mainDash.style.display == "none") {
    mainDash.style.display = "flex";
    mainMaquinas.style.display = "none";
    mainConfig.style.display = "none";
    mainRelatorios.style.display = "none";
    mainSuporte.style.display = "none";
  } else {
    mainMaquinas.style.display = "flex";
    mainDash.style.display = "none";
    mainConfig.style.display = "none";
    mainRelatorios.style.display = "none";
    mainSuporte.style.display = "none";
  }
  var listaDados = await buscarDadosDinamicos(id);
  var nomeMaquina = listaDados[0].nomeMaquina;
  var sistemaOperacional = listaDados[0].sistemaOperacional;
  var idMaquina = listaDados[0].idMaquinaCorporativa;
  var usoCpu = listaDados[0].usoCPU;
  var usoHd = listaDados[0].disponivelHD;
  var usoRam = listaDados[0].usoRAM;

  spanNomeMaquina.innerHTML = nomeMaquina;
  spanSistema.innerHTML = sistemaOperacional;
  spanId.innerHTML = idMaquina;
  spanCpu.innerHTML = usoCpu;
  spanRam.innerHTML = usoRam;
  spanHd.innerHTML = usoHd;

  const data = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [{
      label: 'CPU',
      data: [usoCpu, usoCpu + 10, usoCpu + 20, usoCpu + 30, usoCpu + 40, usoCpu + 70],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 2
    }]
  };

  // Configuração do gráfico
  const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      scales: {
        y: {
          min: 0,
          max: 100,
          beginAtZero: true
        }
      }
    }
  };

  // Renderizar o gráfico
  const ctx = document.getElementById('lineChart').getContext('2d');
  new Chart(ctx, config);
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



