document.addEventListener('DOMContentLoaded', function() {

    const mygtukas = document.querySelector('#mygtukas');
    const output = document.querySelector('#output');

    mygtukas.addEventListener('click', function() {
       gautiDuomenisIsServerio();
    });

    function gautiDuomenisIsServerio() {
        fetch('/gallery.tautvydas')
            .then(response => response.json())
            .then(data => {
                for (let galleryElementData of data) {
                    output.innerHTML += galleryElementData.title + ' - ';
                }
            });
    }

});