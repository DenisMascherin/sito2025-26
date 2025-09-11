// Funzione per aggiornare il menu di destra con la classifica in formato tabellare
function aggiornaClassifica() {
    const tabellaBody = document.querySelector("#tabellaClassifica tbody");
    const classificaStatica = [
        { rank: 1, team: "Juventus", points: 6, logo: "images/juventus.png" },
        { rank: 2, team: "Napoli", points: 6, logo: "images/napoli.png" },
        { rank: 3, team: "Cremonese", points: 6, logo: "images/cremonese.png" },
        { rank: 4, team: "Roma", points: 6, logo: "images/roma.png" },
        { rank: 5, team: "Udinese", points: 4, logo: "images/udinese.png" },
        { rank: 6, team: "Inter", points: 3, logo: "images/inter.png" },
        { rank: 7, team: "Lazio", points: 3, logo: "images/lazio.png" },
        { rank: 8, team: "Milan", points: 3, logo: "images/milan.png" },
        { rank: 9, team: "Como", points: 3, logo: "images/como.png" },
        { rank: 10, team: "Bologna", points: 3, logo: "images/bologna.png" },
        { rank: 11, team: "Atalanta", points: 2, logo: "images/atalanta.png" },
        { rank: 12, team: "Fiorentina", points: 2, logo: "images/Fiorentina.png" },
        { rank: 13, team: "Cagliari", points: 1, logo: "images/cagliari.png" },
        { rank: 14, team: "Pisa", points: 1, logo: "images/pisa.png" },
        { rank: 15, team: "Genoa", points: 1, logo: "images/genoa.png" },
        { rank: 16, team: "Parma", points: 1, logo: "images/parma.png" },
        { rank: 17, team: "Lecce", points: 1, logo: "images/lecce.png" },
        { rank: 18, team: "Verona", points: 1, logo: "images/verona.png" },
        { rank: 19, team: "Torino", points: 1, logo: "images/torino.png" },
        { rank: 20, team: "Sassuolo", points: 0, logo: "images/sassuolo.png" },
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