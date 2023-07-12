const manoForma = document.querySelector('form');

manoForma.addEventListener('submit', siustiDuomenis);

function siustiDuomenis(e) {
    e.preventDefault();
    console.log('Atlierku duomenu siuntima...');

    const forma = e.target;
    const formInputs = forma.elements;

    const vardas = formInputs[0].value;
    const email = formInputs.email.value;
    const message = forma.message.value;
    // ... kodas kuris validuos duomenis

    console.debug(vardas, email, message);

    // ...cia bus kodas, kuris sius duomenis i serveri
}

function atvaizduotiFormosDuomenis(e) {
    e.preventDefault();
    console.log('Atvaizduoju forma...');
    const forma = e.target;

    const vardas = forma.vardas.value;
    const email = forma.email.value;
    const message = forma.message.value;

    const rezultatas = document.querySelector('#rezultatas');

    rezultatas.textContent = `Vardas: ${vardas}, email: ${email}, message: ${message}`;
}
