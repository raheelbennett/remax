// import { useRouter } from "next/router";
import { searchBanks, searchCards, searchVendors } from "@/config/queries/search";
import CardList from "@/components/cards/CardList";
import Link from "next/link";
import handleClickScroll from "@/components/helper/click_handler";
import VendorAll from "@/components/vendors/VendorAll";





export default function SearchResults({ banks, cards, vendors }) {
  console.log("search results banks", banks);
  console.log("search results cards", cards);
  console.log("search results vendors", vendors);

  return (
    <div className="">
      <h2 className="text-2xl font-bold m-8">Search Results</h2>
      <h2 className="text-2xl font-bold m-8">Banks </h2>
      { banks.length < 1 && <div className="mx-20" >No results</div>   }
      
      {banks.length > 0 &&  
      <div className="card-list grid grid-cols-3 gap-4 mx-20">
      {banks.map((bank) => (
          <div className="p-4 rounded-lg shadow-md hover:bg-slate-100 hover:drop-shadow-xl justify-around" key={bank.id}>
            <Link
                  key={bank.id}
                  href={`/bank/${bank.id}`}
                  scroll={false}
                  onClick={handleClickScroll}
                >
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-700">{bank.name}</h3>
            </div>
            </Link>
          </div>
        ))}
      </div> }

      <h2 className="text-2xl font-bold m-8">Cards</h2>
      { cards.length < 1 && <div className="mx-20">No results</div>   }

 { cards.length > 0 &&    
  <div className="card-list grid grid-cols-3 gap-4 mx-20">
    <CardList cards={cards}/>
    </div>}

      <h2 className="text-2xl font-bold m-8">Vendors</h2>
      { vendors.length < 1 && <div className="mx-20">No results</div>   }

      { vendors.length > 0 &&    
      <div className="card-list grid grid-cols-4 gap-4 mx-20">
      <VendorAll vendors={vendors}/>
      </div>}
    
    </div>
  );
}

export async function getServerSideProps({ query }) {

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
