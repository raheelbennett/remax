import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";
import SubNav from "../nav/SubNav";
import Image from "next/image";
import background from "../../public/assets/img/background.png";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <div className="dark:bg-slate-800">
      <Header />
      {router.pathname === "/" ? (
        <Image
          alt="background"
          src={background}
          quality={100}
          // width={1200}
          className=""
          priority
        />
      ) : null}

      <div id="sub-container" className="flex pt-10">
        <SubNav />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
