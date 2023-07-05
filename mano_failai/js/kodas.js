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
