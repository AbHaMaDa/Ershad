import { useEffect, useRef } from "react";
import Sponsors from "./components/Sponsors";
import "./discoverSection.scss"
import CareerPathways from "./components/CareerPathways";
import Boxes from "./components/Boxes";


const DiscoverSection =()=>{

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
        <section className="discover_section" >

            <CareerPathways/>

            <Boxes/>

            <div className="discover_self" ref={sectionRef}>
                <div className="up  row  ">
                    <div className="content col-md-8 col-sm-12  ">
                    <h1>اكتشف من أنت!</h1>
                    <div className="links d-flex ">
                        <a href="">اختبار الشخصية</a>
                        <a href="">اختبار الإنجليزى</a>
                    </div>
                    <p>
                        هل تساءلت يومًا عن صفاتك الشخصية وكيف تؤثر على إختيار<br /> وظيفتك؟<br />
                        اختبار الشخصية هو وسيلة ممتعة وشيقة لمعرفة المزيد عن نفسك. سواء كنت تبحث عن فهم أعمق لشخصيتك، أو تريد اكتشاف نقاط قوتك وضعفك، أو إختيار وظيفتك.
                    </p>
                    <button className="btn " href="">جرب الان</button> 
                    </div>
                    <div className="image col-sm-12 col-md-4 ">
                    <img src="./images/image 49.png" alt="" className="img-fluid" /> 
                    </div>
                </div>

                <Sponsors/>

            </div>

        </section>
    )
}


export default DiscoverSection;