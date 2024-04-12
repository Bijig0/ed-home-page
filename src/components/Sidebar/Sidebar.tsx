const Sidebar = () => {
  return (
    <>
      <div className="app-sidenav app-sidenav-1">
        <div className="sidenav-menu">
          <div className="sidenav-head">
            <img src="assets/images/sidenav.jpg" alt="sidenav banner" />
            <button className="button button-close-sidenav"></button>
          </div>
          <div className="sidenav-body">
            <div className="sidenav-body-inner">
              <div className="sidenav-links">
                <a
                  href="page-login.html"
                  className="button button-md button-block button-line-primary"
                >
                  <span className="text">Sign In</span>
                </a>
                <a
                  href="page-register.html"
                  className="button button-md button-block button-primary"
                >
                  <span className="text">Sign Up</span>
                </a>
              </div>
              <ul>
                <li>
                  <a href="home.html">
                    <span className="text">Home</span>
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
