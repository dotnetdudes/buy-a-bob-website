// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { selectItem } from "../slice";
import { useDispatch } from "react-redux";

export default function SwipeGallery() {
  const dispatch = useDispatch();

  const handleSelectItem = (event) => {
    const item = event.target.getAttribute("data-id");
    dispatch(selectItem(item));
  };

  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{ clickable: true }}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      className="SwiperGallery"
    >
      <SwiperSlide>
        <img
          src="paintings/IMG_0357.jpg"
          data-id="1"
          onClick={handleSelectItem}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="paintings/IMG_0334.jpg"
          data-id="2"
          onClick={handleSelectItem}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="paintings/IMG_0320.jpg"
          data-id="3"
          onClick={handleSelectItem}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="paintings/IMG_0303.jpg"
          data-id="4"
          onClick={handleSelectItem}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="paintings/IMG_0224.jpg"
          data-id="6"
          onClick={handleSelectItem}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="paintings/IMG_0203.jpg"
          data-id="7"
          onClick={handleSelectItem}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="paintings/IMG_0144.jpg"
          data-id="8"
          onClick={handleSelectItem}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="paintings/IMG_0134.jpg"
          data-id="9"
          onClick={handleSelectItem}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="paintings/IMG_0339.jpg"
          data-id="10"
          onClick={handleSelectItem}
        />
      </SwiperSlide>
    </Swiper>
  );
}
