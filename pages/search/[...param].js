import { useRouter } from "next/router";
import { searchBanks, searchCards, searchVendors } from "@/config/queries/search";
import CardList from "@/components/cards/CardList";
import Link from "next/link";
import handleClickScroll from "@/components/helper/click_handler";
import VendorList from "@/components/vendors/VendorList";
import BankList from "@/components/banks/BankList";

export default function SearchResults({ banks, cards, vendors }) {
  const router = useRouter();
  const { param } = router.query;
  const filter = param[0];

  const cardResults = () => {
    if (filter === "All" || filter === "Cards") {
      return (
        <section>
          <h2 className="text-2xl font-bold m-8">Cards</h2>
          {cards.length == 1 ? <h3 className="m-8">Found {cards.length} result</h3>: <h3 className="m-8">Found {cards.length} results</h3>}
          <div className="card-list grid grid-cols-3 gap-4 mx-20">
            <CardList cards={cards} />
          </div>
        </section>
      );
    }
  };
  const vendorResults = () => {
    if (filter === "All" || filter === "Vendors") {
      return (
        <section>
          <h2 className="text-2xl font-bold m-8">Vendors</h2>
          {vendors.length == 1 ? <h3 className="m-8">Found {vendors.length} result</h3>: <h3 className="m-8">Found {vendors.length} results</h3>}
          <div className="card-list grid grid-cols-4 gap-4 mx-20">
            <VendorList vendors={vendors} />
          </div>
        </section>
      );
    }
  };
  const bankResults = () => {
    if (filter === "All" || filter === "Banks") {
      return (
        <section>
          <h2 className="text-2xl font-bold m-8">Banks</h2>
          {banks.length == 1 ? <h3 className="m-8">Found {banks.length} result</h3>: <h3 className="m-8">Found {banks.length} results</h3>}
          <div className="card-list grid grid-cols-4 gap-4 mx-20">
            <BankList banks={banks} />
          </div>
        </section>
      );
    }
  };

  return (
    <div className="">
      <h1 className="text-3xl font-bold m-8">Search Results</h1>

      {cardResults()}
      {vendorResults()}
      {bankResults()}
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const banks = await searchBanks(query.keyword);
  const cards = await searchCards(query.keyword);
  const vendors = await searchVendors(query.keyword);

  return { props: { banks, cards, vendors } };
}
