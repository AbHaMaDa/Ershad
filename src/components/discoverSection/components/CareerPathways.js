import { useEffect, useRef } from "react";
import "./careerPathways.scss";

const CareerPathways = () => {
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
    <div className="container career-pathways-section py-5" ref={sectionRef}>
      <div className="row">
        <div className="col-12 col-md-10 col-lg-8 mx-auto text-center career-path-section">
          <h2 className="arabic-heading-bold">اكتشف مساراتنا المتنوعة</h2>
          <p className="diverse-pathways-text-style">
            سواء كنتم تبحثون عن بناء مسيرة مهنية جديدة أو تعزيز مهاراتكم
            الحالية، ستجدون لدينا الموارد والدعم اللازمين لمساعدتكم في الوصول
            إلى أهدافكم. لا تفوتوا الفرصة لتكونوا جزءًا من هذا العالم المثير!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareerPathways;
