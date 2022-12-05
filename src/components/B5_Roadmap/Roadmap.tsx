import * as React from "react";
import style from "./Roadmap.module.scss"
import cardDesktop from "../../assets/png/B5_Roadmap/cardDesktop.png";
import cardMobile from "../../assets/png/B5_Roadmap/cardMobile.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {useState} from "react";
import SwiperClass from 'swiper/types/swiper-class';
import {Navigation} from "../X_Custom/Navigation/Navigation";

const items = [
    {
        title: "Q1",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
    },
    {
        title: "Q2",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
    },
    {
        title: "Q3",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
    },
    {
        title: "Q4",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
    },
]

export const Roadmap = () => {
    const [swiper, setSwiper] = useState<SwiperClass | null>(null);

    return (
        <div className={style.roadmap} id="RoadMap">
            <h2 className={style.title}>Roadmap</h2>

            <Swiper className={style.cardsMobile}
                    slidesPerView="auto"
                    spaceBetween={6}
                    centeredSlides={true}
                    //loop={true}
                    onSwiper={(swiper) => setSwiper(swiper)}
            >
                {
                    items.map(({title, text}, key) => (
                        <SwiperSlide className={style.card} key={key}>
                            <img src={cardMobile} alt="" className={style.back}/>
                            <p className={style.title}>{title}</p>
                            <p className={style.text}>{text}</p>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <Navigation onPrev={() => swiper?.slidePrev()}
                            onNext={() => swiper?.slideNext()}
            />

            <div className={style.cardsDesktop}>
                {
                    items.map(({text, title}, key) => (
                        <div className={style.card}
                             key={key}
                        >
                            <img src={cardDesktop} alt="" className={style.back}/>
                            <p className={style.title}>{title}</p>
                            <p className={style.text}>{text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
