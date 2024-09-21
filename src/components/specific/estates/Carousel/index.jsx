/* eslint-disable react/prop-types */

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Card from "../Card";
import LeftArrow from "../../../common/Icons/LeftArrow";
import RightArrow from "../../../common/Icons/RightArrow";
import "swiper/css";

const SPACE_BETWEEN = 20;
const SLIDES_PER_VIEW = 4;

export default function Carousel({ estates }) {
  return (
    <div className="relative">
      <div className="swiper-button image-swiper-button-prev absolute left-[-64px] top-[200px]">
        <LeftArrow />
      </div>
      <div className="swiper-button image-swiper-button-next absolute right-[-64px] top-[200px]">
        <RightArrow />
      </div>
      <Swiper
        spaceBetween={SPACE_BETWEEN}
        slidesPerView={SLIDES_PER_VIEW}
        navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
          disabledClass: "swiper-button-disabled",
        }}
        modules={[Navigation]}
      >
        {estates.map((estate) => (
          <SwiperSlide key={estate.id}>
            <Card
              id={estate.id}
              image={estate.image}
              title={estate.title}
              price={estate.price}
              address={estate.address}
              zip_code={estate.zip_code}
              area={estate.area}
              bedrooms={estate.bedrooms}
              is_rental={estate.is_rental}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
