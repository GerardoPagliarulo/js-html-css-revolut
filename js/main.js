$(document).ready( function () {
    /**
     * DROPDOWN MENU
     */

    // References
    var dropDown = $('.menu-options .dropdown');
    var dropLink = dropDown.children('a');
    var dropDownMenu = dropDown.children('.dropdown-menu');
    var language = $('.language').children('a');

    dropLink.click( function () { 
        var dropMenu = $(this).next('.dropdown-menu');
        // $(this).next('.dropdown-menu').toggle();

        dropDownMenu.not(dropMenu).hide();

        dropMenu.toggle();
    });

    language.mouseenter(function () { 
        $('.arrow-down').removeClass('active').next().addClass('active');  
    }); 
    
    language.mouseleave(function () { 
        $('.arrow-up').removeClass('active').prev().addClass('active');  
    });    

}); // End ready