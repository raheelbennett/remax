import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import { Sidebar } from "flowbite-react";
import { MdMovieFilter, MdLocalGroceryStore,MdLocalGasStation, MdOutlineFastfood, MdOutlineHandyman, MdOutlineDirectionsBusFilled , MdLocalPharmacy, MdWeekend, MdLocalAtm, MdLocationCity} from "react-icons/md";
import {BsFillCalendarCheckFill} from "react-icons/bs"
import { HiDotsCircleHorizontal } from "react-icons/hi"
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

  const CateIcons = [MdMovieFilter, MdLocalGasStation, MdLocalGroceryStore, BsFillCalendarCheckFill, MdOutlineFastfood, MdOutlineDirectionsBusFilled, MdLocalPharmacy,MdWeekend, MdOutlineHandyman, MdLocationCity, HiDotsCircleHorizontal, MdLocalAtm]


  return (
    <div className="w-fit font-extrabold	">
      <Sidebar aria-label="Sidebar with multi-level dropdown" className="bg-slate-200 ">
        <Sidebar.Items className="sub-nav p-8  bg-slate-200 rounded md:w-80">
          <Sidebar.ItemGroup className="">
            <Sidebar.Collapse className=" text-4xl" label={"Categories"} >
              {state.categories.map((category,index) => (
                <Sidebar.Item icon={CateIcons[index]}>
                  <Link key={category.id} href={`/categories/${category.id}`} scroll={false}>
                    {category.name}
                  </Link>
                </Sidebar.Item>
              ))}
            </Sidebar.Collapse>
            <Sidebar.Collapse className=" text-4xl" label="Vendors">
              {state.vendors.map((vendor) => (
                <Sidebar.Item>
                  <Link key={vendor.id} href={`${vendor.relative_link}`} scroll={false}>
                    {vendor.name}
                  </Link>
                </Sidebar.Item>
              ))}
            </Sidebar.Collapse>
            <Sidebar.Collapse className=" text-4xl" label="Banks">
              {state.banks.map((bank) => (
                <Sidebar.Item>
                  <Link key={bank.id} href={`/bank/${bank.id}`} scroll={false}>
                    {bank.name}
                  </Link>
                </Sidebar.Item>
              ))}
            </Sidebar.Collapse>
            <Sidebar.Collapse className=" text-4xl" label="Cards">
              {state.cards.map((card) => (
                <Sidebar.Item>
                  <Link key={card.id} href={`/cards/${card.id}`} scroll={false}>
                    {card.name}
                  </Link>
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
