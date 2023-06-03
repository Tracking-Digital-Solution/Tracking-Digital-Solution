function mostrarPainelDeControle() {
  mainMaquinas.style.display = "flex";
  mainDash.style.display = "none";
  mainConfig.style.display = "none";
  pararAtualizacao();
  spanCpu.innerHTML = "";
  spanRam.innerHTML = ""
  spanHd.innerHTML = "";
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

function formatarStringDataHora(dataHoraString) {
  let dataHora = new Date(dataHoraString);
  const opcoesFormato = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'UTC'
  };
  return dataHora.toLocaleString('pt-br', opcoesFormato);
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

async function mostrarDashboard(idMaquina, nomeMaquina, sistemaOperacional) {
  var listaDados = await buscarDadosDinamicos(idMaquina);
  console.log("Os dados estão aqui :" + listaDados);

  let label = [];
  const data = {
    labels: label,
    datasets: [{
      label: 'Consumo atual de cpu:',
      data: [],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 2
    }]
  };

  for (i = 0; i < listaDados.length; i++) {
    label.push(
      formatarStringDataHora(listaDados[i].dtCPU)
    );
    data.datasets[0].data.push(listaDados[i].usoAtual[0]);
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

  let label2 = [];
  const data2 = {
    labels: label2,
    datasets: [{
      label: 'Consumo atual de memória ram:',
      data: [],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 2
    }]
  };

  for (i = 0; i < listaDados.length; i++) {
    label2.push(
      formatarStringDataHora(listaDados[i].dtRAM)
    )
    data2.datasets[0].data.push(parseInt(listaDados[0].usoAtual[1].substring(0, 2)));
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

  // var usoCpu = listaDados[0].usoAtual[0];
  // var usoHd = listaDados[0].disponivelHD.substring(0, 2);
  // var usoRam = parseInt(listaDados[0].usoRAM.substring(0, 2));

  spanNomeMaquina.innerHTML = "Nome da máquina: " + nomeMaquina;
  spanSistema.innerHTML = "Sistema operacional: " + sistemaOperacional;
  spanId.innerHTML = "ID da máquina: " + idMaquina;
  // spanCpu.innerHTML = usoCpu;
  // spanRam.innerHTML = usoRam;
  // spanHd.innerHTML = usoHd;


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

  const labelGrafico01 = label;
  const labelGrafico02 = label2;
  const dadosDoGrafico01 = data.datasets[0].data;
  const dadosDoGrafico02 = data2.datasets[0].data;

  setTimeout(() => atualizarGrafico(idMaquina, dadosDoGrafico01, dadosDoGrafico02,
    labelGrafico01, labelGrafico02, grafico01, grafico02), 4000);
}

let proximaAtualizacao;
async function atualizarGrafico(id, dadosDoGrafico01, dadosDoGrafico02, labelGrafico01, labelGrafico02, grafico01, grafico02) {

  const listaNovosDados = await buscarDadosDinamicos(id);
  const ultimoObjetoDaLista = listaNovosDados[listaNovosDados.length - 1];
  var usoCpu = ultimoObjetoDaLista.usoAtual[0];
  var usoRam = parseInt(ultimoObjetoDaLista.usoAtual[1].substring(0, 2));

  // plotagem
  spanCpu.innerHTML = usoCpu + "%";
  spanRam.innerHTML = usoRam + "%";
  spanHd.innerHTML = 0 + "%";

  labelGrafico01.shift();
  labelGrafico02.shift();
  dadosDoGrafico01.shift();
  dadosDoGrafico02.shift();
  labelGrafico01.push(
    formatarStringDataHora(ultimoObjetoDaLista.dtCPU)
  );
  labelGrafico02.push(
    formatarStringDataHora(ultimoObjetoDaLista.dtRAM)
  );
  dadosDoGrafico01.push(usoCpu);
  dadosDoGrafico02.push(usoRam);
  grafico01.update();
  grafico02.update();
  proximaAtualizacao = setTimeout(() => atualizarGrafico(id, dadosDoGrafico01, dadosDoGrafico02, labelGrafico01, labelGrafico02, grafico01, grafico02), 3500);
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



