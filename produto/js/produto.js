$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8080/produtos",
        type: 'get',
        dataType: "json",

        success: function(produtos) {
            produtos.forEach(function (elemento) {

                var preco= 'R$' + (elemento.preco).toFixed(2);

                $('#lista-produtos').append(
                    '<div class="produto">' +
                        '<a href="produto/detalhe.html?id=' + elemento.id + '">' +
                            '<img src="img/produtos/ipad-modelo-dois.jpg" alt="" data-id="' + elemento.id + '">' +
                            '<p>' + elemento.nome + '</p>' +
                            '<h5>' + preco + '</h5>' +
                        '</a>' +
                    '</div>'
                );
            });

        },
        error: function(_status, _response, error) {
            console.error(error);
        }
    });

});