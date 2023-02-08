import Image from "next/image";
import React from "react";

const VendorItem = ({ vendor }) => {
  return (
    <div>
      <Image
        alt={vendor.name}
        src={`/assets/img/vendor/${vendor.img_url}`}
        className=""
        width={200}
        height={200}
      />
    </div>
  );
};

export default VendorItem;
