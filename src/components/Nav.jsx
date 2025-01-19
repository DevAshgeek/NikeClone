import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants/";
import { useRef, useState } from "react";

const Nav = () => {
  const menuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSidebar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed padding-x bg-gradient-to-r from-white to-transparent py-8 top-0 z-20 w-full  left-0  max-sm:w-screen">
      <nav className="flex max-sm:pr-1 justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label} className="">
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-grey"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div ref={menuRef}>
          <img
            src={hamburger}
            className="lg:hidden cursor-pointer"
            alt="hamburger menu"
            width={25}
            height={25}
            onClick={handleSidebar}
          />
        </div>

        {isMenuOpen && (
          <ul
            className="fixed top-16 left-0 bg-white shadow-lg p-5 h-full max-w-[100vw] w-full rounded-lg flex flex-col items-start gap-4 lg:hidden overflow-y-auto z-10"
            onClick={() => setIsMenuOpen(false)}
          >
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-grey hover:text-coral-red"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Nav;
