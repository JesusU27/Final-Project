
//Evento al cambio de calificacion
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("rating-form");
    const widget = document.querySelector(".star-widget");
    const container = document.querySelector(".container");
    const header = form.querySelector("header");
    const stars = document.querySelectorAll('.stars input');
    const input_comment = document.getElementById('input-comment');
    input_comment.value = '';


    stars.forEach(star => {
        star.addEventListener('change', function () {
            let ratingText = '';

            switch (this.id) {
                case 'rate-5':
                    ratingText = 'Excelente curso';
                    break;
                case 'rate-4':
                    ratingText = 'Muy buen curso';
                    break;
                case 'rate-3':
                    ratingText = 'Buen curso';
                    break;
                case 'rate-2':
                    ratingText = 'Mal curso';
                    break;
                case 'rate-1':
                    ratingText = 'Pésimo curso';
                    break;
            }


            header.textContent = ratingText;
        });
    });


    //Evento al enviar el comentario
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        container.style.display = "none";
        widget.style.display = "none";
        input_comment.value = '';

        // Reiniciar la selección de estrellas
        stars.forEach(star => {
            star.checked = false;
        });

        header.textContent = "";

    });
});




//creacion de un div y poner texto "ez"
/*
const tag_comment = document.createElement('div');
const text_comment = document.createTextNode('ez');
tag_comment.appendChild(text_comment);

const TextBox = document.getElementById('box-comments');
TextBox.appendChild(tag_comment);
*/


//abrir caja de comentarios con un boton
const btn_publicar = document.getElementById('btn-publicar');
const container = document.querySelector('.container');
const widget = document.querySelector(".star-widget");
btn_publicar.addEventListener('click', function (event) {
    console.log(1);
    container.style.display = 'block';
    widget.style.display = 'block';



});