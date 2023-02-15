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
    <div className="flex my-15 px-2">
      {/* <div className="bg-blue-700 rounded-l-lg hover:bg-blue-800 rounded-r-none"> */}
      <Dropdown label={filter} className="rounded-r-none">
        <Dropdown.Item onClick={() => setFilter("All")}>All</Dropdown.Item>
        <Dropdown.Item onClick={() => setFilter("Cards")}>Cards</Dropdown.Item>
        <Dropdown.Item onClick={() => setFilter("Vendors")}>Vendors</Dropdown.Item>
        <Dropdown.Item onClick={() => setFilter("Banks")}>Banks</Dropdown.Item>
      </Dropdown>
      {/* </div> */}
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search"
          className="p-2 bg-slate-200 text-slate-800 text-center rounded-lg"
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
