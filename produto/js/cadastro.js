$(document).ready(function() {
    $('#form-produto').submit(function(event) {
        event.preventDefault();
        var formData = new FormData(this);

        $.ajax({
            url: "http://localhost:8080/produtos",
            type: 'POST',
            enctype: 'multipart/form-data',
            contentType: false,
            processData: false,
            data: formData,
            success: function() {
                $('#form-produto')[0].reset();

                console.log('Produto cadastrado');

                alert('Produto cadastrado com sucesso');
            },
            error: function(_status, _response, error) {
                alert('Erro ao cadastrar o produto, tente novamente' + error);
            }
        })
    })
    
});