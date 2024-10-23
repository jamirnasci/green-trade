$('#cadastrarBtn').on('click', ()=>{
    $.ajax({
        url:'/cadastrarUsuario',
        method:'post',
        data:{
            nome: $('#nome').val(), 
            idade: $('#idade').val(), 
            cpf: $('#cpf').val(), 
            cep: $('#cep').val(), 
            email: $('#email').val(), 
            senha: $('#senha').val()
        },
        success: function(data){
            alert(data.message)
            window.location.href = '/home'
        },
        error: function(xhr){
            alert(xhr.responseJSON.message)
        }
    })
})