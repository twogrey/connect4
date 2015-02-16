$(document).ready(function() {

    var nbSlotChecked = 0;

    $('input[type=radio]').change(function() { // When a slot is checked
        nbSlotChecked = $('input[type=radio]:checked').length; // let's recalculte the number of slots checked...
        if(nbSlotChecked%2 === 0) { // ... to define the current turn
            $(this).addClass('player-1');
        } else {
            $(this).addClass('player-2');
        }
    }); 

});
