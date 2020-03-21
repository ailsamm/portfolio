//let pron = new Audio("https://www.pronouncenames.com/mp3/3044_1242265006968.mp3"); 
$('.progress-bar').css('width', '0');

/* function playSound() {
    $(".myButton").click(function() {
        pron.play();
    )}; */

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
