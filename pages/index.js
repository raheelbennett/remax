import Link from "next/link";
import CardItem from "../components/cards/CardItem";
import VendorItem from "../components/vendors/VendorItem";
import CardsList from "../components/cards/CardsList";


export async function getServerSideProps(context) {
  console.log('start');

    const res = await fetch('http://localhost:3000/api/vendors');
    const vendors = await res.json();
    // console.log(vendors)
    return {
      props: {
        vendors
      },
    };
}

const home = ({ vendors }) => {

  return (
    <main>
      <section className="main-content">

      <h2>Cards</h2>
        <CardsList />
        
        <h2>Vendors</h2>

        <div className="store-list grid grid-cols-4 gap-4">
          {vendors.map((vendor) => (
            <Link href={vendor.relative_link}>
              <VendorItem vendor={vendor} />
            </Link>
          ))}
        </div>

   
      </section>
    </main>
  );
};

export default home;
