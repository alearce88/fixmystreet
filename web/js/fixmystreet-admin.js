$(function(){
    // available for admin pages

    // hide the open311_only section and reveal it only when send_method is relevant
    var $open311_only = $('.admin-open311-only');
 
    function hide_or_show_open311(hide_fast) {
        var send_method = $('#send_method').val();
        var show_open311 = false;
        if ($('#endpoint').val()) {
            show_open311 = true; // always show the form if there is an endpoint value
        } else if (send_method && send_method.toLowerCase() != 'email') {
            show_open311 = true;
        }
        if (show_open311) {
            $open311_only.slideDown();
        } else {
            if (hide_fast) {
                $open311_only.hide();
            } else {
                $open311_only.slideUp();
            }
        }
    }

    if ($open311_only) {
        $('#send_method').on('change', hide_or_show_open311);
        hide_or_show_open311(true);
    }

    // admin hints: maybe better implemented as tooltips?
    $(".admin-hint").on('click', function(){
        if ($(this).hasClass('admin-hint-show')) {
            $(this).removeClass('admin-hint-show');
        } else {
            $(this).addClass('admin-hint-show');
        }
    });

    // on a body's page, hide/show deleted contact categories
    var $table_with_deleted_contacts = $('table tr.is-deleted td.contact-category');
    if ($table_with_deleted_contacts.length == 1) {
        $table_with_deleted_contacts = $table_with_deleted_contacts.closest('table');
        var $toggle_deleted_btn = $("<input type='submit' class='btn' value='Hide deleted contacts' id='toggle-deleted-contacts-btn' style='margin:1em 0;'/>");
        $table_with_deleted_contacts.before($toggle_deleted_btn);
        $toggle_deleted_btn.on('click', function(e){
            e.preventDefault();
            var $cols = $table_with_deleted_contacts.find('tr.is-deleted');
            if ($cols.first().is(':visible')) {
                $cols.hide();
                $(this).prop("value", 'Show deleted contacts');
            } else {
                $cols.show();
                $(this).prop("value", 'Hide deleted contacts');
            }
        });
    }

});

