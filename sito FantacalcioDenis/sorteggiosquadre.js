let fascia1_allenatori = ["Lorenzo Moro", "Federico Burello", "Mattia Beltrame", "Alex Beltrame"];
let fascia2_allenatori = ["Kevin Di Bernardo", "Cristian Tartaro"];
let fascia3_allenatori = ["Denis Mascherin", "Nicola Marano"];

let fascia1_squadre = ["Milan", "Inter", "Napoli", "Roma"];
let fascia2_squadre = ["Atalanta", "Lazio"];
let fascia3_squadre = ["Juventus", "Bologna"];

let risultati = [];
let risultatiMostrati = 0;

let audio = null;

// 🎧 Musica suspense
function playSuspense() {
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
    audio = new Audio('countdown-suspense.mp3');
    audio.loop = true;
    audio.volume = 0.5;
    audio.play();
}

// 🛑 Stop musica
function stopSuspense() {
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
}

// 🔀 Mischia array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Inizializza sorteggio completo
function inizializzaSorteggio() {
    risultati = [];
    risultatiMostrati = 0;

    // 1️⃣ Fascia 2
    let squadreDisponibiliF2 = [...fascia2_squadre];
    shuffleArray(squadreDisponibiliF2);

    let squadreAssegnateF2 = [];
    for (let i = 0; i < fascia2_allenatori.length; i++) {
        let allenatore = fascia2_allenatori[i];
        let squadra = squadreDisponibiliF2[i];
        risultati.push(`Fascia 2: ${allenatore} -> ${squadra}`);
        squadreAssegnateF2.push(squadra);
    }

    let ripescataF2 = squadreDisponibiliF2[fascia2_allenatori.length]; // 1 squadra rimasta

    // 2️⃣ Fascia 3
    let squadraPenalizzata = "Fiorentina";
    let squadraFavorita = "Milan";

    let squadreF3Pool = [...fascia3_squadre];
    if (ripescataF2) {
        squadreF3Pool.push(ripescataF2);
    }

    let weightedPool = [];
    squadreF3Pool.forEach(squadra => {
        if (squadra === squadraFavorita) {
            weightedPool.push(squadra, squadra, squadra);
        } else if (squadra === squadraPenalizzata) {
            weightedPool.push(squadra);
        } else {
            weightedPool.push(squadra, squadra);
        }
    });

    shuffleArray(weightedPool);

    let squadreAssegnateF3 = [];

    fascia3_allenatori.forEach(allenatore => {
        let squadra;
        do {
            squadra = weightedPool[Math.floor(Math.random() * weightedPool.length)];
        } while (squadreAssegnateF3.includes(squadra));

        squadreAssegnateF3.push(squadra);
        risultati.push(`Fascia 3: ${allenatore} -> ${squadra}`);
    });

    if (ripescataF2 && !squadreAssegnateF3.includes(ripescataF2)) {
        risultati.push(`Fascia 3: Nessun allenatore per ${ripescataF2}`);
    }

    // 3️⃣ Fascia 1
    assegnaSquadre(fascia1_allenatori, fascia1_squadre, 1);

    document.getElementById("output").innerHTML = "";
    aggiornaFasce();
    document.getElementById("btnProssimo").style.display = "inline-block";
    document.getElementById("btnProssimo").disabled = false;
    document.getElementById("btnRicomincia").style.display = "none";
}

function assegnaSquadre(allenatori, squadre, fascia) {
    let squadreDisponibili = [...squadre];
    shuffleArray(squadreDisponibili);
    for (let i = 0; i < allenatori.length; i++) {
        risultati.push(`Fascia ${fascia}: ${allenatori[i]} -> ${squadreDisponibili[i]}`);
    }
}

function aggiornaFasce() {
    document.getElementById("listaFascia1").innerHTML = "";
    document.getElementById("listaFascia2").innerHTML = "";
    document.getElementById("listaFascia3").innerHTML = "";

    fascia1_squadre.forEach(s => {
        let li = document.createElement("li");
        li.textContent = s;
        document.getElementById("listaFascia1").appendChild(li);
    });

    fascia2_squadre.forEach(s => {
        let li = document.createElement("li");
        li.textContent = s;
        document.getElementById("listaFascia2").appendChild(li);
    });

    fascia3_squadre.forEach(s => {
        let li = document.createElement("li");
        li.textContent = s;
        document.getElementById("listaFascia3").appendChild(li);
    });
}

function mostraProssimo() {
    let output = document.getElementById("output");

    if (risultatiMostrati < risultati.length) {
        document.getElementById("btnProssimo").disabled = true;

        let risultato = risultati[risultatiMostrati];
        let [fascia, dettagli] = risultato.split(": ");
        let [allenatore, squadra] = dettagli.split(" -> ");

        playSuspense();

        let countdown = 30; // ⏱️ CAMBIATO da 5 a 30
        let countdownDisplay = document.createElement("div");
        countdownDisplay.classList.add("countdown-display");
        countdownDisplay.textContent = countdown;
        countdownDisplay.style.color = "red";
        countdownDisplay.style.fontSize = "50px";
        output.appendChild(countdownDisplay);

        let countdownInterval = setInterval(() => {
            countdown--;
            countdownDisplay.textContent = countdown;

            if (audio && !audio.paused && countdown <= 3) {
                audio.volume = 0.8;
            }

            if (countdown === 0) {
                clearInterval(countdownInterval);
                stopSuspense();
                countdownDisplay.remove();

                let evidenza = document.createElement("div");
                evidenza.classList.add("casella-evidenza");

                let etichettaFascia = document.createElement("div");
                etichettaFascia.classList.add("etichetta-fascia");
                etichettaFascia.textContent = fascia;

                let imgAllenatore = document.createElement("img");
                imgAllenatore.src = `images/${allenatore.toLowerCase().replace(/ /g, "_")}.jpg`;
                imgAllenatore.alt = `Foto di ${allenatore}`;
                imgAllenatore.classList.add("foto-allenatore");

                let imgSquadra = document.createElement("img");
                imgSquadra.src = `images/${squadra.toLowerCase().replace(/ /g, "_")}.png`;
                imgSquadra.alt = `Stemma ${squadra}`;
                imgSquadra.classList.add("stemma-squadra");

                let testo = document.createElement("p");
                testo.innerHTML = `<strong>${allenatore}</strong> è stato assegnato alla squadra <strong>${squadra}</strong>!`;

                evidenza.appendChild(etichettaFascia);
                evidenza.appendChild(imgAllenatore);
                evidenza.appendChild(imgSquadra);
                evidenza.appendChild(testo);

                output.prepend(evidenza);

                risultatiMostrati++;
                document.getElementById("btnProssimo").disabled = false;

                if (risultatiMostrati === risultati.length) {
                    document.getElementById("btnRicomincia").style.display = "inline-block";
                }
            }
        }, 1000);
    } else {
        alert("Tutte le squadre sono state assegnate!");
    }
}

function ricominciaSorteggio() {
    inizializzaSorteggio();
}

inizializzaSorteggio();
