// // Bars Open and Close  with transition
// document.getElementById("mobilemenu").classList.add("slide-out");
// function myFunction() {
//   var x = document.getElementById("mobilemenu");
//   x.classList.toggle("slide-out");
// }

// Bars Open and Close, same button, without transition
function myFunction() {
  var x = document.getElementById("mobilemenu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// Surprise Me, Open Random Pages
const links = [
    "herohasreturned.html",
    "hersummon.html",
    "levelup.html",
    "nanhao.html",
    "reaper.html",
    "sololeveling.html"
];
document.getElementById("random-link").addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * links.length);
    window.location.href = links[randomIndex];
});
document.getElementById("random-link-mobile").addEventListener("click", function() {
  const randomIndex = Math.floor(Math.random() * links.length);
  window.location.href = links[randomIndex];
});

// Bars reveal and close
// <i class="fa-sharp fa-solid fa-bars" onclick="revealmenu()"></i>
// <i class="fa-sharp fa-solid fa-x" onclick="closemenu()"></i>
// function revealmenu() {
//     document.getElementById("mobilemenu").style.display = ("block")
// }
// function closemenu(){
//     document.getElementById("mobilemenu").style.display=("none")
// }
