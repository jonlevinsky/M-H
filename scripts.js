// Counter
    // zadání data
    var countDownDate = new Date("January 28, 2023 00:00:00").getTime();
        
    // aktualizace časovače každou sekundu
    var x = setInterval(function() {

    // získání aktuálního času
    var now = new Date().getTime();

    // výpočet zbývajícího času
    var distance = now - countDownDate;

    // výpočet dnů, hodin, minut a sekund
    var months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
    var days = Math.floor(distance / (1000 * 60 * 60 * 24) - 30 * months);
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //skloňování
    if (months > 1) {
        mm = " Měsíců ";
    } else {
        mm = " Měsíc ";
    }
    if (days > 1) {
        dd = " Dní ";
    } else {
        dd = " Den ";
    }
    if (hours > 1) {
        hh = " Hodin ";
    } else {
        hh = " Hodinu ";
    }
    if (minutes > 1) {
        mmm = " Minut ";
    } else {
        mmm = " Minutu ";
    }

    // vypsání výsledku do elementu na stránce
    if (days < 1) {
        document.getElementById("countdown").innerHTML = "✨ Výročí " + months + mm + " ✨";
    } else {
        var mmonths = "♡ " + months + mm;
        var ddays = days + dd + "♡";
        document.getElementById("countdown").innerHTML = mmonths + "& " + ddays;
    }

    // pokud se dosáhne konce, vypsání textu na stránce
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Už spolu jsme!";
    }
    }, 1000);