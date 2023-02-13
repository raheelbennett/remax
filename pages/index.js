import Link from "next/link";
import CardItem from "../components/cards/CardItem";
import VendorItem from "../components/vendors/VendorItem";
import { getFeaturedCards, getFeaturedVendors } from "@/config/queries/helper";

export default function home({ featured_cards, featured_vendors }) {
  return (
    <main className="">
      <section className="border-b-8 dark:border-gray-500">
        <h2 className="text-center md:text-3xl md:font-semibold dark:text-gray-300">
          DISCOVER CASHBACK REWARDS WITH YOUR CREDIT CARDS
        </h2>

        <div className="card-list grid grid-cols-2 gap-8 my-10 md:grid-cols-4 ">
          {featured_cards.map((card) => (
            <Link href={`/cards/${card.id}`} key={card.id} className="w-fit m-4">
              <CardItem card={card} />
            </Link>
          ))}
        </div>
        <Link href="/cards/all">
          <p className="text-base font-medium text-right italic dark:text-remax">View All Cards</p>
        </Link>
      </section>
      <section className="border-b-8 dark:border-gray-500">
        <h2 className="mt-20 text-center italic md:text-2xl dark:text-gray-300">
          ENJOY MOVIES, TRAVEL, SHOPPING, DINING, GROCERIES, AND MORE
        </h2>
        <div className="vendor-list grid grid-cols-2 gap-8 place-items-center md:grid-cols-4">
          {featured_vendors.map((vendor) => (
            <Link href={vendor.relative_link} key={vendor.id} className="w-fit m-4">
              <VendorItem vendor={vendor} />
            </Link>
          ))}
        </div>
        <Link href="/vendors">
          <p className="text-base font-medium text-right italic dark:text-remax ">
            View All Vendors
          </p>
        </Link>
      </section>
    </main>
  );
}

export async function getServerSideProps() {
  const featured_cards = await getFeaturedCards();
  const featured_vendors = await getFeaturedVendors();

  return { props: { featured_cards, featured_vendors } };
}
