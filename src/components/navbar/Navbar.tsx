import { PiDesktopLight } from "react-icons/pi";
import DropdownMenu from "./Dropdown";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <nav className=" bg-custom z-50 text-white sticky top-0">
        <section className="flex justify-between px-32 py-3 items-center">
          <Link href={"/"}>
            <div className="flex items-center">
              <p className="text-6xl font-bold">
                <PiDesktopLight />
              </p>
              <h3 className="text-3xl font-bold">PC BUILDER</h3>
            </div>{" "}
          </Link>
          <div className="flex gap-16 items-center">
            <div>
              <DropdownMenu />
            </div>
            <Link href={"/pcbuilder"}>
              <button className="bg-white text-[#0C356A] px-3 py-2 rounded-lg font-bold text-xl">
                PC BUILDER
              </button>
            </Link>
          </div>
          <div>
            <button className="bg-white text-[#0C356A] px-3 py-2 rounded-lg font-bold text-xl">
              Sign in
            </button>
          </div>
        </section>
      </nav>
    </>
  );
};

export default Navbar;
