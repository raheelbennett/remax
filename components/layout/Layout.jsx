import Header from "./Header";
import Footer from "./Footer";
import SubNav from "../nav/SubNav";
import SearchBar from "../SearchBar";
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="flex mt-32">
        <SubNav />
        {children}
      </div>
    </div>
  );
};

export default Layout;
