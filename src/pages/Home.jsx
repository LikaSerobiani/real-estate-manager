/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import EstateListing from "../pages/estates/EstateListing";
import useEstateStore from "../stores/useEstateStore";

export default function Home() {
  const { estates, fetchEstates } = useEstateStore();

  useEffect(() => {
    fetchEstates();
  }, [fetchEstates]);

  return (
    <div>
      <EstateListing estates={estates} />
    </div>
  );
}
