import Image from "next/image";
import React from "react";
import handleClickScroll from "@/components/helper/click_handler";
import Link from "next/link";

const BankList = ({ banks }) => {
  return (
    <>
      {banks.map((bank) => (



        <div
          className="p-4 rounded-lg shadow-lg hover:bg-slate-100 hover:drop-shadow-xl flex flex-wrap flex-col content-around justify-around"
          key={bank.id}

        >
          <Link href={`/bank/${bank.id}`} scroll={false} onClick={handleClickScroll}>
            <div className="text-center">
              <Image
                alt={bank.name}
                // src={`/assets/img/bank/bank_stock.jpg`}
                src={bank.img_url ? bank.img_url : `/assets/img/bank/bank_stock.jpg`}
                className={"mx-auto"}
                width={100}
                height={100}
              />
              <div className="col-start-2 col-end-3 ">
                <h3 className="text-xl font-bold text-gray-700">{bank.name}</h3>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default BankList;
