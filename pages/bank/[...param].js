import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import CardItem from "@/components/cards/CardItem";
import { getCardsByBankID, getCashbackByID } from "@/config/queries/helper";
import Cards from "../cards/[...param]";

const Bank = ({ cards, cashback }) => {
  const router = useRouter();
  const { param } = router.query;
  const rewardsArrayByCardId = (cardID) => {
    const rewardsArray = [];
    cashback.forEach((reward) => {
      let rewardsParsed = {};
      if (reward.id === cardID) {
        rewardsParsed = { category: reward.category, cashback: reward.cashback };
        rewardsArray.push(rewardsParsed);
      }
    });
    return rewardsArray;
  };
  if (param === "all") {
    return <div>All</div>;
  }
  return (
    <section className="w-1/2">
      <h2 className="text-2xl font-bold m-8">{cards[0]["bank"]}</h2>
      <div className="card-list grid grid-cols-1 gap-10 m-10">
        {cards.map((card) => (
          <div className="p-6 rounded-lg shadow-md" key={card.id}>
            <Link href="/cards/[id]" as={`/cards/${card.id}`}>
              <div className=" grid grid-cols-2">
                <CardItem card={card} />
                <div className="col-start-2 col-end-3 ">
                  <h3 className="text-xl font-bold">{card.name}</h3>
                  {rewardsArrayByCardId(card.id).map((reward) => (
                    <div key={reward.name} className="text-sm font-extrabold text-gray-900">
                      Cashback Rate for {reward.category}: {reward.cashback}%
                    </div>
                  ))}
                  <div className="text-sm text-gray-700">Annual Fee: ${card.annual_fee}</div>
                  <div className="text-sm text-gray-500">Interest Rate: {card.interest_rate}%</div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Bank;

export async function getServerSideProps({ query }) {
  const cards = await getCardsByBankID(query.param[0]);
  const cardsID = cards.map((card) => card.id);
  const cashback = await getCashbackByID(cardsID);
  return { props: { cards, cashback } };
}
