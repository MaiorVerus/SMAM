
console.log("Script loaded!");

const btn = document.getElementById("dropdown-menu");
const div = document.querySelector(".dropdown");
btn.addEventListener("click", (e) => {
    e.stopPropagation();
    div.classList.toggle("show");
    div.classList.toggle("hide");
    // console.log(e.target, div.className);

})
document.addEventListener("click", (e) => {
    if (!div.contains(e.target) && e.target !== btn) {
        div.classList.add("hide");
        div.classList.remove("show");
        // console.log(e.target, div.className);

    }
})
