document.addEventListener('DOMContentLoaded', function() {

    const duomenysDOM = document.getElementById('duomenys');
    const atsakymasDOM = document.getElementById('atsakymas');
    const mygtukasDOM = document.getElementById('mygtukas');

    // Kai paspaudizmas mygtukas saugome duomenis
    // i LocalStorage is #duomenys elemento
    mygtukasDOM.addEventListener('click', () => {
        const laukelioDuomenys = duomenysDOM.value;
        localStorage.setItem('lankytojoVardas', laukelioDuomenys);
    });

    // Kai puslapis uzsikrauna, patikriname ar LocalStorage yra duomenys
    // ir jei yra, atvaizduojame juos #atsakymas elemente
    const lankytojoVardas = localStorage.getItem('lankytojoVardas');
    if (lankytojoVardas) {
        atsakymasDOM.textContent = lankytojoVardas;
    }

});