import { Button } from "@mui/base";
import "./readySection.scss"
import { useEffect, useRef } from "react";

const ReadySection =()=>{




  const sectionRef = useRef(null);
      
  const handleScroll = () => {
    const section = sectionRef.current;
    if (section) {
      const { top } = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if the section is in the viewport
      if (top < windowHeight * 0.75) {
        section.classList.add('visible');
      } else {
        section.classList.remove('visible');
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



    return(
<div className="career-journey-section"  >
  <div className="container">
    <div className=" ready row " ref={sectionRef}>
      <div className="right col-12 col-lg-6 d-flex flex-column justify-content-center">
      <h1>جاهز لبدء مسيرتك المهنية؟</h1>
      <div className="links d-flex ">
            <a href="">طالب</a>
            <a href="">الخبراء</a>
        </div>
        <p>
        ابدأ مسيرتك نحو مستقبل مشرق وسجل الآن  للوصول إلى<br /> مسارات التعلم المخصصة وفرص العمل <br />
        ،لتكون جزءًا من مجتمعنا .
        </p>

        <div className="sign">
        <a className="signUp btn" href="">سجل الان</a>
        <a className="discover btn" href="">استكشف</a>
        </div>
      </div>

      <div className="col-12 col-lg-6 position-relative left d-none d-xxl-block ">
    <div className="main-content-container">
        <img className="pic1 img-fluid" src="./images/image.png" alt="picture" />
        <img className="pic2 img-fluid" src="./images/Frame 79.png" alt="picture" />
        <img className="pic3 img-fluid" src="./images/Frame 80.png" alt="picture" />
    </div>
</div>


    </div>
  </div>
</div>

    )
} 


export default ReadySection;