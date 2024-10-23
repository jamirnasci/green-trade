$('#login_btn').on('click', ()=>{
    $.ajax({
        url:'/login',
        method:'post',
        data:{
            email:$('#email').val(),
            senha:$('#senha').val()
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