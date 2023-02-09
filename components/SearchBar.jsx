import { Dropdown } from "flowbite-react";
import { useState } from "react";

const SearchBar = () => {
  const [filter, setFilter] = useState("All");

  return (
    <div className="p-3 w-max flex my-15">
      <Dropdown label={filter} className="">
        <Dropdown.Item onClick={() => setFilter("All")}>All</Dropdown.Item>
        <Dropdown.Item onClick={() => setFilter("Cards")}>Cards</Dropdown.Item>
        <Dropdown.Item onClick={() => setFilter("Categories")}>Categories</Dropdown.Item>
        <Dropdown.Item onClick={() => setFilter("Vendors")}>Vendors</Dropdown.Item>
        <Dropdown.Item onClick={() => setFilter("Banks")}>Banks</Dropdown.Item>
      </Dropdown>

      <input
        type="text"
        placeholder="Search"
        className=" p-2 w-96 bg-slate-200 text-slate-800 text-center rounded"
      />
    </div>
  );
};

export default SearchBar;
