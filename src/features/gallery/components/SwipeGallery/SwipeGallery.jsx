// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { selectItem } from "../../slice";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../../../features/products/slice";
import { selectActiveProductsByOrientation, selectProductState } from "../../../products/slice/selectors";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Loader from "../../../../components/Loader";
import Alert from "@mui/material/Alert";

export default function SwipeGallery() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(selectProductState);
  const items = useSelector(selectActiveProductsByOrientation("landscape"));

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleSelectItem = (event) => {
    const item = event.target.getAttribute("data-id");
    dispatch(selectItem(item));
  };

  const slides = items.map((item) => (
    <SwiperSlide key={item.id}>
      <img src={`${import.meta.env.VITE_IMAGE_SERVER_URL}/${item.imageUrl}`} data-id={item.id} onClick={handleSelectItem} />
    </SwiperSlide>
  ));

  return (
    loading ? <Loader /> : error ? <Alert severity="error">{error}</Alert> :
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
      {slides}
    </Swiper>
  );
}
