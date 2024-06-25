let dugme = document.getElementById("dugme");


function visible() {
    console.log(dugme.style.visibility)
  dugme.style.display = "block";
  console.log(dugme.style.visibility)
}
setTimeout(visible, 3500);