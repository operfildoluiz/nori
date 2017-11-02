var modelos = {
  "c1": [
  {
   "nome": "Classic 01",
   "preco": "1.501,00"
 },
 {
   "nome": "Classic 02",
   "preco": "1.502,00"
 }
 ],
 "c2": [
 {
   "nome": "Moderno 01",
   "preco": "1.601,00"
 },
 {
   "nome": "Moderno 02",
   "preco": "1.602,00"
 }
 ],
 "c3": [
 {
   "nome": "Lancha 01",
   "preco": "1.701,00"
 },
 {
   "nome": "Lancha 02",
   "preco": "1.702,00"
 }
 ],
 "c4": [
 {
   "nome": "Helicóptero 01",
   "preco": "1.801,00"
 },
 {
   "nome": "Helicóptero 02",
   "preco": "1.802,00"
 }
 ]
};



document.querySelector('.modal-close').onclick = function() {
  document.getElementsByClassName("modal")[0].removeAttribute("style");
  document.getElementsByClassName("modal")[0].classList.add("modal-hide");
  document.getElementById("legend").innerHTML = "";
}


var galleries = document.querySelectorAll(".img-gallery")
for (i = 0; i < galleries.length; i++) {
  galleries[i].addEventListener('click', function() {
    document.getElementById("legend").innerHTML = this.getAttribute('data-caption');
    document.getElementById("modal-img").setAttribute('src', this.getAttribute('src'));
    document.getElementsByClassName("modal")[0].classList.remove("modal-hide");
  });
}

document.querySelector('#categoria').onchange = function() {
  document.getElementById("modelos").removeAttribute("disabled");
  document.getElementById("modelos").innerHTML = "<option value=''>Selecione</option>";

  modelos[this.value].forEach(function(element) {
    document.getElementById("modelos").insertAdjacentHTML('beforeend', "<option value='"+element.preco+"'>" + element.nome +"</option>");
  });

}

document.querySelector('#modelos').onchange = function() {
  document.getElementById("preco").innerHTML = this.value;
}


// Scrolling
var easeInQuad = new SmoothScroll('[data-easing="easeInQuad"]', {easing: 'easeInQuad'});

var dots = document.querySelectorAll(".nav li")
for (i = 0; i < dots.length; i++) {
  dots[i].addEventListener('click', function() {
    document.getElementsByClassName("active")[0].classList.remove("active");
    this.classList.add('active');
  });
}

document.onscroll = function() {

  if (isViewable(document.getElementById("section-quemsomos"))) {

    var actives = document.getElementsByClassName("active");
    if (actives.length > 0) {
      document.getElementsByClassName("nav")[0].style.opacity = 1;
      actives[0].classList.remove("active");
      document.getElementById("dot1").classList.add('active');
    }

  }
  else if (isViewable(document.getElementById("section-galeria"))) {
    var actives = document.getElementsByClassName("active");
    if (actives.length > 0) {
      document.getElementsByClassName("nav")[0].style.opacity = 1;
      actives[0].classList.remove("active");
      document.getElementById("dot2").classList.add('active');
    }

  }
  else if (isViewable(document.getElementById("section-orcamento"))) {

    var actives = document.getElementsByClassName("active");
    if (actives.length > 0) {
      document.getElementsByClassName("nav")[0].style.opacity = 1;
      actives[0].classList.remove("active");
      document.getElementById("dot3").classList.add('active');
    }

  } else {
      document.getElementsByClassName("nav")[0].style.opacity = 0;
  }

};


function isViewable(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top < (window.pageYOffset + window.innerHeight) &&
    left < (window.pageXOffset + window.innerWidth) &&
    (top + height) > window.pageYOffset &&
    (left + width) > window.pageXOffset
    );
}


// Register SW.js
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
    .register('service-worker.js')
    .then(function(reg) {
        console.log('Service worker Registered');
    })
    .catch(function (err) {
        console.log('erro', err);
    });
}
