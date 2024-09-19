/* eslint-disable react/prop-types */

import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Card";

import "swiper/css";

export default function Carousel({ estates }) {
  return (
    <Swiper spaceBetween={20} slidesPerView={4}>
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
  );
}
