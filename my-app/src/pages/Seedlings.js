import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "../css/Seedlings.css";

const Seedlings = () => {
    const faqs = [
        {
            title: "모종은 어떻게 얻을 수 있나요?",
            content: "걸어서 나온 모종은 [메인 - 상단 탐험]에서 피크민을 보내 주워올 수 있어요.\n\n탐험을 보내놓고 사용자의 위치가 변하게 되면 시간이 더 걸릴 수 있으니 주의하세요!\n(피크민의 종류와 마리수에 따라서 시간은 달라져요😉)"
        },
        {
            title: "모종 서치는 무엇인가요?",
            content: "[메인 - 나침반 버튼 - 오른쪽 레이더 버튼]\n\n 모종 서치 아이템은 매일 한 번 채워져요.\n랜덤으로 모종과 수정 아이템들을 찾아줘요!"
        },
        {
            title: "탐험은 어떻게 하나요?",
            content: "[메인 - \"n건의 탐험이 있습니다\" 버튼]\n\n 위의 버튼을 누르면 해당 위치에 있는 버섯과 지금까지 발견한 탐험들을 확인할 수 있어요.\n\n 탐험을 눌러서 피크민을 탐험에 보내보세요!"
        },
        {
            title: "이벤트 모종은 어떻게 얻나요?",
            content: "[메인 - 지도 아래 이벤트]\n\n 미션을 완료하면 랜덤하게 금모종을 얻을 수 있어요"
        },
        {
            title: "모종은 어떻게 심나요?",
            content: "[메인 - 오른쪽 하단 화분 버튼]\n\n 모종은 기본으로 최대 2개 심을 수 있고, 추가 슬롯을 사용하면 여러 개 심을 수 있어요.\n(1회용)"
        }
    ];

    return (
        <div className="seed-wrapper">
            <Swiper
                modules={[Navigation, Pagination, EffectCoverflow]}
                spaceBetween={50}
                slidesPerView={3}
                loop={true}
                navigation
                pagination={{ clickable: true }}
                effect="coverflow"
                coverflowEffect={{
                    rotate: 30,
                    slideShadows: false
                }}
                className="swiper">
                {faqs.map((faq, index) => (
                    <SwiperSlide key={index}>
                        <div className="slide-item">
                            <span>{faq.title}</span>
                            <p style={{whiteSpace: "pre-line"}}>{faq.content}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Seedlings;