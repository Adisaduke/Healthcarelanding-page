$(document).ready(function () {
    $(".healthcare2_right-side").slideRight(1000);
});

$.fn.extend({
    slideRight: function (speed) {
        return this.animate({
            right: '0px'
        }, speed);
    }
});
