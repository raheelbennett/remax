import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import { Sidebar } from "flowbite-react";

const SubNav = () => {
  const [state, setState] = useState({
    categories: [],
    vendors: [],
    banks: [],
    cards: [],
  });

  useEffect(() => {
    Promise.all([
      axios.get("/api/categories"),
      axios.get("/api/vendors"),
      axios.get("/api/banks"),
      axios.get("/api/cards"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        categories: all[0].data,
        vendors: all[1].data,
        banks: all[2].data,
        cards: all[3].data,
      }));
    });
  }, []);

  return (
    <div className="w-fit font-extrabold	">
      <Sidebar aria-label="Sidebar with multi-level dropdown" className="bg-slate-200 ">
        <Sidebar.Items className="sub-nav p-8  bg-slate-200 rounded md:w-80">
          <Sidebar.ItemGroup className="">
            <Sidebar.Collapse className=" text-4xl" label="Categories">
              {state.categories.map((category) => (
                <Sidebar.Item key={category.id} href={`/categories/${category.id}`} scroll={false}>
                  {category.name}
                </Sidebar.Item>
              ))}
            </Sidebar.Collapse>
            <Sidebar.Collapse className=" text-4xl" label="Vendors">
              {state.vendors.map((vendor) => (
                <Sidebar.Item key={vendor.id} href={`${vendor.relative_link}`}>
                  {vendor.name}
                </Sidebar.Item>
              ))}
            </Sidebar.Collapse>
            <Sidebar.Collapse className=" text-4xl" label="Banks">
              {state.banks.map((bank) => (
                <Sidebar.Item key={bank.id} href={`/bank/${bank.id}`}>
                  {bank.name}
                </Sidebar.Item>
              ))}
            </Sidebar.Collapse>
            <Sidebar.Collapse className=" text-4xl" label="Cards">
              {state.cards.map((card) => (
                <Sidebar.Item key={card.id} href={`/cards/${card.id}`}>
                  {card.name}
                </Sidebar.Item>
              ))}
            </Sidebar.Collapse>
            <Sidebar.Item href="/about">About</Sidebar.Item>
            <Sidebar.Item href="/signin">Sign In</Sidebar.Item>
            <Sidebar.Item href="/register">Register</Sidebar.Item>
            <Sidebar.Item href="/">Home</Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default SubNav;
