import { useEffect, useRef } from "react";
import "./whySection.scss"



const WhySection =()=>{

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
        <div className="unique-feature-container py-5 px-5" ref={sectionRef}>
            <div className="container">
                <div className="row">
                <div className=" why col-md-12 text-center mb-4">
                    <h1 className="title_section  ">لماذا تختار منصتنا؟</h1>
                    <p className="text_section unique-educational-experience-text-style lead">
                    <span>
                        تقدم منصتنا تجربة تعليمية فريدة تجمع بين التخصيص والمرونة، مما يتيح لك تحقيق أهدافك 
                    </span>
                    <br />
                    <span>
                    بكفاءة .   مع محتوى متميز، فرص العمل، ودعم متواصل، نحن هنا لنساعدك في رحلة تعلمك ونفتح أمامك أبواب النجاح.
                    </span>
                    </p>
                </div>

                <div className=" wrap feature-grid row g-4 text-center">
                    <div className="col-md-6 col-lg-3">
                        <div className="box ">
                            <img src="./images/book.png" alt="ابدأ مسارك مع مرشدك" className="img-fluid mb-3" />
                            <p className="guided-path-text-style h4">ابدأ مسارك مع مرشدك</p>
                            <p className="guided-path-text">
                            مسارات تعليمية مخصصة بناء على أهدافك وخبراتك، مع متابعة وإرشاد مستمر من خبراء في مجالك.
                            </p>
                        </div>
                    </div>


                    <div className="col-md-6 col-lg-3">
                        <div className="box ">
                            <img src="./images/task-square.png" alt="التعلم القائم على المهام" className="img-fluid mb-3" />
                            <p className="profile-creation-text h4">التعلم القائم على المهام</p>
                            <p className="task-based-learning-text-style">
                            الجمع بين التعلم والمهام الفعلية من الشركات، مما يسمح للمستخدمين بكسب المال بعد التعلم.
                            </p>
                        </div>
                    </div>


                    <div className="col-md-6 col-lg-3">
                    <div className="box">
                        <img src="./images/profile.png" alt="انشاء ملفك الشخصى" className="img-fluid mb-3" />
                        <p className="profile-creation-text h4">انشاء ملفك الشخصى تلقائى</p>
                        <p className="profile-text-arabic">
                        المساعدة على بناء مجموعة حقيقية من المهام المكتملة، مما يوفر دليلاً ملموسًا على مهاراتهم.
                        </p>
                    </div>
                    </div>

                    <div className="dd col-md-6 col-lg-3">
                    <div className=" box">
                        <img src="./images/chart-2.png" alt="فرص العمل" className="img-fluid mb-3" />
                        <p className="job-opportunity-heading h4">فرص العمل</p>
                        <p className="job-opportunity-description-style">
                        ربط الخريجين مباشرة بفرص العمل، مما يمنحهم طريقًا مباشرًا للتوظيف.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}



export default WhySection;