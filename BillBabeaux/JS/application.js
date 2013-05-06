$(document).ready(function(){        
    $('#speaker-container a.expand-brian').click(function(){
        event.preventDefault();
        $(this).closest('.speaker-bio').find('#extra-brian').toggle();
    });

    $('#speaker-container a.expand-alex').click(function(){
        event.preventDefault();
        $(this).closest('.speaker-bio').find('#extra-alex').toggle();
    });
    
    $('#speaker-container a.expand-brian-ceo').click(function(){
        event.preventDefault();
        $(this).closest('.speaker-bio').find('#extra-brian-ceo').toggle();
    });
    });