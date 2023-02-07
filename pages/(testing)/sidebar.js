import React from "react";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
// import { useRouter } from 'next/router';
import { Dropdown } from "flowbite-react";

const Sidebar = () => {
  // const router = useRouter();
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
      <Dropdown label="Dropdown button">
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown>
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

export default Sidebar;
