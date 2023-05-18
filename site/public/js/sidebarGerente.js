function mostrarPainelDeControle() {
    btnExcluirMaquina.style.display = "flex"
    containerSuporte.style.display = "none";
    containerRelatorios.style.display = "none";
    containerMaquinas.style.display = "flex";
    containerCadastroFunc.style.display = "none";
    mostrarFormMaq.style.display = "none";
    mostrarFormFunc.style.display = "none";
    botaoMaquina.style.display = "flex";
    containerPerfil.style.display = "none";
}

function mostrarPerfil() {
    formExcluirMaquina.style.display = "none"
    btnExcluirMaquina.style.display = "none"
    containerPerfil.style.display = "flex";
    containerSuporte.style.display = "none";
    containerRelatorios.style.display = "none";
    containerMaquinas.style.display = "none";
    containerCadastroFunc.style.display = "none";
    mostrarFormMaq.style.display = "none";
    mostrarFormFunc.style.display = "none";
    botaoMaquina.style.display = "none";
}


function mostrarCadastroMaq() {
    formExcluirMaquina.style.display = "none"
    btnExcluirMaquina.style.display = "none"
    containerSuporte.style.display = "none";
    containerRelatorios.style.display = "none";
    containerMaquinas.style.display = "flex";
    containerCadastroFunc.style.display = "none";
    mostrarFormMaq.style.display = "none";
    mostrarFormFunc.style.display = "none";
    botaoMaquina.style.display = "flex";
    containerPerfil.style.display = "none";
}

function mostrarCadastroFunc() {
    formExcluirMaquina.style.display = "flex"
    btnExcluirMaquina.style.display = "flex"
    containerSuporte.style.display = "none";
    containerRelatorios.style.display = "none";
    containerMaquinas.style.display = "none";
    containerCadastroFunc.style.display = "block";
    mostrarFormMaq.style.display = "none";
    mostrarFormFunc.style.display = "none";
    botaoMaquina.style.display = "none";
    containerPerfil.style.display = "none";
}

function mostrarRelatorios() {
    formExcluirMaquina.style.display = "none"
    btnExcluirMaquina.style.display = "none"
    containerSuporte.style.display = "none";
    containerRelatorios.style.display = "flex";
    containerMaquinas.style.display = "none";
    containerCadastroFunc.style.display = "none";
    mostrarFormMaq.style.display = "none";
    mostrarFormFunc.style.display = "none";
    botaoMaquina.style.display = "none";
    containerPerfil.style.display = "none";
}

function mostrarConfig() {
    formExcluirMaquina.style.display = "none"
    btnExcluirMaquina.style.display = "none"
    containerSuporte.style.display = "none";
    containerRelatorios.style.display = "none";
    containerMaquinas.style.display = "none";
    containerCadastroFunc.style.display = "none";
    mostrarFormMaq.style.display = "none";
    mostrarFormFunc.style.display = "none";
    botaoMaquina.style.display = "none";
    containerPerfil.style.display = "none";
}

function mostrarSuporte() {
    formExcluirMaquina.style.display = "none"
    btnExcluirMaquina.style.display = "none"
    containerSuporte.style.display = "flex";
    containerRelatorios.style.display = "none";
    containerMaquinas.style.display = "none";
    containerCadastroFunc.style.display = "none";
    mostrarFormMaq.style.display = "none";
    mostrarFormFunc.style.display = "none";
    botaoMaquina.style.display = "none";
    containerPerfil.style.display = "none";
}

function adicionarMaquina() {
    formExcluirMaquina.style.display = "none"
    btnExcluirMaquina.style.display = "none"
    containerSuporte.style.display = "none";
    mostrarFormMaq.style.display = "flex";
    containerRelatorios.style.display = "none";
    containerMaquinas.style.display = "none";
    containerCadastroFunc.style.display = "none";
    mostrarFormFunc.style.display = "none";
    botaoMaquina.style.display = "none";
    containerPerfil.style.display = "none";
}

function adicionarFunc() {
    formExcluirMaquina.style.display = "none"
    btnExcluirMaquina.style.display = "none"
    containerSuporte.style.display = "none";
    mostrarFormFunc.style.display = "flex";
    containerCadastroFunc.style.display = "none";
    containerRelatorios.style.display = "none";
    containerMaquinas.style.display = "none";
    botaoMaquina.style.display = "none";
    containerPerfil.style.display = "none";
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

