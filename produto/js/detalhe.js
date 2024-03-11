$(document).ready(function() {
    const url = new URLSearchParams(window.location.search);
    const id = url.get('id');

    console.log('Fazendo requisição AJAX para o produto com o ID:', id);

    $.ajax({
        url: "http://localhost:8080/produtos/" + id,
        type: 'GET',
        dataType: "json",
        success: function(produto) {
            console.log(produto);

            $('.produto-detalhe .titulo').text(produto.nome);
            $('.produto-detalhe .descricao').text(produto.descricao)
            $('.produto-detalhe .marca').text(produto.marca);
            $('.produto-detalhe .preco').text(produto.preco);

        },
        error: function(_status, _response, error) {
            console.error('Erro na requisição AJAX:', error);
        }
    });
});