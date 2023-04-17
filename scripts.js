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
    var months = Math.floor(distance / (1000 * 60 * 60 * 24 * (365.25 / 12)));
    var days = Math.floor(distance / (1000 * 60 * 60 * 24) - 30 * months);
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //skloňování 
    if (months == 2 || months == 3 || months == 4) {
        mm = " Měsíce ";
    } else if (months == 1) { 
        mm = " Měsíc ";
    } else {
        mm = " Měsíců "
    }

    if (days == 2 || days == 3 || days == 4) {
        dd = " Dny ";
    } else if (days == 1) { 
        dd = " Den ";
    } else {
        dd = " Dní "
    }

    // vypsání výsledku do elementu na stránce
    if (days < 1) {
        document.getElementById("countdown").innerHTML = "✨ Výročí: " + months + mm + " ✨";
    } else {
        var mmonths = "♡ " + months + mm;
        var ddays = days + dd + "♡";
        document.getElementById("countdown").innerHTML = mmonths + "& " + ddays;
    }
    }, 1000);
