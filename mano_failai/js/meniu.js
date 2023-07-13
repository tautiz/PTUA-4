document.addEventListener('DOMContentLoaded', function() {
    const meniuSarasas = [
        {
            pavadinimas: 'HOME',
            nuoroda: 'index.html',
            klases: 'meniu_item',
            id: 'home'
        },
        {
            pavadinimas: 'About',
            nuoroda: 'about.html',
            klases: 'meniu_item',
        },
        {
            pavadinimas: 'Portfolio',
            nuoroda: 'portfolio.html',
            klases: 'meniu_item',
        },
        {
            pavadinimas: 'Contacts',
            nuoroda: 'contacts.html',
            klases: 'meniu_item',
        }
    ];

    let busimoMeniuDOMElementai = document.querySelectorAll('.meniu');
    // let meniuHTMLas = '';

    for (let meniuElementoDuomenys of meniuSarasas) {
        // Senas KODAS
        // let naujasMeniuElementas = '<a href="' + meniuElementoDuomenys.nuoroda +
        //     '" class="' + meniuElementoDuomenys.klases + '">' +
        //     meniuElementoDuomenys.pavadinimas + '</a>';
        // REZULTATAS: <a href="index.html" class="meniu_item">Pagrindinis</a>
        // meniuHTMLas += naujasMeniuElementas;
        //
        // Naujas KODAS
        const naujasMeniuElementas = document.createElement('a');
        // REZULTATAS: <a></a>
        naujasMeniuElementas.href = meniuElementoDuomenys.nuoroda;
        // REZULTATAS: <a href="index.html"></a>
        naujasMeniuElementas.className = meniuElementoDuomenys.klases;
        // REZULTATAS: <a href="index.html" class="meniu_item"></a>
        naujasMeniuElementas.textContent = meniuElementoDuomenys.pavadinimas;
        // REZULTATAS: <a href="index.html" class="meniu_item">Pagrindinis</a>

        // Sekantis ciklas iteruoja per visus meniu elementus ir kiekvienam
        // prideda nauja meniu elementa.
        // Si cikla naudojame tik del to kad TURIME 2 MENIU (Desktop ir Mobile)
        for (let meniuDOMElementas of busimoMeniuDOMElementai) {
            meniuDOMElementas.append(naujasMeniuElementas.cloneNode(true));
        }
        // Jei notime dėti tik į meniu elementa, tai reikia naudoti
        // const meniuDOMElementas = document.querySelector('.desktop .meniu');
        // meniuDOMElementas.appendChild(naujasMeniuElementas.cloneNode(true));
    }

});