import Link from "next/link";
import React from "react";
import CardItem from "@/components/cards/CardItem";
import handleClickScroll from "../helper/click_handler";

const CardList = ({ cards, string }) => {
  return (
    <>
      {cards.map((card) => (
        <div className="p-6 rounded-lg shadow-md hover:bg-slate-100 hover:drop-shadow-xl dark:bg-gray-600 dark:md:hover:bg-gray-400" key={card.id}>
          <Link href={`/cards/${card.id}`} scroll={false} onClick={handleClickScroll}>
            <div className={string || "text-center"}>
              <CardItem card={card} />
              <div className="col-start-2 col-end-3 ">
                <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300">{card.name}</h3>
                {card.cashback && (
                  <div className="text-sm text-gray-900 dark:text-gray-300">
                    Cashback Rate for {card.category}: {card.cashback}%
                  </div>
                )}

                <div className="text-sm text-gray-700 dark:text-gray-300">Annual Fee: ${card.annual_fee}</div>
                <div className="text-sm text-gray-700 dark:text-gray-300">Interest Rate: {card.interest_rate}%</div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default CardList;
