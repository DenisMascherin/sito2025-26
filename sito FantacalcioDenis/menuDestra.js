// Funzione per aggiornare il menu di destra con la classifica in formato tabellare
function aggiornaClassifica() {
    const tabellaBody = document.querySelector("#tabellaClassifica tbody");
    const classificaStatica = [
        { rank: 1, team: "Milan", points: 16, logo: "images/milan.png" },
        { rank: 2, team: "Inter", points: 15, logo: "images/inter.png" },
        { rank: 3, team: "Napoli", points: 15, logo: "images/napoli.png" },
        { rank: 4, team: "Roma", points: 15, logo: "images/roma.png" },
        { rank: 5, team: "Bologna", points: 13, logo: "images/bologna.png" },
        { rank: 6, team: "Como", points: 12, logo: "images/como.png" },
        { rank: 7, team: "Juventus", points: 12, logo: "images/juventus.png" },
        { rank: 8, team: "Atalanta", points: 11, logo: "images/atalanta.png" },
        { rank: 9, team: "Sassuolo", points: 10, logo: "images/sassuolo.png" },
        { rank: 10, team: "Cremonese", points: 10, logo: "images/cremonese.png" },
        { rank: 11, team: "Udinese", points: 9, logo: "images/udinese.png" },
        { rank: 12, team: "Lazio", points: 8, logo: "images/lazio.png" },
        { rank: 13, team: "Cagliari", points: 8, logo: "images/cagliari.png" },
        { rank: 14, team: "Torino", points: 8, logo: "images/torino.png" },
        { rank: 15, team: "Parma", points: 6, logo: "images/parma.png" },
        { rank: 16, team: "Lecce", points: 6, logo: "images/lecce.png" },
        { rank: 17, team: "Verona", points: 4, logo: "images/verona.png" },
        { rank: 18, team: "Fiorentina", points: 3, logo: "images/fiorentina.png" },
        { rank: 19, team: "Genoa", points: 3, logo: "images/genoa.png" },
        { rank: 20, team: "Pisa", points: 3, logo: "images/pisa.png" },
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