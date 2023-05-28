function mostrarPainelDeControle() {
    mainSuporte.style.display = "none";
    mainPerfil.style.display = "none";
    mainFormFunc.style.display = "none";
    mainFormMaq.style.display = "none";
    mainMaquinas.style.display = "flex";
    mainFunc.style.display = "none";
    mainRelatorios.style.display = "none";
}

function mostrarPerfil() {
    mainSuporte.style.display = "none";
    mainPerfil.style.display = "flex";
    mainFormFunc.style.display = "none";
    mainFormMaq.style.display = "none";
    mainMaquinas.style.display = "none";
    mainFunc.style.display = "none";
    mainRelatorios.style.display = "none";
}


function mostrarCadastroMaq() {
    mainSuporte.style.display = "none";
    mainPerfil.style.display = "none";
    mainFormFunc.style.display = "none";
    mainFormMaq.style.display = "none";
    mainMaquinas.style.display = "flex";
    mainFunc.style.display = "none";
    mainRelatorios.style.display = "none";
}

function mostrarCadastroFunc() {
    mainSuporte.style.display = "none";
    mainPerfil.style.display = "none";
    mainFormFunc.style.display = "none";
    mainFormMaq.style.display = "none";
    mainMaquinas.style.display = "none";
    mainFunc.style.display = "flex";
    mainRelatorios.style.display = "none";
}

function mostrarRelatorios() {
    mainSuporte.style.display = "none";
    mainPerfil.style.display = "none";
    mainFormFunc.style.display = "none";
    mainFormMaq.style.display = "none";
    mainMaquinas.style.display = "none";
    mainFunc.style.display = "none";
    mainRelatorios.style.display = "flex";
}


function mostrarSuporte() {
    mainSuporte.style.display = "flex";
    mainPerfil.style.display = "none";
    mainFormFunc.style.display = "none";
    mainFormMaq.style.display = "none";
    mainMaquinas.style.display = "none";
    mainFunc.style.display = "none";
    mainRelatorios.style.display = "none";
}

function adicionarMaquina() {
    mainSuporte.style.display = "none";
    mainPerfil.style.display = "none";
    mainFormFunc.style.display = "none";
    mainFormMaq.style.display = "flex";
    mainMaquinas.style.display = "none";
    mainFunc.style.display = "none";
    mainRelatorios.style.display = "none";
}

function adicionarFunc() {
    mainSuporte.style.display = "none";
    mainPerfil.style.display = "none";
    mainFormFunc.style.display = "flex";
    mainFormMaq.style.display = "none";
    mainMaquinas.style.display = "none";
    mainFunc.style.display = "none";
    mainRelatorios.style.display = "none";
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

