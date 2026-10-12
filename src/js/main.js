import "swiper/css";
import "swiper/css/navigation";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";

new Swiper(".swiper", {
  modules: [Navigaion],
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
