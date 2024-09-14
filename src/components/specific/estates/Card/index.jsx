/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

import Tag from "../Tag";

import LocationMarker from "../../../common/Icons/LocationMarker";
import Bed from "../../../common/Icons/Bed";
import Resize from "../../../common/Icons/Resize";
import PostSign from "../../../common/Icons/PostSign";

export default function Card({
  image,
  title,
  price,
  address,
  zip_code,
  area,
  bedrooms,
}) {
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
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="h-[307px] w-full rounded-t-[14px] rounded-b-none"
        />
        <div className="absolute top-[23px] left-[23px]" style={{ zIndex: 10 }}>
          <Tag />
        </div>
      </div>
      <div
        className="h-[148px] rounded-b-[14px] rounded-t-none p-[22px] px-[25px] flex flex-col gap-5 bg-white font-firago"
        style={{
          borderWidth: "0px 1px 1px 1px",
          borderColor: "#DBDBDB",
        }}
      >
        <div className="w-[334px] h-[60px] flex flex-col gap-[6px]">
          <span className="font-bold leading-[33.6px] text-[28px] text-secondary h-[34px]">
            {price} ₾
          </span>

          <div className="flex gap-1 h-5">
            <LocationMarker />
            <span className="text-secondary text-opacity-70 text-[16px] font-normal leading-[19.2px]">
              {address}
            </span>
          </div>
        </div>
        <div className="w-[214px] h-6 flex gap-[32px] text-secondary text-opacity-70 items-center">
          <div className="w-[37px] h-[24px] flex gap-[5px] items-center">
            <Bed />
            <span className="w-2 h-[19px] font-normal text-[16px] leading-[19.2px]">
              {bedrooms}
            </span>
          </div>
          <div className="w-[59px] h-[19px] flex items-center gap-[5px]">
            <Resize />
            <div className="w-[36px] flex gap-[1px]">
              <span className="w-[30px] font-normal text-[15px] leading-[19.2px]">
                {area} მ
              </span>
              <span className="w-[5px] h-3 text-[10px] leading-3 font-normal">
                2
              </span>
            </div>
          </div>
          <div className="w-[54px] h-[19px] flex items-center gap-[5px]">
            <PostSign />
            <span className="leading-[19.2px] text-[16px] font-normal">
              {zip_code}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
