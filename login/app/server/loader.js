$(function(){

    $.getJSON('../../../img/food.json',function(data){
        $('#container').append('div class row');
        $.each(data,function(i,value){
            $('#container').append('p Hi')});
    });
});