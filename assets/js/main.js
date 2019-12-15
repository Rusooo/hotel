$(document).ready(function () {
    $(".datepicker").datepicker({
        'format': 'dd-mm-yyyy',
        'autoclose': true
    });

    $(".menu ul li a").hover(function () {


        var str = $(this).find("li").index();

        $(this).eq(str).css("color", "#c8c8c8");


    }).mouseleave(function () {
        this.css("color", "#fff");
    });
});