import { Dropdown } from "flowbite-react";
import { useState } from "react";
import { useRouter } from "next/router";

const SearchBar = () => {
  const router = useRouter();
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filter, setFilter] = useState("All");

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    router.push(`/search/${filter}?keyword=${searchKeyword}`);
  };

  return (
    <div className="flex my-15 px-2 rounded">
      <Dropdown label={filter} className="">
        <Dropdown.Item onClick={() => setFilter("All")}>All</Dropdown.Item>
        <Dropdown.Item onClick={() => setFilter("Cards")}>Cards</Dropdown.Item>
        <Dropdown.Item onClick={() => setFilter("Categories")}>Categories</Dropdown.Item>
        <Dropdown.Item onClick={() => setFilter("Vendors")}>Vendors</Dropdown.Item>
        <Dropdown.Item onClick={() => setFilter("Banks")}>Banks</Dropdown.Item>
      </Dropdown>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search"
          className="p-2 ml-2 bg-slate-200 text-slate-800 text-center rounded-lg"
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
