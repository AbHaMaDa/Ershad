import { useEffect, useRef } from "react";
import "./sponsors.scss";

const Sponsors = () => {
  const sectionRef = useRef(null);

  const handleScroll = () => {
    const section = sectionRef.current;
    if (section) {
      const { top } = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if the section is in the viewport
      if (top < windowHeight * 0.75) {
        section.classList.add("visible");
      } else {
        section.classList.remove("visible");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="  down " ref={sectionRef}>
      <div className="vertical-centered-layout container">
        <div className="horizontal-image-gallery row">
          <div className="col-6 col-sm-4 col-md-3 col-lg-2">
            <img
              src="/images/image 66.png"
              className="img-fluid image-container-cover"
            />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2">
            <img
              src="/images/image 71.png"
              className="img-fluid image-container-styled"
            />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2">
            <img
              src="/images/image 70.png"
              className="img-fluid image-container-with-border"
            />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2">
            <img
              src="/images/image 68.png"
              className="img-fluid image-container-with-borderless-images"
            />
          </div>
        </div>

        <div className="image-gallery-container row">
          <div className="col-6 col-sm-4 col-md-3 col-lg-2">
            <img
              src="/images/image 69.png"
              className="img-fluid image-container"
            />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2">
            <img
              src="/images/image 67.png"
              className="img-fluid image-container-with-border1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
