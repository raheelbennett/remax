import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import { Sidebar } from "flowbite-react";

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
    <div className="w-fit font-extrabold	">
      <Sidebar aria-label="Sidebar with multi-level dropdown" className="bg-slate-200 ">
        <Sidebar.Items className="sub-nav p-8  bg-slate-200 w-80 rounded">
          <Sidebar.ItemGroup className="">
            <Sidebar.Collapse className=" text-4xl" label="Categories">
              {categories.map((category) => (
                <Sidebar.Item key={category.id} href={`/categories/${category.id}`}>
                  {category.name}
                </Sidebar.Item>
              ))}
            </Sidebar.Collapse>
            <Sidebar.Collapse className=" text-4xl" label="Vendors">
              <Sidebar.Item href="#">Products</Sidebar.Item>
            </Sidebar.Collapse>
            <Sidebar.Collapse className=" text-4xl" label="Banks">
              <Sidebar.Item href="#">Products</Sidebar.Item>
            </Sidebar.Collapse>
            <Sidebar.Collapse className=" text-4xl" label="Cards">
              <Sidebar.Item href="#">Products</Sidebar.Item>
            </Sidebar.Collapse>
            <Sidebar.Item href="#">Inbox</Sidebar.Item>
            <Sidebar.Item href="#">Users</Sidebar.Item>
            <Sidebar.Item href="#">Products</Sidebar.Item>
            <Sidebar.Item href="#">Sign In</Sidebar.Item>
            <Sidebar.Item href="#">Sign Up</Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default SubNav;
