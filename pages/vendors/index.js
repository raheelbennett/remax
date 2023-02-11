import VendorAll from "@/components/vendors/VendorList";
import { getVendors } from "@/config/queries/helper";
import React from "react";

const Vendors = ({ vendors }) => {
  return (
    <section>
      <h2 className="text-center text-3xl  my-10">ALL VENDORS</h2>
      <div className="card-list grid gap-2 my-10 mx-20 grid-cols-4">
        <VendorAll vendors={vendors} />
      </div>
    </section>
  );
};

export default Vendors;

export async function getServerSideProps({ query }) {
  const vendors = await getVendors();

  return { props: { vendors } };
}
