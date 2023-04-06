$(document).ready(function(){
    $("#add-item-btn").click(function(){
        const input = document.createElement('input');
        $('#container').append(input);
        input.id = 'delete';
        input.type = 'button';
        input.value = 'Закрыть';
        
        const div = document.createElement('div');
        $('#container').append(div);
        div.className = 'class'
        $(div).append('If you click on the "Close" button, I will disappear').slideDown("slow").slideUp(5000);
        
        $("#delete").fadeOut(5000).click(function(){
        $('.class').remove();
        $("#delete").remove();
        });
    });
});

