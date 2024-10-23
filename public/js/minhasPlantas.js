function removerPlanta(id) {
    let result = confirm("Deseja realmente remover essa planta ?")
    if (result) {
        $.ajax({
            url: '/removerPlanta',
            method: 'post',
            data: {
                id: id
            },
            success: function (data) {
                alert(data.message)
                window.location.reload()
            },
            error: function (xhr) {
                alert(xht.responseJSON.message)
            }
        })
    } else {

    }
}