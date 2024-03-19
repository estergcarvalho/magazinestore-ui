$(document).ready(function() {
    $('#form-produto').submit(function(event) {
        event.preventDefault();

        var produto = {
            nome: $('#nome').val(),
            descricao: $('#descricao').val(),
            marca: $('#marca').val(),
            preco: $('#preco').val()
        };

        $.ajax({
            url: "http://localhost:8080/produtos",
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(produto),
            success: function() {
                $('#form-produto')[0].reset();

                console.log('Produto cadastrado');

                alert('Produto cadastrado com sucesso');
            },
            error: function() {
                alert('Erro ao cadastrar o produto, tente novamente');
            }
        })
    })
    
});