function mostrarPainelDeControle() {
  mainMaquinas.style.display = "flex";
  mainDash.style.display = "none";
  mainConfig.style.display = "none";
  pararAtualizacao();
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

  const data2 = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [{
      label: 'Consumo atual de memória ram:',
      data: [],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 2
    }]
  };

  for (i = 0; i < listaDados.length; i++) {
    data2.datasets[0].data.push(parseInt(listaDados[0].usoRAM.substring(0, 2)));
  }

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
  const ctx2 = document.getElementById('lineChart2').getContext('2d');
  const grafico02 = new Chart(ctx2, config2);

  const dadosDoGrafico01 = data.datasets[0].data;
  const dadosDoGrafico02 = data2.datasets[0].data;

  setTimeout(() => atualizarGrafico(id, dadosDoGrafico01, dadosDoGrafico02,
    grafico01, grafico02), 5000);
}

let proximaAtualizacao;
async function atualizarGrafico(id, dadosDoGrafico01, dadosDoGrafico02, grafico01, grafico02) {
  
  const listaNovosDados = await buscarDadosDinamicos(id);
  var usoCpu = listaNovosDados[5].usoCPU;
  var usoHd = listaNovosDados[5].disponivelHD.substring(0, 2);
  var usoRam = parseInt(listaNovosDados[5].usoRAM.substring(0, 2));

  // plotagem
  spanCpu.innerHTML = usoCpu;
  spanRam.innerHTML = usoRam;
  spanHd.innerHTML = usoHd;

  dadosDoGrafico01.shift();
  dadosDoGrafico01.push(usoCpu);
  grafico01.update();
  dadosDoGrafico02.shift();
  dadosDoGrafico02.push(usoRam);
  grafico02.update();
  proximaAtualizacao = setTimeout(() => atualizarGrafico(id, dadosDoGrafico01, dadosDoGrafico02,
    grafico01, grafico02), 5000);
};

function pararAtualizacao() {
  clearTimeout(proximaAtualizacao);
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



