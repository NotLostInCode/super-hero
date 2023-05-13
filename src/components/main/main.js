import { fetchData } from "../../api";

// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
    modules: [Navigation, Pagination],
    // Optional parameters

    // If we need pagination
    pagination: {
      // el: ".swiper-pagination",
      // clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
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
