function mostrarPainelDeControle() {
  mainMaquinas.style.display = "flex";
  mainDash.style.display = "none";
  mainConfig.style.display = "none";
}

function mostrarRelatorios() {
  mainMaquinas.style.display = "none";
  mainDash.style.display = "none";
  mainConfig.style.display = "none";
}

function mostrarConfig() {
  mainMaquinas.style.display = "none";
  mainDash.style.display = "none";
  mainConfig.style.display = "flex";
}

function mostrarSuporte() {
  mainMaquinas.style.display = "none";
  mainDash.style.display = "none";
  mainConfig.style.display = "none";
}

async function mostrarDashboard(id) {
  var listaDados = await buscarDadosDinamicos(id);
  console.log("Aquiii: ", listaDados)
  var nomeMaq = listaDados[0].nomeMaquina;
  var sistemaOperacional = listaDados[0].sistemaOperacional;
  var idMaquina = listaDados[0].idMaquinaCorporativa;
  var usoCpu = listaDados[0].usoCPU;
  var usoHd = listaDados[0].disponivelHD.substring(0, 2);
  var usoRam = parseInt(listaDados[0].usoRAM.substring(0, 2));

  spanNomeMaquina.innerHTML = "Nome da máquina: " + nomeMaq;
  spanSistema.innerHTML = "Sistema operacional " + sistemaOperacional;
  spanId.innerHTML = "ID da máquina: " + idMaquina;
  spanCpu.innerHTML = usoCpu;
  spanRam.innerHTML = usoRam;
  spanHd.innerHTML = usoHd;

  const data = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [{
      label: 'Consumo atual de cpu:',
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
  }

  const data2 = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [{
      label: 'Consumo atual de memória ram:',
      data: [usoRam, usoRam - 10, usoRam - 20, usoRam + 30, usoRam + 40, usoRam - 70],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 2
    }]
  };

  // Configuração do gráfico 2
  const config2 = {
    type: 'line',
    data: data2,
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

  if (mainDash.style.display == "none") {
    mainDash.style.display = "flex";
    mainMaquinas.style.display = "none";
    mainConfig.style.display = "none";
  } else {
    mainMaquinas.style.display = "flex";
    mainDash.style.display = "none";
    mainConfig.style.display = "none";
  }

  const ctx = document.getElementById('lineChart').getContext('2d');
  new Chart(ctx, config);
  const ctx2 = document.getElementById('lineChart2').getContext('2d');
  new Chart(ctx2, config2);


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



