// get on plus buttons
var plusBtn = document.getElementsByClassName("fa-square-plus");
for (let i = 0; i < plusBtn.length; i++) {
  const element = plusBtn[i];
  element.addEventListener("click", function (event) {
    event.target.previousElementSibling.innerText++;
    clculateTotale();
  });
}
var minusBtn = document.getElementsByClassName("fa-square-minus");
for (let i = 0; i < minusBtn.length; i++) {
  const element = minusBtn[i];
  element.addEventListener("click", function (event) {
    // event.target.nextElementSibling.innerText--;
    if (event.target.nextElementSibling.innerText > 0) {
      event.target.nextElementSibling.innerText--;
      clculateTotale();
    }
  });
}
var likeBtn = document.getElementsByClassName("fa-thumbs-up");
for (let i = 0; i < likeBtn.length; i++) {
  const element = likeBtn[i];
  element.addEventListener("click", function (event) {
    event.target.classList.toggle("liked");
  });
}
var delitebtn = document.getElementsByClassName("fa-trash");
// console.log(delitebtn);
for (let i = 0; i < delitebtn.length; i++) {
  const element = delitebtn[i];
  element.addEventListener("click", function (event) {
    console.log(
      // event.target.parentElement.parentElement.parentElement.parentElement.remove()
      event.target.closest(".single-item").remove()
    );
    clculateTotale();
  });
}
function clculateTotale() {
  var allitem = document.getElementsByClassName("single-item");
  var totale = 0;
  for (let i = 0; i < allitem.length; i++) {
    const element = allitem[i];
    var qty = element.querySelector(".quantity").innerText;
    var unitprice = element.querySelector(".price").innerText;
    totale += qty * unitprice;
  }
  document.getElementById("total").innerText = totale;
}
clculateTotale();
