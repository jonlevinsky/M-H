// aktualizace časovače každou sekundu
var x = setInterval(function() {
   
    //počítání
    let startDate = new Date("28 January 2023");
    let today = new Date();
    let months = (today.getFullYear() - startDate.getFullYear()) * 12 + (today.getMonth() - startDate.getMonth());
    if (today.getDate() < startDate.getDate()) {
        months--;
    }
    let days = today.getDate() - startDate.getDate();
    if (days < 0) {
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    //skloňování
        
        //měsíce
        if (months == 2 || months == 3 || months == 4) {
            mm = " Měsíce ";
        } else if (months == 1) { 
            mm = " Měsíc ";
        } else {
            mm = " Měsíců "
        }

        //dny
        if (days == 2 || days == 3 || days == 4) {
            dd = " Dny ";
        } else if (days == 1) { 
            dd = " Den ";
        } else {
            dd = " Dní "
        }
    
    //zápis
    if (days == 0) {
        document.getElementById("countdown").innerHTML = "✨ Výročí: " + months + mm + " ✨";
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
        }, animationDuration * 1000);}
        
    } else {
        var mmonths = "♡ " + months + mm;
        var ddays = days + dd + "♡";
        document.getElementById("countdown").innerHTML = mmonths + "& " + ddays;
    }

    }, 1000);