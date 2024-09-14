/* eslint-disable no-unused-vars */
import React from "react";
import Logo from "../../assets/images/logo.png";

export default function Header() {
  return (
    <header className="container h-[100px] px-[162px] py-[38px] bg-[#FFFFFF] gap-[10px] border border-[#DBDBDB]">
      <img src={Logo} alt="Logo" />
    </header>
  );
}
