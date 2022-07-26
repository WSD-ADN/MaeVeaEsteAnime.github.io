((d) => {
  const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");

  $btnMenu.addEventListener("click", (e) => {
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;
    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
  });
})(document);

//---------------modal about-----------------------//
let cerrar = document.querySelectorAll(".close-about")[0];
let abrir = document.querySelectorAll(".boton-img")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];

abrir.addEventListener("click", function (e) {
  e.preventDefault();
  modalC.style.opacity = "1";
  modalC.style.visibility = "visible";
  modal.classList.toggle("modal-close");
});

cerrar.addEventListener("click", function () {
  modal.classList.toggle("modal-close");
  setTimeout(function () {
    modalC.style.opacity = "0";
    modalC.style.visibility = "hidden";
  }, 700);
});

window.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target === modalC) {
    modal.classList.toggle("modal-close");
    setTimeout(function () {
      modalC.style.opacity = "0";
      modalC.style.visibility = "hidden";
    }, 700);
  }
});

//------ modal about texto--------------------------

const modalSpan = document.getElementById("span-sinopsis");

const modalEscribir = (text = "", tiempo = 200, etiqueta = "") => {
  let arrayCaracteres = text.split("");
  etiqueta.innerHTML = "";
  let cont = 0;
  let escribir = setInterval(function () {
    etiqueta.innerHTML += arrayCaracteres[cont];
    cont++;
    if (cont === arrayCaracteres.length) {
      cont = 0;
      etiqueta.innerHTML = "";
    }
  }, tiempo);
};

modalEscribir("Shuumatsu no Valkyrie  ", 200, modalSpan);

//-------------Carruocel----------------------------//

((d) => {
  const grande = document.querySelector(".contenedor-grande");
  const punto = document.querySelectorAll(".punto");

  punto.forEach((cadaPunto, i) => {
    punto[i].addEventListener("click", () => {
      let posicion = i;
      let operacion = posicion * -50;
      grande.style.transform = `translateX(${operacion}%)`;

      punto.forEach((cadaPunto, i) => {
        punto[i].classList.remove("activo");
      });
      punto[i].classList.add("activo");
    });
  });
})(document);

// Capitulos ---------------------------------//

const workItems = document.querySelectorAll(".work .item");
const workItemsCount = workItems.length;
let currentIndex = 0;
const closeButton = document.querySelector("#close-button");
const prevButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");
const openCloseButton = document.querySelector("#buttonOpenCloseMenu");
const menuMobileItems = document.querySelector("#menu-mobile-items");

// openCloseButton.addEventListener("click", (e) => {
//   menuMobileItems.classList.toggle("menu-mobile-closed");
// });

workItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    currentIndex = parseInt(item.getAttribute("data-id"));
    const contentArr = document.querySelectorAll("#details-container item");

    document.querySelectorAll("#details-container .item").forEach((item) => {
      item.classList.add("item-hide");
    });
    document
      .querySelectorAll("#details-container .item")
      [currentIndex].classList.toggle("item-hide");
    document.querySelector("#screen").style["animation-name"] = "fade-in";

    setTimeout(() => {
      document.querySelector("#details-container").style.display = "block";
    }, 1000);
    setTimeout(() => {
      document.querySelector("#screen").style = "";
    }, 2000);
  });
});

closeButton.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#screen").style["animation-name"] = "fade-in";

  setTimeout(() => {
    document.querySelector("#details-container").style.display = "none";
  }, 1000);
  setTimeout(() => {
    document.querySelector("#screen").style = "";
  }, 2000);
});

prevButton.addEventListener("click", (e) => {
  if (currentIndex - 1 < 0) {
    return;
  }
  currentIndex--;
  loadGalleryItem(currentIndex);
});
nextButton.addEventListener("click", (e) => {
  if (currentIndex + 1 == workItemsCount) {
    return;
  }
  currentIndex++;
  loadGalleryItem(currentIndex);
});

function loadGalleryItem(index) {
  document.querySelectorAll("#details-container .item").forEach((item) => {
    item.classList.add("item-hide");
  });
  document
    .querySelectorAll("#details-container .item")
    [index].classList.toggle("item-hide");
}

//-----------------

let video = document.getElementById("myVideo");

video.muted = true;

function muted() {
  if (video.muted === false) {
    video.muted = true;
  } else {
    video.muted = false;
  }
}
document.getElementById("soun-B").addEventListener("click", muted);

//-----------close-video (pausa)-----

const vid = document.getElementById("video-pause");
function pauseVid() {
  vid.pause();
}
const vid2 = document.getElementById("video-pause2");
function pauseVid2() {
  vid2.pause();
}
const vid3 = document.getElementById("video-pause3");
function pauseVid3() {
  vid3.pause();
}
const vid4 = document.getElementById("video-pause4");
function pauseVid4() {
  vid4.pause();
}
const vid5 = document.getElementById("video-pause5");
function pauseVid5() {
  vid5.pause();
}
const vid6 = document.getElementById("video-pause6");
function pauseVid6() {
  vid6.pause();
}
const vid7 = document.getElementById("video-pause7");
function pauseVid7() {
  vid7.pause();
}
const vid8 = document.getElementById("video-pause8");
function pauseVid8() {
  vid8.pause();
}
const vid9 = document.getElementById("video-pause9");
function pauseVid9() {
  vid9.pause();
}
const vid10 = document.getElementById("video-pause10");
function pauseVid10() {
  vid10.pause();
}
const vid11 = document.getElementById("video-pause11");
function pauseVid11() {
  vid11.pause();
}
const vid12 = document.getElementById("video-pause12");
function pauseVid12() {
  vid12.pause();
}
