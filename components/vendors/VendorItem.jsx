import Image from "next/image";
import React from "react";

const VendorItem = ({ vendor }) => {
  return (
    <div className="p-2">
      <Image
        alt={vendor.name}
        src={`/assets/img/vendor/${vendor.img_url}`}
        width={300}
        height={300}
      />
    </div>
  );
};

export default VendorItem;
