import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";

const categories = [
  {
    name: "Gas",
    slug: "gas",
  },
  {
    name: "Restaurants",
    slug: "restaurants",
  },
  {
    name: "Groceries",
    slug: "groceries",
  },
  {
    name: "Streaming",
    slug: "streaming",
  },
  {
    name: "Transit",
    slug: "transit",
  },
  {
    name: "Recurring Bills",
    slug: "recurring-bills",
  },
];
const SubNav = () => {
  //   const [categories, setCategories] = useState([]);
  //   useEffect(() => {
  //     axios.get("/api/categories/featured").then((data) => {
  //       console.log("categories data", data.data);
  //       // setCategories(data));
  //     });
  //   }, []);

  return (
    <div className="sub-nav p-2 bg-blue-200 text-black rounded-md mx-2">
      <ul className="flex justify-between">
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={`/categories/${category.name}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubNav;
