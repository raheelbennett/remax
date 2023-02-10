import { Dropdown } from "flowbite-react";
import { useState } from "react";
import axios from "axios";

const SearchVendorResult = ({ searchData }) => {
  return (
    <div className="my-10">
      <h3 className="text-lg font-bold">Vendors</h3>
      <ul>
        {searchData.map((vendor) => (
          <li key={vendor.id} className="my-2">
            {vendor.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
const SearchBar = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filter, setFilter] = useState("All");

  const handleSearchSubmit = async (e) => {
    e.preventDefault();

    axios.post("/api/search", {
      searchKeyword: searchKeyword
    })
    .then((res) => {
      const searchData = res.data;

      
      
      if (searchData.length === 0) {
        console.log("No data found");
      }
      
      console.log(searchData);

      if (searchData.vendors.length > 0) {
        // show vendors search results in a component
        <SearchVendorResult searchData={searchData.vendors} />;
      }
    })
  };


  

  return (
    <div className="w-fit flex my-15">
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
          className="p-2 w-fill bg-slate-200 text-slate-800 text-center rounded"
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
