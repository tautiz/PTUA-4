const vrd = "Tautvydas Dulskis";

// Pasirinkti elementa
const manoVardasDOM = document.getElementById("manoVardas");

// Pakeisti elemento turini
manoVardasDOM.innerHTML = vrd;




// Modifikuojam ASIDE nuorodu turini
// Pasirinkti elementa
const soninesNuorodos = document.querySelectorAll("aside > main > a");

for (let i = 0; i < soninesNuorodos.length; i++) {
    let nuoroda = soninesNuorodos[i];
    nuoroda.innerHTML = vrd;
}






const sarasoElementai = document.querySelectorAll("#elementas li");

for (let i = 0; i < sarasoElementai.length; i++) {
    let elementas = sarasoElementai[i];
    let atsitiktinisSkaicius = Math.floor(Math.random() * 100);
    elementas.innerHTML =  'Atsitiktinis skaicius: ' + atsitiktinisSkaicius;
}
