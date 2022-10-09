import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/autoplay';
import  {Navigation, Pagination, Autoplay} from 'swiper';

SwiperCore.use([Navigation, Pagination]);

const Slider = () => {
    return(
    <Swiper navigation={true} pagination={{clickable:true}} className="swiper" >
        <SwiperSlide>
            <div className='Img1'> </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='Img2'> </div>
        </SwiperSlide>


        <SwiperSlide>
            <div className='Img4'></div>
        </SwiperSlide>
    </Swiper>
    
    )
}


export default Slider;
