// document.addEventListener("DOMContentLoaded", () => {
//     const mygtukas = document.querySelector("button.continue");
//     mygtukas.addEventListener("click", () => {
//         mygtukas.innerHTML = "Next Step...";
//     });
// });



$(() => {
    $("button.continue").click(()=>{
        $(this).html("Next Step...");
    });
});