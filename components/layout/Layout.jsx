import Header from "./Header";
import Footer from "./Footer";
import SubNav from "../nav/SubNav";
import SearchBar from "../SearchBar";
import Image from "next/image";
import background from "../../public/assets/img/background.jpg";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Image alt="background" src={background} quality={100} />
      <div className="flex mt-20">
        <SubNav />
        {children}
      </div>
    </div>
  );
};

export default Layout;
