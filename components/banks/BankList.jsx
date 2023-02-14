import Image from "next/image";
import React from "react";
import Link from "next/link";

const BankList = ({ banks }) => {
  return (
    <>
      {banks.map((bank) => (
        <div
          className="p-4 rounded-lg shadow-lg hover:bg-slate-100 hover:drop-shadow-xl flex flex-wrap flex-col content-around justify-around  dark:shadow-blue-400/40 dark:bg-gray-600 dark:hover:bg-gray-400"
          key={bank.id}
        >
          <Link href={`/bank/${bank.id}`}>
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
                <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300">{bank.name}</h3>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default BankList;
