$(function () {
        $(".popup").hide();
        $(".icon").click(function () {
            $(".popup").fadeIn();
        });
        $(".close-btn").click(function () {
            $(".popup").fadeOut();
        });
    })
