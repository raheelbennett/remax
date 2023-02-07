import Link from "next/link";
import CardItem from "../components/cards/CardItem";
import VendorItem from "../components/vendors/VendorItem";
import CardsList from "../components/cards/CardsList";
import {
  // getFeaturedCategories,
  getFeaturedCards,
  getFeaturedVendors,
} from "@/config/queries/helper";

export default function home({ featured_cards, featured_vendors, categories }) {
  return (
    <main className="flex">
      <section className="main-content">
        <h2>Featured Cards</h2>
        <div className="card-list grid grid-cols-4 gap-40 m-20">
          {featured_cards.map((card) => (
            <Link href="/cards/[id]" as={`/cards/${card.id}`} key={card.id}>
              <CardItem card={card} />
            </Link>
          ))}
        </div>

        <h2 className="mt-32">Featured Vendors</h2>
        <div className="vendor-list grid grid-cols-4 gap-40 place-items-center m-20">
          {featured_vendors.map((vendor) => (
            <Link href={vendor.relative_link} key={vendor.id}>
              <VendorItem vendor={vendor} />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export async function getServerSideProps() {
  const featured_cards = await getFeaturedCards();
  const featured_vendors = await getFeaturedVendors();
  // const categories = await getFeaturedCategories();

  return { props: { featured_cards, featured_vendors } };
}
