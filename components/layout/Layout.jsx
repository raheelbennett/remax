import Header from "./Header";
import Footer from "./Footer";
import SubNav from "../nav/SubNav";
import SearchBar from "../SearchBar";
const Layout = ({ children, subNavProps }) => {
  return (
    <div>
      <Header />
      <SearchBar />
      <div className="flex">
        <SubNav subNavProps={subNavProps}/>
        {children}
      </div>
    </div>
  );
};

export default Layout;
