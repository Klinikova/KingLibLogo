'use strict';

$(document).ready(function () {
    $(document).on('click', ".j-btn", function () {
        var form = $(this).parents('form');
        var btn = $(this);
        var isValid = checkRequired(form);
        var donate = $('.input-donate');
        if (isValid === true) {
            form.submit();
            return true;
        }
        return false;
    });

    function checkRequired(form) {
        var isValid = true;
        $(".input", $(form)).each(function () {
            if ($(this).val() == '') {
                isValid = false;
                $(this).siblings('span').addClass('errormsg');
            } else {
                $(this).siblings('span').removeClass('errormsg')
            }
        });
        $(".input-donate", $(form)).each(function () {
            if ($(this).val() == '') {
                isValid = false;
                $(this).siblings('span').text('Enter Donation Amount').addClass('errormsg');
            } else {
                $(this).siblings('span').removeClass('errormsg')
            }
            if(isNaN($(this).val())) {
                $(this).siblings('span').text('Amount must be numeric').addClass('errormsg');
            }
        });
        $(".input-donate", $(form)).on('blur', function () {
            if ($(this).val() == '') {
                isValid = false;
                $(this).siblings('span').text('Enter Donation Amount').addClass('errormsg');
            } else {
                $(this).siblings('span').removeClass('errormsg')
            }
            if(isNaN($(this).val())) {
                $(this).siblings('span').text('Amount must be numeric').addClass('errormsg');
            }
        });

        $(".input", $(form)).on('blur', function () {
            if ($(this).val() === '') {
                isValid = false;
                $(this).siblings('span').addClass('errormsg');
            } else $(this).siblings('span').removeClass('errormsg')
        });

        return isValid;
    }

    $(document).on('click', '#clearfields', function () {
        $('#myform')[0].reset();
    });
});


