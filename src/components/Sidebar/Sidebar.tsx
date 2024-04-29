import { useStore } from "@nanostores/react";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { HOME_LINK } from "../../globalStore";

type Props = {
  headerType: "empty" | "boxed";
};

const Sidebar = (props: Props) => {
  const { headerType } = props;

  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  console.log({ open });

  const $HOME_LINK = useStore(HOME_LINK);

  return (
    <>
      <header
        className={`app-header app-header-1 ${headerType} block-mobile-hidden-normal`}
      >
        <div className="container">
          <div className="header-wrap">
            <button
              onClick={toggleOpen}
              className="button button-menu button-open-sidenav"
            >
              <span></span>
            </button>
          </div>
        </div>
      </header>
      <div className={`app-sidenav app-sidenav-1 ${open ? "active" : ""}`}>
        <div className="sidenav-menu">
          <div className="my-12" />
          <a href="/" className="primary-logo flex items-center justify-center">
            <span className="text-1 font-primary text-[#5975f6] font-bold underline text-3xl">
              Hi Up
            </span>
            <span className="text-2"></span>
          </a>
          <div className="my-4" />
          <div className="sidenav-body">
            <div className="sidenav-body-inner">
              <div className="sidenav-links">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    toggleOpen();
                  }}
                  className="button button-md button-block button-line-primary"
                >
                  <span className="text">Book Now!</span>
                </a>
              </div>
              <ul>
                <li>
                  <a href={$HOME_LINK}>
                    <span className="text">Home</span>
                    <span className="icon fa fa-angle-right"></span>
                  </a>
                </li>
                <li>
                  <a href="page-about.html">
                    <span className="text">About</span>
                    <span className="icon fa fa-angle-right"></span>
                  </a>
                </li>
                <li>
                  <a href="page-contact.html">
                    <span className="text">Contact Us</span>
                    <span className="icon fa fa-angle-right"></span>
                  </a>
                </li>
                <li>
                  <a href="page-faq.html">
                    <span className="text">FAQ</span>
                    <span className="icon fa fa-angle-right"></span>
                  </a>
                </li>
                <div className="my-4" />
                <div className="flex justify-center mt-3">
                  <ImCross onClick={toggleOpen} width={20} height={20} />
                </div>
              </ul>
            </div>
          </div>
        </div>
        <span onClick={toggleOpen} className="sidenav-close"></span>
      </div>
      <span className="mega-menu-overlay"></span>
    </>
  );
};

export default Sidebar;
