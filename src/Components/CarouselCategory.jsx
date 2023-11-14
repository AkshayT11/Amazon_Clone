import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react"
import {Navigation,Autoplay} from "swiper/modules"
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const CarouselCategory = () => {
  return (
    <div className='bg-white m-3'>
        <div className='text-2xl font-semibold p-3  my-2'>Shop by Category</div>
        <Swiper
        slidesPerView={5}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]} >

            <SwiperSlide>
                <img src={"../images/category_0.jpg"} alt="cat0" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={"../images/category_1.jpg"} alt="cat0" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={"../images/category_2.jpg"} alt="cat0" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={"../images/category_3.jpg"} alt="cat0" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={"../images/category_4.jpg"} alt="cat0" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={"../images/category_5.jpg"} alt="cat0" />
            </SwiperSlide>

        </Swiper>
    </div>
  )
}

export default CarouselCategory