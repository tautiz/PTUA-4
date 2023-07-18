// document.addEventListener("DOMContentLoaded", () => {
//     const mygtukas = document.querySelector("button.continue");
//     mygtukas.addEventListener("click", () => {
//         mygtukas.innerHTML = "Next Step...";
//     });
// });



$(() => {
    $("button.continue").click(function () {
        $(this).html("Next Step...");
    });

    let eilutesNr = 1;

    $("button.add").click(function () {
        let naujasInputas = $("<input>")
            .attr("type", "text")
            .attr("name", "elementas" + eilutesNr++)
            .attr("placeholder", "Kliento vardas ?");
        $(".elements").append(naujasInputas)
    });
});
