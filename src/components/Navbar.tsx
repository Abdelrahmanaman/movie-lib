import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between items-center">
        <Image className="" src={"/logo.svg"} width={120} height={120} alt="Company Logo" />
        <Link href={"/login"} className="text-primary-blue">
          Sign in
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
