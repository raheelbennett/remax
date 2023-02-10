import Header from "./Header";
import Footer from "./Footer";
import SubNav from "../nav/SubNav";
import Image from "next/image";
import background from "../../public/assets/img/background.jpg";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Image
        alt="background"
        src={background}
        quality={100}
        // width={1200}
        className=""
        priority
      />
      <div id="sub-container" className="flex pt-10">
        <SubNav />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
