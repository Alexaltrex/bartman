import * as React from "react";
import style from "./OurPartners.module.scss";
import src0 from "../../assets/png/B3_OurPartners/0.png";
import src1 from "../../assets/png/B3_OurPartners/1.png";
import src2 from "../../assets/png/B3_OurPartners/2.png";
import src3 from "../../assets/png/B3_OurPartners/3.png";
import src4 from "../../assets/png/B3_OurPartners/4.png";
import backMobile from "../../assets/png/B3_OurPartners/card_mobile.png";
import backDesktop from "../../assets/png/B3_OurPartners/card_desktop.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from "swiper";

const cards = [src0, src1, src2, src3, src4];

export const OurPartners = () => {
    return (
        <div className={style.ourPartners} id="Partners">
            <h2 className={style.title}>Our partners</h2>

            <Swiper className={style.cardsMobile}
                    slidesPerView="auto"
                    spaceBetween={10}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{delay: 1500}}
                    modules={[Autoplay]}
            >

                {
                    cards.map((src, key) => (
                        <SwiperSlide className={style.slide} key={key}>
                            <img src={backMobile} alt="" className={style.back}/>
                            <img src={src} alt="" className={style.logo}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <div className={style.cardsDesktop}>
                {
                    cards.map((src, key) => (
                        <div key={key}
                             className={style.card}
                        >
                            <img src={backDesktop} alt="" className={style.back}/>
                            <img src={src} alt="" className={style.logo}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
