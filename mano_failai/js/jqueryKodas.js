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
});
