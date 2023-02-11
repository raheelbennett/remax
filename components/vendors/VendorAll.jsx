import Image from "next/image";
import React from "react";
import handleClickScroll from "@/components/helper/click_handler";
import Link from "next/link";


const VendorAll = ({ vendors }) => {
  return (
    <>
    {vendors.map((vendor) => (
      <div className="p-4 rounded-lg shadow-lg hover:bg-slate-100 hover:drop-shadow-xl flex flex-wrap flex-col content-around justify-around" key={vendor.id}>
      <Link href={`/vendors/${vendor.id}`} scroll={false} onClick={handleClickScroll}>
        <div className="text-center">
        <Image
              alt={vendor.name}
            src={`/assets/img/vendor/${vendor.img_url}`}
            className={"mx-auto"}
            width={100}
            height={100}
            />
          <div className="col-start-2 col-end-3 ">
            <h3 className="text-xl font-bold text-gray-700">{vendor.name}</h3>
          </div>
        </div>
      </Link>
    </div>
    ))}
  </>
  );
};

export default VendorAll;