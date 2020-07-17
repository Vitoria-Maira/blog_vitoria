$(document).ready(function(){

    $('.nome').hide()
    $('.endereço').hide()
   


   
    $('#nome').focusin(function(){
        $('.nome').show('slow')
    })
    
    $('#endereço').focusin(function(){
        $('.endereço').show('slow')
    })

    $('#nome').focusout(function(){
        if ($('#nome').val() == ""){
            $('.nome').empty()
            $('.nome').removeClass('text-info').addClass('text-danger')
            $('.nome').append('Preencha este campo!')
            $('#nome').focus()
        } else{
            $('.nome').hide('slow')
        }
    })

  
    $('#endereço').focusout(function(){
        if ($('#endereço').val()=""){
            $('.endereço').empty()
            $('.endereço').removeClass('text-info').addClass('text-danger')
            $('.endereço').append('Preencha este campo!')
            $('#endereço').focus()
        }else{
            $('.endereço').hide('slow')
        }
        
    })

   



    $("#telefone").mask ('(99) 9999-9999')
    $("#celular").mask ('(99) 99999-9999')
    $("#nascimento").mask ('99/99/9999')
    $("#cpf").mask ('999.999.999-99')


    $('.btn-depende').click(function(e){
        e.preventDefault()

        let qtde = $('#qtde').val()

        for (var i=0; i<qtde; i++){
            $('#gera-dependente').after(
                ` <div class="form-group">
                <label>Nome do dependente</label>
                <input type="text" name="" id="" class="form-control" >
                
            </div>`
            )
        }
        $('#gera-dependente').hide('slow')
    })

    





























})