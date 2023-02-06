const SearchBar = () => {
  return (
    <div className="p-3 flex my-20">
      <input
        type="text"
        placeholder="Search"
        className="w-1/3 p-2 bg-slate-200 text-slate-800 m-4 mx-auto text-center rounded"
      />
    </div>
  );
};

export default SearchBar;
