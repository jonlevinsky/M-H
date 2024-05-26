// aktualizace časovače každou sekundu
var x = setInterval(function() {

    //počítání
    let startDate = new Date("28 January 2023");
    let today = new Date();
    let years = today.getFullYear() - startDate.getFullYear();
    let months = (today.getFullYear() - startDate.getFullYear()) * 12 + (today.getMonth() - startDate.getMonth());
    if (today.getDate() < startDate.getDate()) {
        months--;
    }
    if (today.getMonth() < startDate.getMonth() || (today.getMonth() === startDate.getMonth() && today.getDate() < startDate.getDate())) {
        years--;
    }
    months -= years * 12;

    let days = today.getDate() - startDate.getDate();
    if (days < 0) {
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    // skloňování

    // roky
    let yy;
    if (years == 1) {
        yy = " Rok ";
    } else if (years >= 2 && years <= 4) {
        yy = " ROKY ";
    } else {
        yy = " Let ";
    }

    // měsíce
    let mm;
    if (months == 1) {
        mm = " Měsíc ";
    } else if (months >= 2 && months <= 4) {
        mm = " Měsíce ";
    } else {
        mm = " Měsíců ";
    }

    // dny
    let dd;
    if (days == 1) {
        dd = " Den ";
    } else if (days >= 2 && days <= 4) {
        dd = " Dny ";
    } else {
        dd = " Dní ";
    }

    // zápis
    let output = "";

    if (years > 0) {
        output += years + yy;
    }

    if (months > 0) {
        if (years > 0 && days > 0) {
            output += ", ";
        } else if (years > 0) {
            output += " & ";
        }
        output += months + mm;
    }

    if (days > 0) {
        if (years > 0 || months > 0) {
            output += " & ";
        }
        output += days + dd;
    }

    if (days == 0) {
        let anniversaryOutput = "";
        if (years > 0) {
            anniversaryOutput += years + yy;
        }
        if (months > 0) {
            if (years > 0) {
                anniversaryOutput += " & ";
            }
            anniversaryOutput += months + mm;
        }
        document.getElementById("countdown").innerHTML = "✨ Výročí: " + anniversaryOutput.trim() + " ✨";
        const colors = ['#460C68', '#7F167F', '#CB1C8D', '#F56EB3'];
        const numberOfPieces = 100;

        for (let i = 0; i < numberOfPieces; i++) {
            createConfettiPiece();
        }

        function createConfettiPiece() {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti-piece');
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';
            document.querySelector('.confetti').appendChild(confetti);

            const animationDuration = Math.random() * 3 + 2;

            confetti.style.animation = `confetti ${animationDuration}s ease-in-out forwards`;

            setTimeout(() => {
                confetti.remove();
                createConfettiPiece();
            }, animationDuration * 1000);
        }
    } else {
        document.getElementById("countdown").innerHTML = "♡ " + output.trim() + " ♡";
    }

}, 1000);
