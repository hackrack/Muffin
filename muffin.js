var bakeButton = document.getElementById("bake");
var eatButton = document.getElementById("eat");
var header = document.querySelector("h1");
var count = 0;
bakeButton.addEventListener("click", function() {
  count += 5;
  window.localStorage.setItem("counter", count);
  var counter = window.localStorage.getItem("counter");
  document.querySelector("h2").innerHTML = counter;
  var img1 = document.createElement("img");
  img1.setAttribute("src", "muffin2.png");
  img1.setAttribute("id", "img1");
  img1.style.position = "relative";
  img1.style.left = Math.round(Math.random() * 105 ).toString() + "%";
  img1.style.bottom = Math.round(Math.random() * 99 ).toString() + "%";
  img1.style.right = Math.round(Math.random() * 99 ).toString() + "%";
  img1.style.height = "40px";
  img1.style.width = "40px";
  img1.style.top = "420px";
  var image1 = document.body.appendChild(img1);
  var img2 = document.createElement("img");
  img2.setAttribute("src", "muffin2.png");
  img2.setAttribute("id", "img2");
  img2.style.position = "relative";
  img2.style.left = Math.round(Math.random() * 99 ).toString() + "%";
  img2.style.bottom = Math.round(Math.random() * 99 ).toString() + "%";
  img2.style.right = Math.round(Math.random() * 99 ).toString() + "%";
  img2.style.height = "40px";
  img2.style.width = "40px";
  img2.style.top = "420px";
  var image2 = document.body.appendChild(img2);
  var img3 = document.createElement("img");
  img3.setAttribute("src", "muffin2.png");
  img3.setAttribute("id", "img3");
  img3.style.position = "relative";
  img3.style.left = Math.round(Math.random() * 99 ).toString() + "%";
  img3.style.bottom = Math.round(Math.random() * 99 ).toString() + "%";
  img3.style.right = Math.round(Math.random() * 99 ).toString() + "%";
  img3.style.height = "40px";
  img3.style.width = "40px";
  img3.style.top = "420px";
  var image3 = document.body.appendChild(img3);
  var img4 = document.createElement("img");
  img4.setAttribute("src", "muffin2.png");
  img4.setAttribute("id", "img4");
  img4.style.position = "relative";
  img4.style.left = Math.round(Math.random() * 99 ).toString() + "%";
  img4.style.bottom = Math.round(Math.random() * 99 ).toString() + "%";
  img4.style.right = Math.round(Math.random() * 99 ).toString() + "%";
  img4.style.height = "40px";
  img4.style.width = "40px";
  img4.style.top = "420px";
  var image4 = document.body.appendChild(img4);
  var img5 = document.createElement("img");
  img5.setAttribute("src", "muffin2.png");
  img5.setAttribute("id", "img5");
  img5.style.position = "relative";
  img5.style.left = Math.round(Math.random() * 99 ).toString() + "%";
  img5.style.bottom = Math.round(Math.random() * 99 ).toString() + "%";
  img5.style.right = Math.round(Math.random() * 99 ).toString() + "%";
  img5.style.height = "40px";
  img5.style.width = "40px";
  img5.style.top = "420px";
  var image5 = document.body.appendChild(img5);
})

eatButton.addEventListener("click", function() {
  if (count >= 1) {
    count -= 1;
    window.localStorage.setItem("counter", count);
    var counter = window.localStorage.getItem("counter");
    document.querySelector("h2").innerHTML = counter;
    var img5 = document.getElementById("img5");
    img5.remove();
  }
})

window.addEventListener("load", function() {
  var counter = window.localStorage.getItem("counter");
  document.querySelector("h2").innerHTML = counter;
})
