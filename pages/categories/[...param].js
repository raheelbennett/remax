import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import CardItem from "@/components/cards/CardItem";
import { getCategoriesByID } from "@/config/queries/helper";

const Category = ({ categories }) => {
  const router = useRouter();
  const { param } = router.query;
  console.log(categories);
  if (param[0] === "all") {
    return <div>All</div>;
  }
  return (
    <section>
      <h2 className="text-2xl font-bold m-8">{categories[0]["category"]}</h2>
      <div className="card-list grid grid-cols-1 gap-10 m-10">
        {categories.map((card) => (
          <div className="p-6 rounded-lg shadow-md hover:bg-slate-100" key={card.id}>
            <Link href={`/cards/${card.id}`} scroll={false}>
              <div className=" grid grid-cols-2">
                <CardItem card={card} />
                <div className="col-start-2 col-end-3 ">
                  <h3 className="text-xl font-bold text-gray-700">{card.name}</h3>
                  <div className="text-sm text-gray-900">
                    Cashback Rate for {card.category}: {card.cashback}%
                  </div>
                  <div className="text-sm text-gray-700">Annual Fee: ${card.annual_fee}</div>
                  <div className="text-sm text-gray-700">Interest Rate: {card.interest_rate}%</div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;

export async function getServerSideProps({ query }) {
  const categories = await getCategoriesByID(query.param[0]);

  return { props: { categories } };
}
