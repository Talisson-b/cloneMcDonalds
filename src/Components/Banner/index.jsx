// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper-bundle.css';

import banner1 from '../../assets/banner1.svg'
import banner2 from '../../assets/banner2.svg'


const Banner = () => {

  return (
    <Swiper>
      <SwiperSlide >
        <img style={{
          width: '100%',
          marginTop: '11rem'
        }} src={banner2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img style={{
          width: '100%',
          marginTop: '11rem'
        }} src={banner1} alt="" />
      </SwiperSlide>

    </Swiper>
  )
}

export default Banner