function YOZH() {
    let yozh_img = document.getElementById('YOZH_img');
    let yozh_text = document.getElementById('text_YOZH');
    let none_yozh_text = document.getElementById('text_YOZH_PRO');
    let none_another_yozh_text = document.getElementById('text_YOZH_PRO_MAX');
    yozh_text.style.display = "block";
    none_yozh_text.style.display = "none";
    none_another_yozh_text.style.display = "none";
    yozh_img.src = "./images/yozh.jpg";
}

function YOZH_PRO() {
    let yozh_img = document.getElementById('YOZH_img');
    let yozh_text = document.getElementById('text_YOZH_PRO');
    let none_yozh_text = document.getElementById('text_YOZH');
    let none_another_yozh_text = document.getElementById('text_YOZH_PRO_MAX');
    yozh_text.style.display = "block";
    none_yozh_text.style.display = "none";
    none_another_yozh_text.style.display = "none";
    yozh_img.src = "./images/yozhPro.jpg";
}

function YOZH_PRO_MAX() {
    let yozh_img = document.getElementById('YOZH_img');
    let yozh_text = document.getElementById('text_YOZH_PRO_MAX');
    let none_yozh_text = document.getElementById('text_YOZH_PRO');
    let none_another_yozh_text = document.getElementById('text_YOZH');
    yozh_text.style.display = "block";
    none_yozh_text.style.display = "none";
    none_another_yozh_text.style.display = "none";
    yozh_img.src = "./images/yozhProMax.jpg";
}

function close_onclick(id) {
  document.getElementById(id).style.display = "none"
}

var list = ["images/main.jpg", "images/yozh.jpg","images/yozhPro.jpg","images/yozhProMax.jpg","images/yozh_0.jpg","images/yozh_0.jpg"]
var to = -1

function show_galery(index) {
  document.getElementById('galery').style.display = "block"
  to = index
  var obj = document.getElementById("galery_img")
  obj.src = list[to]
}

function right_arrow() {
  var obj = document.getElementById("galery_img")
  if (to < list.length - 1) {
    to++
  } else {
    to = 0
  }
  obj.src = list[to]
}

function left_arrow() {
  var obj = document.getElementById("galery_img");
  if (to > 0) {
    to--
  } else {
    to = list.length - 1
  }
  obj.src = list[to]
}

window.onclick = function(event) {
  let galery = document.getElementById(`galery`)
  if(event.target == galery)
    galery.style.display = "none"
}
