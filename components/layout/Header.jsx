import Link from "next/link";
import Image from "next/image";
const Header = () => {
  return (
    <div>
      <header className="flex justify-between bg-white text-black items-center p-2">
        <h1>
          <Link href="/">
            <Image alt="logo" src="/assets/img/logo.png" width={200} height={200} priority />
          </Link>
        </h1>
        <nav>
          <ul className="flex justify-between">
            <li className="px-2">Login</li>
            <li className="px-2">About</li>
            <li className="px-2">Register</li>
            <li className="px-2">Home</li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
