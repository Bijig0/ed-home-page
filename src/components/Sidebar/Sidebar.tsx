import { useState } from "react";

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

  return (
    <>
      <header className={`app-header app-header-1 ${headerType}`}>
        <div className="container">
          <div className="header-wrap">
            <button
              onClick={toggleOpen}
              className="button button-menu button-open-sidenav"
            >
              <span></span>
            </button>
            <div className="header-logo">
              <a href="/" className="primary-logo">
                <span className="text-1">Edu</span>
                <span className="text-2"></span>
              </a>
            </div>
          </div>
        </div>
      </header>
      <div className={`app-sidenav app-sidenav-1 ${open ? "active" : ""}`}>
        <div className="sidenav-menu">
          <div className="sidenav-head">
            <img src="assets/images/sidenav.jpg" alt="sidenav banner" />
            <button
              onClick={toggleOpen}
              className="button button-close-sidenav"
            ></button>
          </div>
          <div className="sidenav-body">
            <div className="sidenav-body-inner">
              <div className="sidenav-links">
                <a
                  href="page-login.html"
                  className="button button-md button-block button-line-primary"
                >
                  <span className="text">Book Now!</span>
                </a>
              </div>
              <ul>
                <li>
                  <a href="home.html">
                    <span className="text">Home</span>
                    <span className="icon fa fa-angle-right"></span>
                  </a>
                </li>
                <li>
                  <a href="home.html">
                    <span className="text">About</span>
                    <span className="icon fa fa-angle-right"></span>
                  </a>
                </li>
                <li>
                  <a href="home.html">
                    <span className="text">Contact Us</span>
                    <span className="icon fa fa-angle-right"></span>
                  </a>
                </li>
                <li>
                  <a href="home.html">
                    <span className="text">FAQ</span>
                    <span className="icon fa fa-angle-right"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <span className="sidenav-close"></span>
      </div>
      <span className="mega-menu-overlay"></span>
    </>
  );
};

export default Sidebar;
