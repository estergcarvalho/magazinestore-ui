$(document).ready(function () {
    $.ajax({
        url: "http://localhost:8080/produtos",
        type: 'get',
        dataType: "json",
        success: function (produtos) {
            produtos.forEach(function (elemento, index) {
                $('#lista-produto').append(
            `<div class="produto">
                 <a href="produto/detalhe.html">
                    <img src="img/produtos/ipad-modelo-dois.jpg" alt="">
                    <p>` + elemento.nome + `</p>
                    <h5>`+ elemento.preco + `</h5>
                </a>
             </div>`
                );
            });

        },
        error: function (_status, _response, error) {
            console.error(error);
        }
    });
});
