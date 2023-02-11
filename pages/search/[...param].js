// import { useRouter } from "next/router";
import { searchBanks, searchCards, searchVendors } from "@/config/queries/search";

export default function SearchResults({ banks, cards, vendors }) {
  console.log("search results banks", banks);
  console.log("search results cards", cards);
  console.log("search results vendors", vendors);

  return (
    <div className="">
      <h2 className="text-2xl font-bold m-8">Search Results</h2>
      <h2 className="text-2xl font-bold m-8">Banks </h2>
      {banks.map((bank) => (
        <div key={bank.id} className="my-2">
          {bank.name}
        </div>
      ))}
      <h2 className="text-2xl font-bold m-8">Cards</h2>
      {cards.map((card) => (
        <li key={card.id} className="my-2">
          {card.name}
        </li>
      ))}
      <h2 className="text-2xl font-bold m-8">Vendors</h2>
      {vendors.map((vendor) => (
        <li key={vendor.id} className="my-2">
          {vendor.name}
        </li>
      ))}
    </div>
  );
}

export async function getServerSideProps({ query }) {
  // const router = useRouter();
  console.log("query params", query);

  const banks = await searchBanks(query.param[0]);
  const cards = await searchCards(query.param[0]);
  const vendors = await searchVendors(query.param[0]);

  return { props: { banks, cards, vendors } };
}
//user enters serach keywork. in components/SearchBar.js
//keyword is passed as a url through router.push(`/serach/${keyword}`)
//using dynamic routing we access the keyword as {param} in pages/search/[...param].js
//we use serverSideProps to make api call to get results and pass as props to SearchResults wihtin pages/search/[...param].js
//results are displayed
