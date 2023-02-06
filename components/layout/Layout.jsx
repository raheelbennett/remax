import Header from "./Header";
import Footer from "./Footer";
import SubNav from "../nav/SubNav";
import SearchBar from "../SearchBar";
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <SearchBar />
      <div>
        {/* <SubNav subNavProps={subNavProps}/> */}
        {children}
      </div>
    </div>
  );
};

export default Layout;
