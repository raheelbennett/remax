import Header from "./Header";
import Footer from "./Footer";
import SubNav from "../nav/SubNav";
import SearchBar from "../SearchBar";
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <SearchBar />
      <div className="flex">
        <SubNav />
        {children}
      </div>
    </div>
  );
};

export default Layout;
