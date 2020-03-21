//let pron = new Audio("https://www.pronouncenames.com/mp3/3044_1242265006968.mp3"); 
$('.progress-bar').css('width', '0');
/* 
function playSound() {
    $(".something").click(function() {
        $("#sound1").play();
        return false;
    });
} */

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

//$(playSound);
$(showProgress);
