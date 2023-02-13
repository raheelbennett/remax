import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import CardItem from "@/components/cards/CardItem";
import { getCategoriesByID, getVendorsByRL, getListingsByVendor } from "@/config/queries/helper";
import VendorItem from "@/components/vendors/VendorItem";
import CardList from "@/components/cards/CardList";

const Vendor = ({ categories, vendor, listings }) => {
  const router = useRouter();
  const { param } = router.query;

  const main = listings[0];

  return (
    <section>
      <VendorItem vendor={vendor[0]} />
      <h2 className="text-xl font-bold mb-4 text-center ">{vendor[0].name}</h2>
      <div className="text-center">
        If you are shopping here, you should consider these credit cards for maximum benefits!
      </div>
      <div className="card-list grid grid-cols-1 gap-10 m-10">
        {/* only if there's listings */}
        {listings.length > 0 && (
          <div
            className="p-6 rounded-lg shadow-md bg-amber-100 hover:bg-amber-200 dark:shadow-green-500/40 dark:bg-green-600 dark:hover:bg-green-500"
            key={main.card_id}
          >
            <Link href={`/cards/${main.card_id}`}>
              <div className=" grid grid-cols-2">
                <CardItem card={main} />
                <div className="col-start-2 col-end-3 ">
                  <h3 className="text-xl font-bold text-gray-700">{main.name}</h3>
                  <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                    Highlight
                  </span>
                  <div className="text-sm text-gray-900">
                    Cashback Rate for {vendor[0].name} Eligible Items: {main.reward_rate}%
                  </div>
                  <div className="text-sm text-gray-700">Annual Fee: ${main.annual_fee}</div>
                  <div className="text-sm text-gray-700">Interest Rate: {main.interest_rate}%</div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {categories.map((card) => {
          if (listings.length < 1 || main.card_id !== card.id) {
            return <CardList key={card.id} cards={[card]} string="grid grid-cols-2" />;
          }
        })}
      </div>
    </section>
  );
};

export default Vendor;

export async function getServerSideProps({ query }) {
  const vendor = await getVendorsByRL(`/vendor/${query.param[0]}`);
  const listings = await getListingsByVendor(vendor[0].id);
  const categories = await getCategoriesByID(vendor[0].category_id);

  return { props: { categories, vendor, listings } };
}
