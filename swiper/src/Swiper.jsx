// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

export default function Swiper1() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} style={{
        width:"1000px" , height : "500px" , 
        border : "1px solid black", textAlign : "center"
      }} className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide> 
      </Swiper>
    </>
  );
}