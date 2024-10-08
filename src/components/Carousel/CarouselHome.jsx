import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Importación actualizada
import "swiper/css";
import "swiper/css/navigation";
import "./Carousel.css"; // Tus estilos personalizados

const CarouselHome = () => {
  return (
    <div className="carousel-container">
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        navigation={true}
        modules={[Navigation]} // Ajusta los módulos
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="carousel-card">Card 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-card">Card 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-card">Card 3</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-card">Card 4</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-card">Card 5</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselHome;
