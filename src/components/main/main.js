import { fetchData } from "../../api";

// core version + navigation, pagination modules:
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';

export default function mainScript(main) {
  fetchData()
    .then((data) => {
      // Добавление картинок в слайдер
      for (let i = 1; i <= 5; i++) {
        const imageUrls = data.image.url;
        const swiperWrapper = document.querySelector(".swiper-wrapper");
        const swiperSlide = document.createElement("div");
        swiperSlide.classList.add("swiper-slide");
        const swiperImage = document.createElement("img");
        swiperImage.src = imageUrls;

        swiperWrapper.appendChild(swiperSlide);
        swiperSlide.appendChild(swiperImage);
      }
    })
    .catch((error) => {
      console.log("Ошибка при получение API в main.js", error);
    });






  // init Swiper:
  const swiper = new Swiper(".swiper", {
    // configure Swiper to use modules
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "3",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // pagination: {
    //   el: ".swiper-pagination",
    // },
  });
}



// import { apiUrl } from "../../api";

// export default function mainScript(main) {

//      for (let i = 1; i <= 10; i++) {
//       const imageUrls = `${apiUrl.url}${i}`;
//       fetch(imageUrls)
//         .then(response => response.json())
//         .then((data) =>  {

//           const list = document.querySelector(".list");
//           const listItem = document.createElement("li");
//           const img = document.createElement("img");
//           img.src = imageUrls
//           listItem.appendChild(img)
//           list.appendChild(listItem)

//         })
//      }
