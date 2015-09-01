var timeDifference = function () {
    var date = new Date(2015, 7, 19, 12, 0, 0, 0);
    var now = new Date();
    var diff = (date.getTime() / 1000) - (now.getTime() / 1000);

    return diff;
}

var clock = $('.countdown-clock').FlipClock(timeDifference(), {
    clockFace: 'DailyCounter',
    countdown: true
})