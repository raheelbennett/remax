import Image from "next/image";
import React from "react";
import Link from "next/link";

const VendorList = ({ vendors }) => {
  return (
    <>
      {vendors.map((vendor) => (
        <div
          className="dark:shadow-blue-400/40 dark:bg-gray-600 dark:hover:bg-gray-400 p-4 rounded-lg shadow-lg hover:bg-slate-100 hover:drop-shadow-xl flex flex-wrap flex-col content-around justify-around"
          key={vendor.id}
        >
          <Link href={`${vendor.relative_link}`}>
            <div className="text-center">
              <Image
                alt={vendor.name}
                src={`/assets/img/vendor/${vendor.img_url}`}
                className={"mx-auto"}
                width={100}
                height={100}
              />
              <div className="col-start-2 col-end-3 ">
                <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300">{vendor.name}</h3>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default VendorList;
