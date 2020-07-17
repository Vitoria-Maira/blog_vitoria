$(document).ready(function(){

    $('#loader').modal('show')

    $('.jumbotron').hide()
    $('.container').hide()
    $('.navbar').hide()
    $('.titulo').hide()
    $('.mari').hide()
  

    setTimeout(function(){
        $('#loader').modal('hide')
        $('.jumbotron').fadeToggle('4000')
        $('.container').fadeToggle('4000')
        $('.navbar').fadeToggle('4000')
        $('.titulo').fadeToggle('4000')
        $('.mari').fadeToggle('4000')
    },4000)

})