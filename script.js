document.addEventListener("DOMContentLoaded", () => {

    let game = document.getElementById("game");
    let score = 0;
    let temps = 10;
    let IntervalJeu;
    let IntervalTemps;

    function CommencementJeu(){
        score = 0;
        temps = 10;
        document.getElementById("score").textContent = score;
        document.getElementById("temps").textContent = temps;

        clearInterval(IntervalJeu);
        clearInterval(IntervalTemps);

        IntervalJeu = setInterval(NbAleat, 1000);
        IntervalTemps = setInterval(() => {
            temps--;
            document.getElementById("temps").textContent = temps;
            if(temps <= 0){
                clearInterval(IntervalJeu);
                clearInterval(IntervalTemps);
                document.getElementById("scoreFinal").textContent = score;
                document.getElementById("overlay").style.display = "flex";
            }
        }, 1000);
    }

    function NbAleat(){
        let nombre = Math.floor(Math.random() * 21) - 10;
        let div = document.createElement("div");
       div.className = "nb " + (nombre >= 0 ? "positif" : "negatif");
        div.textContent = nombre;
        div.style.left = Math.random() * 90 + "%";

        div.addEventListener('click', function() {
            score += nombre;
            document.getElementById("score").textContent = score;
            div.remove();
        });

        game.appendChild(div);
        setTimeout(() => div.remove(), 6000);
    }

    document.getElementById("button").addEventListener('click', () =>
         CommencementJeu());
    document.getElementById("restart").addEventListener('click', () => {
        document.getElementById("overlay").style.display = "none";
        CommencementJeu();
    });

});

