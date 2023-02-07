import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";

// const categories = [
//   {
//     name: "Gas",
//     slug: "gas",
//   },
//   {
//     name: "Restaurants",
//     slug: "restaurants",
//   },
//   {
//     name: "Groceries",
//     slug: "groceries",
//   },
//   {
//     name: "Streaming",
//     slug: "streaming",
//   },
//   {
//     name: "Transit",
//     slug: "transit",
//   },
//   {
//     name: "Recurring Bills",
//     slug: "recurring-bills",
//   },
// ];
const SubNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      const { data } = await axios.get("/api/categories/featured");
      setCategories(data.sort((a, b) => a.id - b.id));
    };
    getCategories();
  }, []);

  return (
    <div className="sub-nav p-8 bg-slate-200 w-80 h-1/2 text-black rounded-md mx-2">
      <ul className="flex flex-col">
        {categories.map((category) => (
          <li key={category.id} className="basis-20">
            <Link href={`/categories/${category.id}`} className="font-sans font-semibold text-2xl">
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubNav;
