$('form .value-form').keyup(function () {
    var name = $('#Name').val();
    var email = $('#Email').val();
    var phone = $('#Phone').val();
    var message = $('#Message').val();
    if (name != "" && email != "" && phone != "" && message != "" && $('.field-validation-error').length === 0) {
        $('button[type="submit"]').attr("disabled", false);
    } else $('button[type="submit"]').attr("disabled", true);
})

$('button[type="submit"]').on('submit', function (e) {
    e.preventDefault()
})

$('button[type="submit"]').on('click', function (e) {
    //preventDefault không load lại trang , ở lại trang này
    e.preventDefault()
    var url = $('form').attr('action');

    $('.cssload-container').fadeIn();
    $.ajax({
        url: url,
        type: 'post',
        dataType: 'jsonp',
        data: $('form').serialize(),
        complete: function (data) {
            $('.cssload-container').fadeOut();
            $('form .value-form').val('');
            $('button[type="submit"]').attr("disabled", true);
            $('.send-message-success').show();
            setTimeout(function () {
                $('.send-message-success').fadeOut();
            }, 5000)
        },
        error: function (err) {
            $('button[type="submit"]').attr("disabled", false);
        }
    })
})