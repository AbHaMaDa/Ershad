import { useEffect, useRef } from "react";
import "./boxes.scss"


const Boxes =()=>{
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
        <div class="boxes container"  ref={sectionRef}>
        <div class="box ">
        <img src="./images/image 48.png" alt="img" />
        <div className="highlighted highlighted1">
            <h3>Data Analysis</h3>
        </div>
        <p class="passage">
            حلل البيانات واتخذ قرارات مبنية على رؤى واضحة وكن خبيرًا في تحليل الأعمال
        </p>
        <div class="view">
        <span><a href="#view">قراءة المزيد<i class="fa-solid fa-arrow-left mx-3"></i></a></span>
        </div>
        </div>
        <div class="box  ">
        <img src="./images/Frame 145.png" alt="img" />
        <div className="highlighted highlighted2">
            <h3>Mobile Development</h3>
        </div>
        <p class="passage">
            اصنع تطبيقات مبتكرة للهواتف الذكية وكن جزءاً من العالم الرقمي المتنقل
        </p>
        <div class="view">
            <span>
                <a href="#view">قراءة المزيد<i class="fa-solid fa-arrow-left mx-3"></i></a>
            </span>
        </div>
        </div>
        <div class="box ">
        <img src="./images/image-4.png" alt="img" />
        <div className="highlighted highlighted3">
            <h3>Web Development</h3>
        </div>
        <p class="passage">
            تعلم إنشاء مواقع وتطبيقات تفاعلية وابدأ في تحويل الأفكار إلى واقع رقمي
        </p>
        <div class="view">
            <span><a href="#view">قراءة المزيد<i class="fa-solid fa-arrow-left mx-3"></i></a></span>
        </div>
        </div>
    </div>
    )
}


export default Boxes;