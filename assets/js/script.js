$(document).ready(main);

var contador = 1;

function main() {
    $('nav').click(function () {


        if (contador == 1) {
            $('section').animate({
                left: '0'
            });
            contador = 0;
        } else {
            contador = 1;
            $('section').animate({
                left: '-100%'
            });
        }

    });






};



$(document).ready(function () {

    $('.boton__agregar')

        .on(
            'click',

            function () {

                var lementoAPagar = `
                <li class="card__item">

                <div class="d-flex align-items-center">
                    <input type="checkbox" name="" id="" class="d-none">
                    <div class="icono__servicio">
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46">
                            <g id="Avatar" fill="none" stroke="#2196f3" stroke-width="1">
                                <circle cx="23" cy="23" r="23" stroke="none" />
                                <circle cx="23" cy="23" r="22.5" fill="none" />
                            </g>
                            <g id="drive_eta-24px" transform="translate(10.754 12)">
                                <path id="Trazado_2025" data-name="Trazado 2025"
                                    d="M18.92,5.01A1.494,1.494,0,0,0,17.5,4H6.5A1.5,1.5,0,0,0,5.08,5.01L3,11v8a1,1,0,0,0,1,1H5a1,1,0,0,0,1-1V18H18v1a1,1,0,0,0,1,1h1a1,1,0,0,0,1-1V11ZM6.5,15A1.5,1.5,0,1,1,8,13.5,1.5,1.5,0,0,1,6.5,15Zm11,0A1.5,1.5,0,1,1,19,13.5,1.5,1.5,0,0,1,17.5,15ZM5,10,6.5,5.5h11L19,10Z"
                                    fill="#fff" />
                                <path id="Trazado_2026" data-name="Trazado 2026" d="M0,0H24V24H0Z"
                                    fill="none" />
                            </g>
                        </svg>




                    </div>
                    <div class="card__item-servicio">
                        <h6>Epec SA</h6>
                    </div>
                </div>

                <div class="card__item-precio">
                    <h6>$400</h6>
                    <P>voto 20/20</P>
                </div>
            </li>
          `;
                $('.card__content ul').append(lementoAPagar);
            },
        );

});

