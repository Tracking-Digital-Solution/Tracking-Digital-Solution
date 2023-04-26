function mostrarPainelDeControle() {
    containerSuporte.style.display = "none";
    containerRelatorios.style.display = "none";
    containerMaquinas.style.display = "flex";
    containerCadastroFunc.style.display = "none";
    mostrarFormMaq.style.display = "none";
    mostrarFormFunc.style.display = "none";
    botaoMaquina.style.display = "flex";
    containerPerfil.style.display = "none";
}

function mostrarPerfil(){
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