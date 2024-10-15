import { useEffect, useRef } from "react";
import "./howSection.scss"



const HowSection = () =>{



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
        <div className="how py-5 gather" ref={sectionRef}>
      <div className="container">
        <h1 className="title_section text-center mb-5">كيف تعمل منصتنا ؟</h1>
        <div className="wrap">
          <div className="row g-4">
            <div className="box col-12 col-lg-4 text-center">
              <img src="./images/Group 4.png" alt="التسجيل وتحديد الأهداف" className="img-fluid mb-3" />
              <div className="info">
                <h4>التسجيل وتحديد الأهداف</h4>
                <p>
                  ابدأ رحلتك التعليمية بتسجيل حسابك وتحديد أهدافك المهنية والشخصية. استنادًا 
                  إلى نتائج اختبار الشخصية والمسار المهني، سنساعدك في اختيار أفضل المسارات التعليمية المناسبة لك.
                </p>
              </div>
            </div>

            <div className="box col-12 col-lg-4 text-center">
              <img src="./images/Group 4-2.png" alt="خطط التعلم المخصصة وبناء ملفك" className="img-fluid mb-3" />
              <div className="info">
                <h4>خطط التعلم المخصصة وبناء ملفك</h4>
                <p>
                  احصل على خطة تعلم مخصصة بناءً على أهدافك ومهاراتك الحالية،
                  مع إرشاد من مرشدين محترفين. ستتمكن من بناء ملفك الشخصي الذي يوضح تقدمك وخبراتك المكتسبة.
                </p>
              </div>
            </div>

            <div className="box col-12 col-lg-4 text-center">
              <img src="./images/Frame 99.png" alt="فرص عمل ودعم مستمر" className="img-fluid mb-3" />
              <div className="info">
                <h4>فرص عمل ودعم مستمر</h4>
                <p>
                  استفد من مجتمعنا ودعم المرشدين المستمر لمساعدتك على تحقيق أهدافك المهنية.
                  عند إكمال المسار التعليمي الخاص بك، سنساعدك في الوصول إلى فرص عمل تناسب مهاراتك وخبراتك.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>  

    )
}


export default HowSection;