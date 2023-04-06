$("#add-item-btn").click(function(){
    const div = document.createElement('div');
    $('#container').append(div);
    $(div).append('If you click on the "Close" button, I will disappear');
    
    div.className = 'class'
    const input = document.createElement('input');
    $('#container').append(input);
    input.id = 'delete';
    input.type = 'button';
    input.value = 'Закрыть';
    $(div).hide(5000);
    
    $("#delete").click(function(){
    $('.class').remove();
    $("#delete").remove();
    });
});

