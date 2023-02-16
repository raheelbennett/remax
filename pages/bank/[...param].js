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
    cards.length > 0 && (
      <section className="">
        <h2 className="text-2xl font-bold w-max mx-auto mt-2 md:mt-0 dark:text-gray-300">
          {cards[0]["bank"]}
        </h2>
        <div className="card-list grid grid-cols-1 gap-10 m-10 mx-auto p-6">
          {cards.map((card) => (
            <div
              className="p-6 rounded-lg shadow-md dark:shadow-blue-400/40 dark:bg-gray-600 dark:hover:bg-gray-400"
              key={card.id}
            >
              <Link href={`/cards/${card.id}`}>
                <div className=" grid grid-cols-2">
                  <CardItem card={card} />
                  <div className="col-start-2 col-end-3 ">
                    <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300">
                      {card.name}
                    </h3>
                    <div className="text-sm text-gray-700 dark:text-gray-300">
                      Annual Fee: ${card.annual_fee}
                    </div>
                    <div className="text-sm text-gray-700 dark:text-gray-300">
                      Interest Rate: {card.interest_rate}%
                    </div>
                    <div className="text-sm font-extrabold text-gray-900 dark:text-gray-100">
                      Cashback Rate for{" "}
                    </div>
                    {rewardsArrayByCardId(card.id).map((reward) => (
                      <div
                        key={reward.name}
                        className="text-sm font-extrabold text-gray-900 dark:text-gray-100"
                      >
                        {reward.category}: {reward.cashback}%
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    )
  );
};
export default Bank;

export async function getServerSideProps({ query }) {
  const cards = await getCardsByBankID(query.param[0]);
  const cardsID = cards.map((card) => card.id);
  const cashback = await getCashbackByID(cardsID);
  return { props: { cards, cashback } };
}
