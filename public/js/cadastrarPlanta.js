$(document).ready(function() {
    $('#cadastrarPlanta').on('submit', function(event) {
        event.preventDefault();

        var formData = new FormData(this); 

        $.ajax({
            url: $(this).attr('action'), 
            type: 'POST',
            data: formData,
            contentType: false,
            processData: false,
            success: function(data) {
                alert(data.message)
                window.location.href = '/catalogo'
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert(jqXHR.responseJSON.message)
            }
        });
    });
});
