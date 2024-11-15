import { useEffect, useState } from "react";

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
            className="collapse navbar-collapse col-lg-3"
            id="navbarSupportedContent"
          >
            <ul className="list  navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  الرئيسية
                </a>
              </li>
            </ul>
            <form className="d-flex col-12 col-lg-4">
              <input
                className="form-control me-2"
                type="search"
                placeholder="ابحث عن  ....."
                aria-label="Search"
              />
            </form>
            <div className="signing col-lg-4 my-3 mt-lg-0">
              <a
                href="/register"
                className="signUp btn  d-lg-inline-block mx-2"
              >
                سجل الان
              </a>
              <a href="/login" className="signIn btn d-lg-inline-block mx-2">
                دخول
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
