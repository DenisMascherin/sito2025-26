// Funzione per aggiornare il menu di destra con la classifica in formato tabellare
function aggiornaClassifica() {
    const tabellaBody = document.querySelector("#tabellaClassifica tbody");
    const classificaStatica = [
        { rank: 1, team: "Milan", points: 28, logo: "images/milan.png" },
        { rank: 2, team: "Napoli", points: 28, logo: "images/napoli.png" },
        { rank: 3, team: "Inter", points: 27, logo: "images/inter.png" },
        { rank: 4, team: "Roma", points: 27, logo: "images/roma.png" },
        { rank: 5, team: "Como", points: 24, logo: "images/como.png" },
        { rank: 6, team: "Bologna", points: 24, logo: "images/bologna.png" },
        { rank: 7, team: "Juventus", points: 23, logo: "images/juventus.png" },
        { rank: 8, team: "Lazio", points: 18, logo: "images/lazio.png" },
        { rank: 9, team: "Udinese", points: 18, logo: "images/udinese.png" },
        { rank: 10, team: "Sassuolo", points: 17, logo: "images/sassuolo.png" },
        { rank: 11, team: "Cremonese", points: 17, logo: "images/cremonese.png" },
        { rank: 12, team: "Atalanta", points: 16, logo: "images/atalanta.png" },
        { rank: 13, team: "Torino", points: 14, logo: "images/torino.png" },
        { rank: 14, team: "Lecce", points: 13, logo: "images/lecce.png" },
        { rank: 15, team: "Cagliari", points: 11, logo: "images/cagliari.png" },
        { rank: 16, team: "Genoa", points: 11, logo: "images/genoa.png" },
        { rank: 17, team: "Parma", points: 11, logo: "images/parma.png" },
        { rank: 18, team: "Pisa", points: 10, logo: "images/pisa.png" },
        { rank: 19, team: "Fiorentina", points: 6, logo: "images/fiorentina.png" },
        { rank: 20, team: "Verona", points: 6, logo: "images/verona.png" },
    ];

    tabellaBody.innerHTML = ""; // Pulisce la tabella    
    classificaStatica.forEach(team => {
        const riga = document.createElement("tr");

        // Cella per la posizione
        const cellaPosizione = document.createElement("td");
        cellaPosizione.textContent = team.rank;

        // Cella per la squadra con stemma
        const cellaSquadra = document.createElement("td");
        const img = document.createElement("img");
        img.src = team.logo;
        img.alt = team.team;
        cellaSquadra.appendChild(img);
        cellaSquadra.appendChild(document.createTextNode(team.team));

        // Cella per i punti
        const cellaPunti = document.createElement("td");
        cellaPunti.textContent = team.points;

        // Aggiunge le celle alla riga
        riga.appendChild(cellaPosizione);
        riga.appendChild(cellaSquadra);
        riga.appendChild(cellaPunti);

        // Aggiunge la riga alla tabella
        tabellaBody.appendChild(riga);
    });
}

// Aggiorna la classifica al caricamento della pagina
document.addEventListener("DOMContentLoaded", () => {
    aggiornaClassifica();
});