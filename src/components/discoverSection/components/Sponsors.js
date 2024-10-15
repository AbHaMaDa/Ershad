import { useEffect, useRef } from "react";
import "./sponsors.scss"



const Sponsors =()=>{


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
        <div class="down" ref={sectionRef}>
        <div class="vertical-centered-layout container">
            <div class="horizontal-image-gallery row">
            <div class="col-6 col-sm-4 col-md-3 col-lg-2">
                <img src="/images/image 66.png" class="img-fluid image-container-cover" />
            </div>
            <div class="col-6 col-sm-4 col-md-3 col-lg-2">
                <img src="/images/image 71.png" class="img-fluid image-container-styled" />
            </div>
            <div class="col-6 col-sm-4 col-md-3 col-lg-2">
                <img src="/images/image 70.png" class="img-fluid image-container-with-border" />
            </div>
            <div class="col-6 col-sm-4 col-md-3 col-lg-2">
                <img src="/images/image 68.png" class="img-fluid image-container-with-borderless-images" />
            </div>
            </div>
            
            <div class="image-gallery-container row">
            <div class="col-6 col-sm-4 col-md-3 col-lg-2">
                <img src="/images/image 69.png" class="img-fluid image-container" />
            </div>
            <div class="col-6 col-sm-4 col-md-3 col-lg-2">
                <img src="/images/image 67.png" class="img-fluid image-container-with-border1" />
            </div>
            </div>
        </div>
    </div>
    )
}



export default Sponsors;