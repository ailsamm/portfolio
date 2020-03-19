$('.progress-bar').css('width', '0');
function showProgress() {
    $(window).on('load', function() {
        $('.progress-bar').each(function() {
            var itemWidth = $(this).data('progress') + "%";
            $(this).animate({
                width: itemWidth
            }, 800);
        });

    });
}


$(showProgress);
