import { FC, useRef, useState } from 'react';
import style from './about-experience.module.scss';
import ExpCard from './ExpCard/ExpCard';

import { Navigation, Pagination,  A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';
import { exp } from './utils/expConstant';


const AboutExperience: FC = () => {
  return (
    <div className={style.exp}>
      <div className={style.exp_container}>
        <div className={style.exp_prev}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24"
          >
            <path fill="none" stroke="currentColor" strokeWidth="2" d="M17 2L7 12l10 10"/>
          </svg>
        </div>
        <div className={style.exp_next}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24"
          >
            <path fill="none" stroke="currentColor" strokeWidth="2" d="m7 2l10 10L7 22"/>
          </svg>
        </div>
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          a11y={{
            containerMessage: 'My experience',
            nextSlideMessage: 'Next slide',
            prevSlideMessage: 'Previos slide',
          }}
          navigation={{
            prevEl: '.'.concat(style.exp_prev),
            nextEl: '.'.concat(style.exp_next), 
          }}
          pagination={{ 
            clickable: true,
            bulletActiveClass: style.bullet_active,
            bulletClass: style.bullet,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
        >
          {
            exp.map((e) => 
              <SwiperSlide key={e.company}>
                <ExpCard {...e}/>
              </SwiperSlide>
            )
          }
        </Swiper>
      </div>
    </div>
  );
};

export default AboutExperience;