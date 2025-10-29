document.addEventListener("DOMContentLoaded", function() {
    // Seleziona il contenitore della classifica Serie A
    const classificaSerieA = document.getElementById("classifica");

    if (classificaSerieA) {
        // Creazione del nuovo div per la classifica del Fantacalcio
        const classificaFantacalcio = document.createElement("div");
        classificaFantacalcio.id = "classificaFantacalcio";
        classificaFantacalcio.classList.add("schermata");

        // Dati della classifica del Fantacalcio con stemmi
        const squadreFantacalcio = [
            { pos: 1, nome: "Milan", punti: 21, logo: "images/milan.png" },
            { pos: 2, nome: "Inter", punti: 16, logo: "images/inter.png" },
            { pos: 3, nome: "Napoli", punti: 15, logo: "images/napoli.png" },
            { pos: 4, nome: "Roma", punti: 12, logo: "images/roma.png" },
            { pos: 5, nome: "Atalanta", punti: 9, logo: "images/atalanta.png" },
            { pos: 6, nome: "Lazio", punti: 9, logo: "images/lazio.png" },
            { pos: 7, nome: "Juventus", punti: 9, logo: "images/juventus.png" },
            { pos: 8, nome: "Bologna", punti: 7, logo: "images/bologna.png" },
        ];

        // Costruzione della tabella
        let tabellaHTML = `
            <h2>Classifica Fantacalcio 2025/2026</h2>
            <table>
                <thead>
                    <tr>
                        <th>Posizione</th>
                        <th>Squadra</th>
                        <th>Punti</th>
                    </tr>
                </thead>
                <tbody>
        `;

        squadreFantacalcio.forEach(squadra => {
            tabellaHTML += `
                <tr>
                    <td>${squadra.pos}</td>
                    <td><img src="${squadra.logo}" alt="${squadra.nome}" class="logo-squadra"> ${squadra.nome}</td>
                    <td>${squadra.punti}</td>
                </tr>
            `;
        });

        tabellaHTML += `
                </tbody>
            </table>
        `;

        // Inserisce il contenuto HTML nella classifica Fantacalcio
        classificaFantacalcio.innerHTML = tabellaHTML;

        // Aggiunge la classifica del Fantacalcio sotto la classifica Serie A
        classificaSerieA.appendChild(classificaFantacalcio);
    }
});
