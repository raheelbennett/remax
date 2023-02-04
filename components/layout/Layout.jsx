import Header from "./Header";
import Footer from "./Footer";
import SubNav from "../nav/SubNav";
import SearchBar from "../SearchBar";
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <SearchBar />
      <SubNav />
      {children}
    </div>
  );
};

export default Layout;
