import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import ActionButton from "@/shared/ActionButton";

interface Props {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({ selectedPage, isTopOfPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";

  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
  return (
    <nav>
      <div
        className={` ${navbarBackground}  ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          {/* LEFT-SIDE */}
          <div className={`${flexBetween} w-full gap-16`}>
            <img src={Logo} alt="logo" />
            {/* RIGHT-SIDE */}

            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                {/* LINKS */}
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  >
                    Home
                  </Link>
                  <Link
                    page="About"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  >
                    About
                  </Link>
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  >
                    Benefits
                  </Link>
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  >
                    Our Classes
                  </Link>
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  >
                    Contact Us
                  </Link>
                </div>
                {/* SIGN-IN */}
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign in</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex flex-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div
            className={`${flexBetween} ml-[33%] flex flex-col text-xl gap-10`}
          >
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            >
              Home
            </Link>
            <Link
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            >
              About
            </Link>
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            >
              Benefits
            </Link>
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            >
              Our Classes
            </Link>
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
