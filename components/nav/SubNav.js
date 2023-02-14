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
  GiHamburgerMenu,
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

  const [menu, setMenu] = useState("hide");

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

  useEffect(() => {
    setMenu("hide");
  }, [router]);

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
    <div className="bg-blend-darken">
      <button
        onClick={() => {
          menu === "hide" ? setMenu("show") : setMenu("hide");
        }}
        data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar"
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        className=" z-40 fixed top-20 left-0 inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <Sidebar
        className={`${menu === "hide" && "hidden"} fixed top-36 bg-blend-overlay z-20 md:contents`}
      >
        <Sidebar.Items className="sub-nav p-8 bg-slate-200 rounded md:w-fit dark:bg-gray-700 md:mr-20 ">
          <Sidebar.ItemGroup className="w-80 ">
            <Sidebar.Collapse label={"Categories"} icon={BiCategory}>
              {state.categories.map((category) => (
                <Link key={category.id} href={`/categories/${category.id}`}>
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
                <Link key={vendor.id} href={`${vendor.relative_link}`}>
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
                <Link key={bank.id} href={`/bank/${bank.id}`}>
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
                <Link key={card.id} href={`/cards/${card.id}`}>
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
