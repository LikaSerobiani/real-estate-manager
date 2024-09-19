/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";

import Tag from "../Tag";

import LocationMarker from "../../../common/Icons/LocationMarker";
import Bed from "../../../common/Icons/Bed";
import Resize from "../../../common/Icons/Resize";
import PostSign from "../../../common/Icons/PostSign";

const LARI_SYMBOL = "\u20BE";

export default function Card({
  id,
  image,
  title,
  price,
  address,
  zip_code,
  area,
  bedrooms,
  is_rental,
}) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/estates/${id}`);
  };
  return (
    <div
      className="relative w-96 h-[455px] rounded-[14px] cursor-pointer"
      style={{
        boxShadow: "none",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "5px 5px 12px 0px #02152614";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
      }}
      onClick={handleCardClick}
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="h-[307px] w-full rounded-t-[14px] rounded-b-none"
        />
        <div className="absolute top-[23px] left-[23px]" style={{ zIndex: 10 }}>
          <Tag is_rental={is_rental} />
        </div>
      </div>
      <div
        className="h-[148px] rounded-b-[14px] rounded-t-none p-[22px] px-[25px] flex flex-col gap-5 bg-white font-firago"
        style={{
          borderWidth: "0px 1px 1px 1px",
          borderColor: "#DBDBDB",
        }}
      >
        <div className="flex flex-col gap-[6px]">
          <span className="font-bold leading-[33.6px] text-[28px] text-secondary h-[34px]">
            {price} {LARI_SYMBOL}
          </span>

          <div className="flex gap-1 items-center">
            <LocationMarker />
            <span className="text-secondary text-opacity-70 text-[16px] font-normal">
              {address}
            </span>
          </div>
        </div>
        <div className="flex gap-[32px] text-secondary text-opacity-70 items-center">
          <div className="flex gap-[5px] items-center">
            <Bed />
            <span className="font-normal text-[16px]">{bedrooms}</span>
          </div>
          <div className="flex items-center gap-[5px]">
            <Resize />
            <div className="flex gap-[1px]">
              <span className="font-normal text-[15px]">{area} მ</span>
              <span className="text-[10px] leading-3 font-normal">2</span>
            </div>
          </div>
          <div className="flex items-center gap-[5px]">
            <PostSign />
            <span className="text-[16px] font-normal">{zip_code}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
