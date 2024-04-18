import Image from "next/image"
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-5">
      <div className="flex flex-col gap-8">
        <Image src={"/logo.svg"} width={120} height={120} alt="Logo Car Hub" />
        <span className="flex flex-col gap-2 text-sm text-gray-500">
          Carhub 2024
          <span>All rights reserved</span>
        </span>
      </div>
      <div className="">
        <ul className="grid grid-cols-4 gap-x-10 gap-y-20">
          <li className="col-span-2 flex-col flex gap-4 text-gray-500 font-light">
            <span className="font-bold text-black">About</span>
            <ul className="flex flex-col gap-4 f">
              <li>
                <Link className="hover:underline hover:text-gray-600" href={"/"}>How it works</Link>
              </li>
              <li>
                <Link className="hover:underline hover:text-gray-600" href={"/"}>Featured</Link>
              </li>
              <li>
                <Link className="hover:underline hover:text-gray-600" href={"/"}>Partnership</Link>
              </li>
              <li>
                <Link className="hover:underline hover:text-gray-600" href={"/"}>Bussiness Relation</Link>
              </li>
            </ul>
          </li>
          <li className="col-span-2 flex-col flex gap-4 text-gray-500 font-light">
            <span className="font-bold text-black">Company</span>
            <ul className="flex flex-col gap-4 f">
              <li>
                <Link className="hover:underline hover:text-gray-600" href={"/"}>Events</Link>
              </li>
              <li>
                <Link className="hover:underline hover:text-gray-600" href={"/"}>Blogs</Link>
              </li>
              <li>
                <Link className="hover:underline hover:text-gray-600" href={"/"}>Podcast</Link>
              </li>
              <li>
                <Link className="hover:underline hover:text-gray-600" href={"/"}>Invite a friend</Link>
              </li>
            </ul>
          </li>
          <li className="flex-col flex gap-4 text-gray-500 font-light">
            <span className="font-bold text-black">Socials</span>
            <ul className="flex flex-col gap-4 f">
              <li>
                <Link className="hover:underline hover:text-gray-600" href={"/"}>Discord</Link>
              </li>
              <li>
                <Link className="hover:underline hover:text-gray-600" href={"/"}>Instagram</Link>
              </li>
              <li>
                <Link className="hover:underline hover:text-gray-600" href={"/"}>Twitter</Link>
              </li>
              <li>
                <Link className="hover:underline hover:text-gray-600" href={"/"}>Facebook</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer