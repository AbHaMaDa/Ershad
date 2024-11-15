import { useEffect, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [showButton, setShowButton] = useState(false);

  // Function to handle scroll events
  const handleScroll = () => {
    if (window.scrollY > 400) {
      setIsFixed(true);
      setShowButton(true);
    } else {
      setIsFixed(false);
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll effect
    });
  };

  // Set up the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={` nav navbar navbar-expand-lg ${isFixed ? "fixed-top" : ""}`}
      >
        <div className="container-fluid">
          <div className="logo d-flex col-lg-2">
            <a href="/">
              {" "}
              <img src="./images/logo.png" alt="logo" />
            </a>
            <h1>إرشاد</h1>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse col-lg-6"
            id="navbarSupportedContent"
          >
            <ul className="list  navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  الرئيسية
                </a>
              </li>

              {/* Dropdown Menu 1 */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown1"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  مسارات التعلم
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                  <li>
                    <a className="dropdown-item" href="#">
                      مسار Front-end developer
                    </a>
                  </li>
                  <hr className="dropdown-divider" />
                  <li>
                    <a className="dropdown-item" href="#">
                      مسار back-end developer
                    </a>
                  </li>
                  <hr className="dropdown-divider" />
                  <li>
                    <a className="dropdown-item" href="#">
                      مسار full-stack developer
                    </a>
                  </li>
                  <hr className="dropdown-divider" />
                  <li>
                    <a className="dropdown-item" href="#">
                      مسار mobile app developer
                    </a>
                  </li>
                  <hr className="dropdown-divider" />
                  <li>
                    <a className="dropdown-item" href="#">
                      مسار data-analysis
                    </a>
                  </li>
                </ul>
              </li>

              {/* Dropdown Menu 2 */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown2"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  عن الموقع
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
                  <li>
                    <Link className="dropdown-item" to="/about_us">
                      من نحن
                    </Link>
                  </li>
                  <hr className="dropdown-divider" />
                  <li>
                    <Link className="dropdown-item" to="/experts">
                      المرشدين
                    </Link>
                  </li>
                  <hr className="dropdown-divider" />
                  <li>
                    <a className="dropdown-item" href="#">
                      ما نقدمه{" "}
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  المستجدات
                </a>
              </li>
            </ul>
            <div className="signing col-lg-4 ">
              <a
                href="/register"
                className="signUp btn  d-lg-inline-block mx-2"
              >
                سجل الان
              </a>
              <a href="/login" className="signIn btn d-lg-inline-block mx-2">
                دخول
              </a>
              <a href="#profile">
                <img
                  src="./images/profile-circle.png"
                  alt="profile-logo"
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {showButton && (
        <button className="back-to-top" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </>
  );
};

export default Navbar;
