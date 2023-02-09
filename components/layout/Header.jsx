import Link from "next/link";
import Image from "next/image";
import SearchBar from "../SearchBar";

const Header = () => {
  return (
    <div>
      <header className="flex justify-between bg-white text-black items-center p-2">
        <h1>
          <Link href="/">
            <Image alt="logo" src="/assets/img/logo.png" width={200} height={200} priority />
          </Link>
        </h1>
        <SearchBar />
      </header>
    </div>
  );
};

export default Header;
