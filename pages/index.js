import Link from "next/link";
import CardItem from "../components/cards/CardItem";
import VendorItem from "../components/vendors/VendorItem";
import CardsList from "../components/cards/CardsList";

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

export default function home({ featured_cards, featured_vendors }) {
  return (
    <main>
      <section className="main-content">
        <h2>Cards</h2>
        <div className="card-list grid grid-cols-4 gap-40">
          {featured_cards.map((card) => (
            <Link href="/cards/[id]" as={`/cards/${card.id}`}>
              <CardItem card={card} key={card.id} />
            </Link>
          ))}
        </div>

        <h2>Vendors</h2>

        <div className="vendor-list grid grid-cols-4 gap-40">
          {featured_vendors.map((vendor) => (
            <Link href={vendor.relative_link}>
              <VendorItem vendor={vendor} key={vendor.id} />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export async function getServerSideProps() {
  const data1 = await fetch("http://localhost:3000/api/cards/featured");
  const featured_cards = await data1.json();

  const data2 = await fetch("http://localhost:3000/api/vendors/featured");
  const featured_vendors = await data2.json();

  // Pass data to the page via props
  return { props: { featured_cards, featured_vendors } };
}
