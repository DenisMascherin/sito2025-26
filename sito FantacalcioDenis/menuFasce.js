document.addEventListener('DOMContentLoaded', function () {
    const fasce = [
        { fascia: "Fascia 1", squadra: "Inter", stemma: "images/inter.png", classe: "fascia1" },
        { fascia: "Fascia 1", squadra: "Roma", stemma: "images/roma.png", classe: "fascia1" },
        { fascia: "Fascia 1", squadra: "Milan", stemma: "images/milan.png", classe: "fascia1" },
        { fascia: "Fascia 1", squadra: "Napoli", stemma: "images/napoli.png", classe: "fascia1" },
        { fascia: "Fascia 2", squadra: "Bologna", stemma: "images/bologna.png", classe: "fascia2" },
        { fascia: "Fascia 2", squadra: "Juventus", stemma: "images/juventus.png", classe: "fascia2" },
        { fascia: "Fascia 3", squadra: "Como", stemma: "images/como.png", classe: "fascia3" },
        { fascia: "Fascia 3", squadra: "Sassuolo", stemma: "images/sassuolo.png", classe: "fascia3" },
    ];

    const tbody = document.querySelector('#tabellaFasce tbody');
    fasce.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="${item.classe}">${item.fascia}</td>
            <td>
                <img src="${item.stemma}" alt="${item.squadra} Stemma" class="stemma">
                ${item.squadra}
            </td>
        `;
        tbody.appendChild(row);
    });
});
