import React from 'react';
import { useRouter } from "next/router";
import CardItem from "@/components/cards/CardItem";
import { getCashbackByID, getListingsByCardID } from "@/config/queries/helper";

const Cards = ({ cards, vendors }) => {
  const router = useRouter();
  const { param } = router.query;
console.log("does it", vendors);
  if (param === "all") {
    return <div>All</div>;
  }
  return (
    <section>
      <div className="card-list grid grid-cols-1 gap-10 m-10">
        <div className="p-6 rounded-lg shadow-md" >
      <h2 className="text-xl font-bold mb-4">{cards[0]["name"]}</h2>
        <CardItem card={cards[0]} />
        <div className="grid grid-cols-2 gap-5">
        <div className="font-xl text-3xl align-middle mb-2">
            Cashback Rates 
          </div>
         <br></br>
          {cards.map((card) => (
          <div className="text-sm text-gray-900">
            <div>{card.category}:</div> 
              <div>{card.cashback}%</div>
            </div>
          ))}
        </div>
        {
        vendors.length > 0 &&   
        <>
        <br></br>
        <div className="text-sm text-gray-900">
            {vendors[0].name} Eligible Purchases
          </div>
           <div className="text-sm text-gray-900">
           <div>{vendors[0].reward_rate}%</div> 
        </div>
           </>
          }
      
      </div>
      </div>

    </section>
  );

};



export async function getServerSideProps({ query }) {
  const cards = await getCashbackByID(query.param[0]);
  const vendors = await getListingsByCardID(query.param[0])
  return { props: { cards, vendors } };
}

export default Cards;