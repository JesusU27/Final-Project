//SIGN UP---------------------------------------------------------
function limitInputLength(input, max) {
    if (input.value.length > max) {
        input.value = input.value.slice(0, max);
    }
}

function showPersonalInformation() {
    document.getElementById('option-user-container').style.display = 'none';
    document.getElementById('personal-information-container').style.display = 'block';
}

function showFormCodigoVerificacion() {
    document.getElementById('personal-information-container').style.display = 'none';
    document.getElementById('form-codigo-verificacion-container').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', (event) => {
    const estudianteContainer = document.getElementById('button-estudiante-container');
    const profesorContainer = document.getElementById('button-profesor-container');

    estudianteContainer.addEventListener('click', () => {
        estudianteContainer.classList.add('clicked');
        profesorContainer.classList.remove('clicked');
    });

    profesorContainer.addEventListener('click', () => {
        profesorContainer.classList.add('clicked');
        estudianteContainer.classList.remove('clicked');
    });
});

//TOUR VIRTUAL TEMA----------------------------------------------
function showManualContent() {
    document.getElementById('virtual-tour-presentation-container').style.display = 'none';
    document.getElementById('manual-container').style.display = 'block';
}

function showEmpezarContent() {
    document.getElementById('virtual-tour-presentation-container').style.display = 'none';
    document.getElementById('empezar-content-container').style.display = 'block';
}

function showTourVirtualTema(idPage) {
    document.getElementById(idPage).style.display = 'none';
    document.getElementById('virtual-tour-presentation-container').style.display = 'block';
}