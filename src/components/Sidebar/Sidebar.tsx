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
                <li className="has-menu">
                  <a href="#">
                    <span className="text">All Pages</span>
                    <span className="icon fa fa-angle-right"></span>
                  </a>
                  <div className="mega-menu">
                    <p className="title">Quick Access</p>
                    <ul className="sidenav-menu-ul">
                      <li>
                        <a href="page-blog.html">
                          <span className="text">Blog/News</span>
                        </a>
                      </li>
                      <li>
                        <a href="page-single-post.html">
                          <span className="text">Single Post</span>
                        </a>
                      </li>
                      <li>
                        <a href="page-cooperation.html">
                          <span className="text">Cooperation</span>
                        </a>
                      </li>
                      <li>
                        <a href="page-start.html">
                          <span className="text">Getting Started!</span>
                        </a>
                      </li>
                    </ul>
                    <p className="title">Quick Access</p>
                    <ul className="sidenav-menu-ul">
                      <li>
                        <a href="page-teacher.html">
                          <span className="text">Teacher</span>
                        </a>
                      </li>
                      <li>
                        <a href="page-teachers.html">
                          <span className="text">List of Teachers</span>
                        </a>
                      </li>
                      <li>
                        <a href="page-course.html">
                          <span className="text">Course Details</span>
                        </a>
                      </li>
                      <li>
                        <a href="page-courses.html">
                          <span className="text">List of Courses</span>
                        </a>
                      </li>
                    </ul>
                    <p className="title">Dashboard</p>
                    <ul className="sidenav-menu-ul">
                      <li>
                        <a href="teacher/dashboard.html">
                          <span className="text">Dashboard</span>
                        </a>
                      </li>
                      <li>
                        <a href="teacher/dashboard-profile.html">
                          <span className="text">Profile</span>
                        </a>
                      </li>
                      <li>
                        <a href="teacher/dashboard-skills.html">
                          <span className="text">Edit Skills</span>
                        </a>
                      </li>
                      <li>
                        <a href="teacher/dashboard-classrooms.html">
                          <span className="text">Classrooms</span>
                        </a>
                      </li>
                    </ul>
                    <p className="title">Communication</p>
                    <ul className="sidenav-menu-ul">
                      <li>
                        <a href="page-about.html">
                          <span className="text">About Us</span>
                        </a>
                      </li>
                      <li>
                        <a href="page-contact.html">
                          <span className="text">Contact Us</span>
                        </a>
                      </li>
                      <li>
                        <a href="page-faq.html">
                          <span className="text">FAQ</span>
                        </a>
                      </li>
                      <li>
                        <a href="page-policy.html">
                          <span className="text">Policy</span>
                        </a>
                      </li>
                    </ul>
                    <p className="title">Other Pages</p>
                    <ul className="sidenav-menu-ul">
                      <li>
                        <a href="page-login.html">
                          <span className="text">Sign-In</span>
                        </a>
                      </li>
                      <li>
                        <a href="page-register.html">
                          <span className="text">Sign-Up</span>
                        </a>
                      </li>
                      <li>
                        <a href="page-departements.html">
                          <span className="text">Departements</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="has-menu">
                  <a href="#">
                    <span className="text">Languages</span>
                    <span className="icon fa fa-angle-right"></span>
                  </a>
                  <div className="mega-menu">
                    <ul>
                      <li className="el-flag">
                        <div className="inner">
                          <a href="page-departements.html">
                            <img src="assets/images/flags/uk.svg" alt="alt" />
                            <h3>English</h3>
                          </a>
                        </div>
                      </li>
                      <li className="el-flag">
                        <div className="inner">
                          <a href="page-departements.html">
                            <img
                              src="assets/images/flags/germany.svg"
                              alt="alt"
                            />
                            <h3>German</h3>
                          </a>
                        </div>
                      </li>
                      <li className="el-flag">
                        <div className="inner">
                          <a href="page-departements.html">
                            <img
                              src="assets/images/flags/france.svg"
                              alt="alt"
                            />
                            <h3>French</h3>
                          </a>
                        </div>
                      </li>
                      <li className="el-flag">
                        <div className="inner">
                          <a href="page-departements.html">
                            <img
                              src="assets/images/flags/italy.svg"
                              alt="alt"
                            />
                            <h3>Italian</h3>
                          </a>
                        </div>
                      </li>
                      <li className="el-flag">
                        <div className="inner">
                          <a href="page-departements.html">
                            <img
                              src="assets/images/flags/china.svg"
                              alt="alt"
                            />
                            <h3>Chinese</h3>
                          </a>
                        </div>
                      </li>
                      <li className="el-flag">
                        <div className="inner">
                          <a href="page-departements.html">
                            <img
                              src="assets/images/flags/japan.svg"
                              alt="alt"
                            />
                            <h3>Japanese</h3>
                          </a>
                        </div>
                      </li>
                      <li className="el-flag">
                        <div className="inner">
                          <a href="page-departements.html">
                            <img
                              src="assets/images/flags/south-korea.svg"
                              alt="alt"
                            />
                            <h3>Korean</h3>
                          </a>
                        </div>
                      </li>
                      <li className="el-flag">
                        <div className="inner">
                          <a href="page-departements.html">
                            <img
                              src="assets/images/flags/russia.svg"
                              alt="alt"
                            />
                            <h3>Russian</h3>
                          </a>
                        </div>
                      </li>
                      <li className="el-flag">
                        <div className="inner">
                          <a href="page-departements.html">
                            <img
                              src="assets/images/flags/arabic.svg"
                              alt="alt"
                            />
                            <h3>Arabic</h3>
                          </a>
                        </div>
                      </li>
                      <li className="el-flag">
                        <div className="inner">
                          <a href="page-departements.html">
                            <img
                              src="assets/images/flags/turkey.svg"
                              alt="alt"
                            />
                            <h3>Turkish</h3>
                          </a>
                        </div>
                      </li>
                      <li className="el-flag">
                        <div className="inner">
                          <a href="page-departements.html">
                            <img src="assets/images/flags/iran.svg" alt="alt" />
                            <h3>Persian</h3>
                          </a>
                        </div>
                      </li>
                      <li className="el-flag">
                        <div className="inner">
                          <a href="page-departements.html">
                            <img
                              src="assets/images/flags/spain.svg"
                              alt="alt"
                            />
                            <h3>Spanish</h3>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="page-teachers.html">
                    <span className="text">Teachers</span>
                    <span className="icon fa fa-angle-right"></span>
                  </a>
                </li>
                <li>
                  <a href="page-courses.html">
                    <span className="text">Courses</span>
                    <span className="icon fa fa-angle-right"></span>
                  </a>
                </li>
                <li>
                  <a href="page-cooperation.html">
                    <span className="text">Join Now.</span>
                    <span className="icon fa fa-angle-right"></span>
                  </a>
                </li>
                <li>
                  <a href="page-start.html">
                    <span className="text">Let's get started</span>
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
