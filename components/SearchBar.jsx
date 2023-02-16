import { Dropdown } from "flowbite-react";
import { useState } from "react";
import { useRouter } from "next/router";

const SearchBar = () => {
  const router = useRouter();
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filter, setFilter] = useState("All");

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    await router.push(`/search/${filter}?keyword=${searchKeyword}`);
    setSearchKeyword("");
  };

  return (
    <div className="flex my-15">
      <Dropdown
        label={filter}
        style={{
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
        }}
      >
        <Dropdown.Item onClick={() => setFilter("Banks")}>Banks</Dropdown.Item>
        <Dropdown.Item onClick={() => setFilter("Cards")}>Cards</Dropdown.Item>
        <Dropdown.Item onClick={() => setFilter("Vendors")}>Vendors</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={() => setFilter("All")}>All</Dropdown.Item>
      </Dropdown>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={searchKeyword}
          className="p-2 bg-slate-200 text-slate-800 text-center rounded-lg rounded-l-none"
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
