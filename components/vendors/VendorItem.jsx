import Image from "next/image";
import React from "react";

const VendorItem = ({ vendor }) => {
  return (
    <div>
      <Image
        alt={vendor.name}
        src={`/assets/img/vendor/${vendor.img_url}`}
        className="mx-auto mt-2"
        width={150}
        height={150}
      />
    </div>
  );
};

export default VendorItem;
