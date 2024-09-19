/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Card from "../../components/specific/estates/Card";
import Loading from "../../components/common/Loading";

export default function EstateListing({ estates }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (estates && estates.length > 0) {
      setLoading(false);
    }
  }, [estates]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="flex flex-wrap gap-5">
        {estates.map((estate) => (
          <div key={estate.id}>
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
          </div>
        ))}
      </div>
    </div>
  );
}
