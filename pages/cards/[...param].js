import React from "react";
import { useRouter } from "next/router";
import CardItem from "@/components/cards/CardItem";
import { getCashbackByID, getListingsByCardID, getCards } from "@/config/queries/helper";
import Link from "next/link";

const Cards = ({ cards, vendors, all }) => {
  const router = useRouter();
  const { param } = router.query;

  if (param[0] === "all") {
    return (
      <section>
        <h2 className="text-xl font-bold mb-4 text-center pt-3.5">All Cards</h2>
        <div className="card-list grid grid-cols-3 gap-10 m-20">
          {all.map((card) => (
            <div className="p-6 rounded-lg shadow-md" key={card.id}>
              <Link href={`/cards/${card.id}`} scroll={false}>
                <div className="">
                  <CardItem card={card} />
                  <div className="col-start-2 col-end-3 ">
                    <h3 className="text-xl font-bold">{card.name}</h3>
                    <div className="text-sm text-gray-700">Annual Fee: ${card.annual_fee}</div>
                    <div className="text-sm text-gray-600">
                      Interest Rate: {card.interest_rate}%
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    );
  }
  return (
    <section>
      <div className="card-list grid grid-cols-1 gap-10 m-10">
        <div className="p-8 rounded-lg shadow-md">
          <h2 className="p-2 lg:px-3 mx-2 text-xl font-bold text-center mb-4">
            {cards[0]["name"]}
          </h2>
          <CardItem card={cards[0]} />
          <br></br>
          <div className="font-xl text-3xl align-middle px-3 text-center mb-2"> Cashback Rates</div>
          <br></br>
          <div className="grid grid-cols-2 gap-4 text-center">
            {cards.map((card) => (
              <div className="text-sm text-gray-900 ">
                <div>{card.category}:</div>
                <div>{card.cashback}%</div>
              </div>
            ))}
          </div>
          {vendors.length > 0 && (
            <>
              <br></br>
              <div className="text-sm text-gray-900">{vendors[0].name} Eligible Purchases</div>
              <div className="text-sm text-gray-900">
                <div>{vendors[0].reward_rate}%</div>
              </div>
            </>
          )}
          <br></br>

          <Link href="https://www.google.com/">
            {/* will put cards link instead of google placeholder */}
            <div className="p-2 lg:px-4 mx-2 text-black text-center border border-solid border-black rounded ">
              Click here for more info
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export async function getServerSideProps({ query }) {
  const cards = await getCashbackByID(query.param[0]);
  const all = await getCards();
  const vendors = await getListingsByCardID(query.param[0]);
  return { props: { cards, vendors, all } };
}

export default Cards;
