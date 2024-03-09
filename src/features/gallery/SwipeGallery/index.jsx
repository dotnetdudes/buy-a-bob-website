// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

export default function SwipeGallery() {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
     autoplay={{
        delay:4000,
        disableOnInteraction: false,
      }}
      // slide click
      onSlideClick={() => console.log('slide click')}
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
          <img src="paintings/IMG_0357.jpg" onClick={() => console.log('clickimage')} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="paintings/IMG_0334.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="paintings/IMG_0320.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="paintings/IMG_0303.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="paintings/IMG_0224.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="paintings/IMG_0203.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="paintings/IMG_0144.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="paintings/IMG_0134.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="paintings/IMG_0339.jpg" />
        </SwiperSlide>
    </Swiper>
  );
}
