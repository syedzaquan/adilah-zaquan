var countDownDate = new Date("August 9, 2024 00:00:00").getTime();

var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);

// Popup
document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll('.nav-item a');
    const overlay = document.getElementById('overlay');

    navItems.forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            const target = this.getAttribute('data-target');
            const popup = document.getElementById(target);
            if (popup) {
                if (popup.classList.contains('show')) {
                    popup.classList.remove('show');
                    overlay.classList.remove('show');
                } else {
                    closeAllPopups();
                    popup.classList.add('show');
                    overlay.classList.add('show');
                }
            }
        });
    });

    function closeAllPopups() {
        document.querySelectorAll('.popup').forEach(popup => {
            popup.classList.remove('show');
        });
        overlay.classList.remove('show');
    }
});