document.addEventListener('DOMContentLoaded', function() {
    const meniuSarasas = [
        {
            pavadinimas: 'HOME',
            nuoroda: 'index.html',
            klases: 'meniu_item',
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
    let meniuHTMLas = '';

    for (let meniuElementoDuomenys of meniuSarasas) {
        let naujasMeniuElementas = '<a href="' + meniuElementoDuomenys.nuoroda +
            '" class="' + meniuElementoDuomenys.klases + '">' +
            meniuElementoDuomenys.pavadinimas + '</a>';
        // REZULTATAS: <a href="index.html" class="meniu_item">Pagrindinis</a>
        meniuHTMLas += naujasMeniuElementas;
    }

    for (let meniuDOMElementas of busimoMeniuDOMElementai) {
        meniuDOMElementas.innerHTML = meniuHTMLas;
    }
});