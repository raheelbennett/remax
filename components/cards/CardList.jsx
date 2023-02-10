import Link from "next/link";
import React from "react";
import CardItem from "@/components/cards/CardItem";

const CardList = ({ cards , string}) => {
  return (
      <>
    {cards.map((card) => (
      <div className="p-6 rounded-lg shadow-md hover:bg-slate-100" key={card.id}>
        <Link href={`/cards/${card.id}`} scroll={false}>
          <div className={string || "text-center"}>
            <CardItem card={card} />
            <div className="col-start-2 col-end-3 ">
              <h3 className="text-xl font-bold text-gray-700">{card.name}</h3>
              {card.cashback &&  <div className="text-sm text-gray-900">
                Cashback Rate for {card.category}: {card.cashback}%
              </div>}
             
              <div className="text-sm text-gray-700">Annual Fee: ${card.annual_fee}</div>
              <div className="text-sm text-gray-700">Interest Rate: {card.interest_rate}%</div>
            </div>
          </div>
        </Link>
      </div>
    ))}
    </>

  );
};

export default CardList;
