//Validando Nome Do usuario
var validar_nome = false;
function validarNome() {
  var nome = nome_input.value;
  /* Devolve a quantidade de nomes em numeros Ex: Sherlock Homes -> vai retornar 2 */
  const nomeCompleto = nome.split(" ");
  /* Verifica se a quantidade de nomes é menor que 1, pois ninguém tem um nome completo de um nome apenas */
  if (nomeCompleto.length <= 1) {
    nome_input.classList.add("red");
    nome_input.classList.remove("green");
  } else {
    nome_input.classList.remove("red");
    nome_input.classList.add("green");
    validar_nome = true;
  }
  /* Faz a substituição das primeiras letras dos nomes caso o usuário coloque a primeira leta do nome minuscula */
  for (let i = 0; i < nomeCompleto.length; i++) {
    nomeCompleto[i] =
      nomeCompleto[i][0].toUpperCase() + nomeCompleto[i].substr(1);
  }
  /* Junta os nomes novamente */
  nomeCompleto.join(" ");
}

//Validando Email do Usuario
var validar_email = false;
function validarEmail() {
  var email = email_input.value;
  var validacao = /\S+@\S+\.\S+/;

  /* Qualquer tipo de texto:
  - Seguida por um caractere @ (que é obrigatório em e-mails);
  - Seguido por algum outro texto, o domínio/provedor;
  - E então temos a presença de um ponto, que também é obrigatório;
  - E por fim mais um texto, validando tanto emails .com quanto .com.br, e outros que tenham terminologias diferentes */

  if (!validacao.test(email)) {
    email_input.classList.add("red");
    email_input.classList.remove("green");
  } else {
    email_input.classList.remove("red");
    email_input.classList.add("green");
    validar_email = true;
  }
}

//Validando Senha do Usuario
var validar_senha = false;
function validarSenha() {
  var senha = senha_input.value;
  var fortificador =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!$*&@#])([0-9a-zA-Z!$*&@#]){8,}$/;
  /*
    
  (?=.*\d)            // deve conter ao menos um dígito
  (?=.*[a-z])         // deve conter ao menos uma letra minúscula
  (?=.*[A-Z])         // deve conter ao menos uma letra maiúscula
  (?=.*[$*&@#!])      // deve conter ao menos um caractere especial
  ({8,})              // deve conter no minimo 8 caracteres
  ([0-9a-zA-Z$*&@#])  // é uma classe de caracteres contendo números, letras e 
                        os caracteres especiais que você está considerando. 
                        Eles estão dentro de parênteses para formar um grupo de captura
*/
  /* Verifica se a senha está com as requisições acima */
  if (fortificador.test(senha)) {
    senha_input.classList.remove("red");
    senha_input.classList.add("green");
    validar_senha = true;
  } else {
    senha_input.classList.add("red");
    senha_input.classList.remove("green");
  }
}

//Validando cpf da empresa com os 11 caracteres
var validar_cpf = false;
function validarCpf() {
  var cpf = cpf_input.value;
  /* Verifica se o usuario tem mais de 6 caractéres */
  if (cpf.length != 14) { // 14 por causa dos pontos e traços
    cpf_input.classList.add("red");
    cpf_input.classList.remove("green");
  } else {
    cpf_input.classList.remove("red");
    cpf_input.classList.add("green");
    validar_cpf = true;
  }
}

//Mascara CPF
function mascara(i, t) {

  var v = i.value;

  if (isNaN(v[v.length - 1])) {
    i.value = v.substring(0, v.length - 1);
    return;
  }

  if (t == "cpf") {
    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += "."; //verfica posição numero para adcionar o "."
    if (v.length == 11) i.value += "-";
  }
}


function validarCadastro() {
  if (validar_nome && validar_senha && validar_email && validar_cpf) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Cadastrado!",
      text: "Cadastrado com sucesso",
      showConfirmButton: false,
      timer: 1600,
    });

    return true;
  } else {
    Swal.fire({
      icon: "error",
      title: "Ops...",
      text: "Cadastro inválido!",
    });
    return false;
  }
}

// function outputForm() {
//   if (formAddServe.style.display == "none") {
//     formAddServe.style.display = "flex";
//     gridContainer.style.opacity = 0.8;
//     formAddServe.style.color = "flex";
//   } else {
//     formAddServe.style.display = "none";
//     gridContainer.style.opacity = 1;
//   }
// }



function validarLogin() {
  if (validar_email && validar_senha) {
    realizarLogin();
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Autenticação inválida!",
    });
  }

}

function validarMaquina(){
  if(
    validar_ip &&
    validar_bairro &&
    validar_complemento &&
    validar_cep  &&
    validar_estado &&
    validar_cidade &&
    validar_logradouro &&
    validar_numero
  ){
    return true;
  }
  return false;
}
var validar_ip = false;
function validarIp(){
  var ip = ip_input.value;
  if (ip.length > 16) {
    ip_input.classList.add("red");
    ip_input.classList.remove("green");
  } else {
    ip_input.classList.remove("red");
    ip_input.classList.add("green");
    validar_ip = true;
  }
}

//Mascara IP
function mascaraIP(i, t) {

  var v = i.value;

  if (t == "ip") {
    i.setAttribute("maxlength", "16");
    if (v.length == 4) i.value += ".";
    if (v.length == 8) i.value += ".";
    if (v.length == 11) i.value += ".";
  }
}

var validar_bairro = false;
function validarBairro() {
  var bairro = bairro_input.value;
  if (bairro.length <= 3) {
    bairro_input.classList.add("red");
    bairro_input.classList.remove("green");
  } else {
    bairro_input.classList.remove("red");
    bairro_input.classList.add("green");
    validar_bairro = true;
  }
}

var validar_complemento = false;
function validarComplemento() {
  var complemento = complemento_input.value;
  if (complemento.length <= 2) {
    complemento_input.classList.add("red");
    complemento_input.classList.remove("green");
  } else {
    complemento_input.classList.remove("red");
    complemento_input.classList.add("green");
    validar_complemento = true;
  }
}

var validar_cep = false;
function validarCep() {
  var cep = cep_input.value;
  if (cep.length == 9) {
    cep_input.classList.remove("red");
    cep_input.classList.add("green");
    validar_cep = true;
  } else {
    cep_input.classList.add("red");
    cep_input.classList.remove("green");
  }
}

//Mascara CEP
function mascaraCEP(i, t) {

  var v = i.value;

  if (isNaN(v[v.length - 1])) {
    i.value = v.substring(0, v.length - 1);
    return;
  }

  if (t == "cep") {
    i.setAttribute("maxlength", "9");
    if (v.length == 5) i.value += "-"; //verfica posição numero para adcionar o "-"
    
  }
}


var validar_estado = false;
function validarEstado() {
  var estado = estado_input.value;
  if (estado.length == 2) {
    estado_input.classList.add("red");
    estado_input.classList.remove("green");
  } else {
    estado_input.classList.remove("red");
    estado_input.classList.add("green");
    validar_estado = true;
  }
}

var validar_cidade = false;
function validarCidade() {
  var cidade = cidade_input.value;
  if (cidade.length <= 2) {
    cidade_input.classList.add("red");
    cidade_input.classList.remove("green");
  } else {
    cidade_input.classList.remove("red");
    cidade_input.classList.add("green");
    validar_cidade = true;
  }
}

var validar_logradouro = false;
function validarLogradouro() {
  var logradouro = logradouro_input.value;
  if (logradouro.length <= 3) {
    logradouro_input.classList.add("red");
    logradouro_input.classList.remove("green");
  } else {
    logradouro_input.classList.remove("red");
    logradouro_input.classList.add("green");
    validar_logradouro = true;
  }
}

var validar_numero = false;
function validarNumero() {
  var numero = numero_input.value;
  if (numero.length <= 0) {
    numero_input.classList.add("red");
    numero_input.classList.remove("green");
  } else {
    numero_input.classList.remove("red");
    numero_input.classList.add("green");
    validar_numero = true;
  }
}