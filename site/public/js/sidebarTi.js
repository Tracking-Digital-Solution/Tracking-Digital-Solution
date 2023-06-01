function mostrarPainelDeControle() {
  mainMaquinas.style.display = "flex";
  mainDash.style.display = "none";
  mainConfig.style.display = "none";
  var canvas = document.getElementById("lineChart");
  var canvas1 = document.getElementById("lineChart2");
  var containerChart = document.getElementById("containerChart");
  canvas.remove();
  canvas1.remove();
  containerChart.innerHTML += `<canvas id="lineChart" style="box-shadow: 3px 3px 10px 2px #a9a1a1";></canvas>
  <canvas id="lineChart2" style="box-shadow: 3px 3px 10px 2px #a9a1a1";></canvas>`;
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

async function buscarDadosDinamicos(id) {
  const resposta = await fetch(`/maquina/buscarDadosDinamicos/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  }); if (resposta.ok) {
    return resultadoConvertido = await resposta.json();
  } else {
    throw ("Buscar dados dinamicos falhou");
  }
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

  // plotagem
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
      data: [],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 2
    }]
  };

  for (i = 0; i < listaDados.length; i++) {
    data.datasets[0].data.push(listaDados[i].usoCPU);
  }


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

  // const data2 = {
  //   labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
  //   datasets: [{
  //     label: 'Consumo atual de memória ram:',
  //     data: [usoRam, usoRam - 10, usoRam - 20, usoRam + 30, usoRam + 40, usoRam - 70],
  //     backgroundColor: 'rgba(54, 162, 235, 0.2)',
  //     borderColor: 'rgba(54, 162, 235, 1)',
  //     borderWidth: 2
  //   }]
  // };

  // Configuração do gráfico 2
  // const config2 = {
  //   type: 'line',
  //   data: data2,
  //   options: {
  //     responsive: true,
  //     scales: {
  //       y: {
  //         min: 0,
  //         max: 100,
  //         beginAtZero: true
  //       }
  //     }
  //   }
  // };

  if (mainDash.style.display == "none") {
    mainDash.style.display = "flex";
    mainMaquinas.style.display = "none";
    mainConfig.style.display = "none";
  } else {
    mainMaquinas.style.display = "flex";
    mainDash.style.display = "none";
    mainConfig.style.display = "none";
  }

  // $('#lineChart').appned(');

  const ctx = document.getElementById('lineChart').getContext('2d');
  const grafico01 = new Chart(ctx, config);
  // const ctx2 = document.getElementById('lineChart2').getContext('2d');
  // new Chart(ctx2, config2);

  const dadosDoGrafico = data.datasets[0].data;

  setTimeout(() => atualizarGrafico(id, dadosDoGrafico, grafico01), 5000);
}

async function atualizarGrafico(id, dadosDoGrafico, grafico) {
  console.log("Caiu na atualizar gráficos");
  console.log("ID da máquina: " + id);
  console.log("Dados da máquina: " + dadosDoGrafico);
  console.log("Grafico da máquina: " + grafico);

  const respostaNovo = await buscarDadosDinamicos(id);
  dadosDoGrafico.shift();
  dadosDoGrafico.push(respostaNovo[5].usoCPU);
  grafico.update();
  proximaAtualizacao = setTimeout(() => atualizarGrafico(id, dadosDoGrafico, grafico), 2000);
};

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



