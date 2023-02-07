import Link from "next/link";
import CardItem from "../components/cards/CardItem";
import VendorItem from "../components/vendors/VendorItem";
import CardsList from "../components/cards/CardsList";
import {
  // getFeaturedCategories,
  getFeaturedCards,
  getFeaturedVendors,
} from "@/config/queries/helper";

// const vendors = [
//   {
//     id: 1,
//     name: "Home Depot",
//     image: "assets/img/vendor/home-depot.png",
//     link: "/vendor/home-depot",
//   },
//   {
//     id: 2,
//     name: "Amazon",
//     image: "assets/img/vendor/amazon.png",
//     link: "/vendor/amazon",
//   },
//   {
//     id: 3,
//     name: "Telus",
//     image: "assets/img/vendor/telus.png",
//     link: "/vendor/telus",
//   },
//   {
//     id: 4,
//     name: "Boston Pizza",
//     image: "assets/img/vendor/boston-pizza.png",
//     link: "/vendor/boston-pizza",
//   },
//   {
//     id: 5,

//     name: "Netflix",
//     image: "assets/img/vendor/netflix.png",
//     link: "/vendor/netflix",
//   },
//   {
//     id: 6,
//     name: "Rogers",
//     image: "assets/img/vendor/rogers.png",
//     link: "/vendor/rogers",
//   },

//   {
//     id: 7,
//     name: "The Keg",
//     image: "assets/img/vendor/the-keg.jpeg",
//     link: "/vendor/the-keg",
//   },

//   {
//     id: 8,
//     name: "McDonalds",
//     image: "assets/img/vendor/mcondalds.png",
//     link: "/vendor/mcdonalds",
//   },

//   {
//     id: 9,
//     name: "Moxies",
//     image: "assets/img/vendor/moxies.jpeg",
//     link: "/vendor/moxies",
//   },
//   {
//     id: 10,
//     name: "Disney Plus",
//     image: "assets/img/vendor/disney-plus.jpeg",
//     link: "/vendor/disney-plus",
//   },
// ];

export default function home({ featured_cards, featured_vendors, categories }) {
  return (
    <main className="flex">
      {/* <div className="sub-nav p-8 bg-slate-200 w-80 h-1/2 text-black rounded-md mx-2">
        <ul className="flex flex-col">
          {categories.map((category) => (
            <li key={category.id} className="basis-20">
              <Link
                href={`/categories/${category.id}`}
                className="font-sans font-semibold text-2xl"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div> */}
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
