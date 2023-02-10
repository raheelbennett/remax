import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Sidebar } from "flowbite-react";
import {
  MdMovieFilter,
  MdLocalGroceryStore,
  MdLocalGasStation,
  MdOutlineFastfood,
  MdOutlineHandyman,
  MdOutlineDirectionsBusFilled,
  MdLocalPharmacy,
  MdWeekend,
  MdLocalAtm,
  MdLocationCity,
  MdOutlineLogin,
  MdPersonAddAlt1,
} from "react-icons/md";
import {
  BsFillCalendarCheckFill,
  BsBank2,
  BsCreditCard2Back,
  BsInfoSquareFill,
} from "react-icons/bs";
import { HiDotsCircleHorizontal } from "react-icons/hi";
import { HiBuildingStorefront } from "react-icons/hi2";
import { BiCategory, BiHome } from "react-icons/bi";
const SubNav = () => {
  const router = useRouter();
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

  const CateIcons = {
    Entertainment: MdMovieFilter,
    Gas: MdLocalGasStation,
    Grocery: MdLocalGroceryStore,
    "Recurring Bill": BsFillCalendarCheckFill,
    Restaurants: MdOutlineFastfood,
    Transit: MdOutlineDirectionsBusFilled,
    "Drug Store": MdLocalPharmacy,
    Furniture: MdWeekend,
    "Home Improvement": MdOutlineHandyman,
    Hotel: MdLocationCity,
    Other: HiDotsCircleHorizontal,
    USD: MdLocalAtm,
  };

  return (
    <div className="">
      <Sidebar className="bg-slate-200 ">
        <Sidebar.Items className="sub-nav p-8 bg-slate-200 rounded md:w-fit">
          <Sidebar.ItemGroup className="w-80">
            <Sidebar.Collapse label={"Categories"} icon={BiCategory}>
              {state.categories.map((category, index) => (
                <Link key={category.id} href={`/categories/${category.id}`} scroll={false}>
                  <Sidebar.Item
                    icon={CateIcons[category.name]}
                    className={
                      router.asPath === `/categories/${category.id}` &&
                      "text-orange-500 leading-loose bg-slate-300"
                    }
                  >
                    {category.name}
                  </Sidebar.Item>
                </Link>
              ))}
            </Sidebar.Collapse>
            <Sidebar.Collapse icon={HiBuildingStorefront} label="Vendors">
              {state.vendors.map((vendor) => (
                <Link key={vendor.id} href={`${vendor.relative_link}`} scroll={false}>
                  <Sidebar.Item
                    icon={CateIcons[vendor.category]}
                    className={
                      router.asPath === `${vendor.relative_link}` &&
                      "text-orange-500 leading-loose bg-slate-300"
                    }
                  >
                    {vendor.name}
                  </Sidebar.Item>
                </Link>
              ))}
            </Sidebar.Collapse>
            <Sidebar.Collapse label="Banks" icon={BsBank2}>
              {state.banks.map((bank) => (
                <Link key={bank.id} href={`/bank/${bank.id}`} scroll={false}>
                  <Sidebar.Item
                    className={
                      router.asPath === `/bank/${bank.id}` &&
                      "text-orange-500 leading-loose bg-slate-300"
                    }
                  >
                    {bank.name}
                  </Sidebar.Item>
                </Link>
              ))}
            </Sidebar.Collapse>
            <Sidebar.Collapse label="Cards" icon={BsCreditCard2Back}>
              {state.cards.map((card) => (
                <Link key={card.id} href={`/cards/${card.id}`} scroll={false}>
                  <Sidebar.Item
                    className={
                      router.asPath === `/cards/${card.id}` &&
                      "text-orange-500 leading-loose bg-slate-300"
                    }
                  >
                    {card.name}
                  </Sidebar.Item>
                </Link>
              ))}
            </Sidebar.Collapse>
            <Sidebar.Item href="/about" icon={BsInfoSquareFill}>
              About
            </Sidebar.Item>
            <Sidebar.Item href="/signin" icon={MdOutlineLogin}>
              Sign In
            </Sidebar.Item>
            <Sidebar.Item href="/register" icon={MdPersonAddAlt1}>
              Register
            </Sidebar.Item>
            <Sidebar.Item href="/" icon={BiHome}>
              Home
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default SubNav;
