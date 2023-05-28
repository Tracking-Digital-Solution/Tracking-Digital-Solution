function mostrarPainelDeControle() {
    mainPerfil.style.display = "none";
    mainFormFunc.style.display = "none";
    mainFormMaq.style.display = "none";
    mainMaquinas.style.display = "flex";
    mainFunc.style.display = "none";
}

function mostrarPerfil() {
    mainPerfil.style.display = "flex";
    mainFormFunc.style.display = "none";
    mainFormMaq.style.display = "none";
    mainMaquinas.style.display = "none";
    mainFunc.style.display = "none";
}


function mostrarCadastroMaq() {
    mainPerfil.style.display = "none";
    mainFormFunc.style.display = "none";
    mainFormMaq.style.display = "none";
    mainMaquinas.style.display = "flex";
    mainFunc.style.display = "none";
}

function mostrarCadastroFunc() {
    mainPerfil.style.display = "none";
    mainFormFunc.style.display = "none";
    mainFormMaq.style.display = "none";
    mainMaquinas.style.display = "none";
    mainFunc.style.display = "flex";
}

function mostrarRelatorios() {
    mainPerfil.style.display = "none";
    mainFormFunc.style.display = "none";
    mainFormMaq.style.display = "none";
    mainMaquinas.style.display = "none";
    mainFunc.style.display = "none";
}


function mostrarSuporte() {
    mainPerfil.style.display = "none";
    mainFormFunc.style.display = "none";
    mainFormMaq.style.display = "none";
    mainMaquinas.style.display = "none";
    mainFunc.style.display = "none";
}

function adicionarMaquina() {
    mainPerfil.style.display = "none";
    mainFormFunc.style.display = "none";
    mainFormMaq.style.display = "flex";
    mainMaquinas.style.display = "none";
    mainFunc.style.display = "none";
}

function adicionarFunc() {
    mainPerfil.style.display = "none";
    mainFormFunc.style.display = "flex";
    mainFormMaq.style.display = "none";
    mainMaquinas.style.display = "none";
    mainFunc.style.display = "none";
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

