  // fucao plotar grafico (veiculo)
  function plotarGraficoveiculo(resposta, idSensorveiculo) {
    console.log('iniciando plotagem do gráfico...');

    // Criando estrutura para plotar gráfico - labels
    let labels = [];

    // Criando estrutura para plotar gráfico - dados
    let dados = {
      labels: labels,
      datasets: [{
        label: 'Temperatura',
        backgroundColor: 'rgb(100, 15, 230)',
        borderColor: 'rgb(100, 15, 230)',
        data: [],
      }]
    };

    console.log('----------------------------------------------')
    console.log('Estes dados foram recebidos pela funcao "obterDadosGrafico" e passados para "plotarGrafico":')
    console.log(resposta)

    // Inserindo valores recebidos em estrutura para plotar o gráfico
    for (i = 0; i < resposta.length; i++) {
      var registro = resposta[i];
      labels.push(registro.momento_grafico);
      dados.datasets[0].data.push(registro.temperatura);
    }



    var temperatura_atual_freezer = registro.temperatura
    span_graus_atual_freezer1.innerHTML = `${temperatura_atual_freezer}°`
    if (temperatura_atual_freezer < -13.5 && temperatura_atual_freezer > -16.5) {
      alerta_freezer1.style.backgroundColor = `#85c5ff`
    } else if (temperatura_atual_freezer <= -16.5 && temperatura_atual_freezer >= -18) {
      alerta_freezer1.style.backgroundColor = `blue`
    } else if (temperatura_atual_freezer < -18) {
      alerta_freezer1.style.backgroundColor = `purple`
    } else if (temperatura_atual_freezer >= -13.5 && temperatura_atual_freezer <= -12) {
      alerta_freezer1.style.backgroundColor = `orange`
    } else if (temperatura_atual_freezer > -12) {
      alerta_freezer1.style.backgroundColor = `red`
    }


    console.log('----------------------------------------------')
    console.log('O gráfico será plotado com os respectivos valores:')
    console.log('Labels:')
    console.log(labels)
    console.log('Dados:')
    console.log(dados.datasets)
    console.log('----------------------------------------------')

    // Criando estrutura para plotar gráfico - config
    const config = {
      type: 'line',
      data: dados,
    };

    // Adicionando gráfico criado em div na tela
    let myChartveiculo = new Chart(
      document.getElementById('horas_dias_veiculo'),
      config
    );

    setTimeout(() => atualizarGraficoveiculo(idSensorveiculo, dados, myChartveiculo), 2000);
  }
  