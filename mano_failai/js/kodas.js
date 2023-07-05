let x = 5;
let y = 6;
let z = x + y;
console.log(z);


let b = "Tautvydas Dulskis";
let c = "Mano vardas yra";

console.log(c + ' : ' + b);

let n = true;

while (x < 10) {
    if (n) {
        console.log('n = true');
    } else {
        console.log('n = false');
    }
    x++;
    n = !n; // n = false
}


// Skaiciu spausdinimas cikle zingsniu kas 3
for( let a = 0; a <= 16; a+=4) {
    console.log(a);
}

let sportininkas = 'Tautvydas Dulskis';
let vieta = [];
let medalis;

switch (typeof vieta) {
    case 'number':
        medalis = 'auksą';
        console.log('switch case 1');
        break;
    case 'string':
        medalis = 'sidabrą';
        console.log('switch case 2');
        break;
    case 'undefined':
        medalis = 'bronzą';
        console.log('switch case 3');
        break;
    default:
        medalis = 'nieko';
        console.log('switch case default');
        break;
}

console.log(sportininkas + ' laimejo ' + medalis);



// Naudodamiesi switch parašykite kodą kuris tikrintų ar a yra lygus 2 + 2.
// Susikurkite pradžiai let a = 2 + 2;
//
// Pabandykite du variantus su break ir be break,
// t.y. parašykite bent 3 skirtingus case ir default,
// o case turėtų būti per mažas, lygus 4, per didelis ir default
// kad nei vienas iš tų variantų. Pasižiūrėkite kuom skiriasi jūsų
// console.log kai naudojate break ir nenaudojate break kiekvienoje case situacijoje.

let a = 2 + 2;

switch (a) {
    case 3:
        console.log('a reiksme yra mazesne uz 4');
        break;
    case 4:
        console.log('a reiksme yra lygi 4');
        break;
    case 5:
        console.log('a reiksme daugiau uz 4');
        break;
    default:
        console.log('a reiksme yra nezinoma');
        break;
}

let nerykiuotasMasyvas = [9, 4, 6, 5, 8, 0, 7, 2, 3, 1];
let rykiuotasMasyvas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let stringuMasyvas = ['a', 'b', 'nulis', 'vienas', 'c', 'Vardas', 'adresas'];
let misrusMasyvas = [5, 'b', '0', 1, 'c', 777, {"vardas":"Jonas"}];

let asmuo = misrusMasyvas[6];
console.log(asmuo);
console.log(asmuo.vardas);

// Spausdiname nerykiuota masyva
for (let i = 0; i < nerykiuotasMasyvas.length; i++) {
    let elementas = nerykiuotasMasyvas[i];
    console.log(elementas);
}

// Kai nereikia indekso numerio ciklo proceso metu
for( let elementas of nerykiuotasMasyvas) {
    console.log(elementas);
}


let fruits = ["Apple", "Orange", "Plum"];

console.log( fruits[0] ); // Apple
console.log( fruits[1] ); // Orange
console.log( fruits[2] ); // Plum

fruits[3] = 'Pear'; // dabar["Apple", "Orange", "Plum", "Pear"]

// spausdinti( fruits[0] ); //  -- Apple --
// spausdinti( fruits[1] ); //  -- Orange --
// spausdinti( fruits[2] ); //  -- Pear --

spausdintiMasyva(fruits);
spausdintiMasyva(nerykiuotasMasyvas);
spausdintiMasyva(rykiuotasMasyvas);

function spausdinti(duomenys) {
    console.log('--[ ' + duomenys + ' ]--');
}

function spausdintiMasyva(masyvas) {
    console.log('Masyvo ilgis: ' + masyvas.length);
    for(let elementas of masyvas) {
        spausdinti(elementas);
    }
}
