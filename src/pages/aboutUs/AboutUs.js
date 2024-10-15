import Sponsors from "../../components/discoverSection/components/Sponsors"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Navbar from "../components/navbar/Navbar"
import "./aboutUs.scss"



const AboutUs =()=>{
    return(
        <>
            <Navbar/>
            <Header/>
            <section className="about">
                <div className="row up">
                    <div className="col-lg-4 col-md-12 right text-center text-lg-start">
                        <h1>عن ارشاد باختصار</h1>
                    </div>
                    <div className="col-lg-8 col-md-12 left">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Dolorum nemo optio iusto eligendi magni excepturi ipsa aut molestias saepe harum nesciunt, 
                            repellendus provident expedita sit reiciendis fugit eum cumque deserunt.
                        </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti recusandae
                            assumenda earum cupiditate quas cumque ullam praesentium fuga alias aliquam,
                            beatae aperiam, et odit quibusdam modi architecto laboriosam aut nisi.
                        </p>
                    </div>
                </div>
                <div className="under d-flex flex-column flex-lg-row">
                    <div className="right col-lg-4 d-flex flex-column justify-content-between align-items-center">
                        <div>
                        <img src="./images/image (3).png" alt="img" className="img-fluid" />
                        </div>
                        <div className="frame">
                        <img src="./images/Frame 170.png" alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="how py-5 col-lg-8">
                        <div className="container">
                        <h1 className="title_section text-center mb-5">لماذا تختار ارشاد و ماهي مهمتنا ؟</h1>
                        <div className="wrap">
                            <div className="g-4">
                            <div className="box d-flex flex-column flex-md-row my-5">
                                <img src="./images/Group 21.png" alt="التسجيل وتحديد الأهداف" className="img-fluid mb-3" />
                                <div className="info mx-3">
                                <h4>التسجيل وتحديد الأهداف</h4>
                                <p>
                                    ابدأ رحلتك التعليمية بتسجيل حسابك وتحديد أهدافك المهنية والشخصية. استنادًا إلى نتائج اختبار الشخصية
                                    والمسار المهني، سنساعدك في اختيار أفضل المسارات التعليمية المناسبة لك.
                                </p>
                                </div>
                            </div>

                            <div className="box d-flex flex-column flex-md-row my-5">
                                <img src="./images/Group 18.png" alt="التسجيل وتحديد الأهداف" className="img-fluid mb-3" />
                                <div className="info mx-3">
                                <h4>التسجيل وتحديد الأهداف</h4>
                                <p>
                                    ابدأ رحلتك التعليمية بتسجيل حسابك وتحديد أهدافك المهنية والشخصية. استنادًا إلى نتائج اختبار الشخصية
                                    والمسار المهني، سنساعدك في اختيار أفضل المسارات التعليمية المناسبة لك.
                                </p>
                                </div>
                            </div>

                            <div className="box d-flex flex-column flex-md-row my-5">
                                <img src="./images/Group 20.png" alt="التسجيل وتحديد الأهداف" className="img-fluid mb-3" />
                                <div className="info mx-3">
                                <h4>التسجيل وتحديد الأهداف</h4>
                                <p>
                                    ابدأ رحلتك التعليمية بتسجيل حسابك وتحديد أهدافك المهنية والشخصية. استنادًا إلى نتائج اختبار الشخصية
                                    والمسار المهني، سنساعدك في اختيار أفضل المسارات التعليمية المناسبة لك.
                                </p>
                                </div>
                            </div>

                            <div className="box d-flex flex-column flex-md-row my-5">
                                <img src="./images/Group 17.png" alt="التسجيل وتحديد الأهداف" className="img-fluid mb-3" />
                                <div className="info mx-3">
                                <h4>التسجيل وتحديد الأهداف</h4>
                                <p>
                                    ابدأ رحلتك التعليمية بتسجيل حسابك وتحديد أهدافك المهنية والشخصية. استنادًا إلى نتائج اختبار الشخصية
                                    والمسار المهني، سنساعدك في اختيار أفضل المسارات التعليمية المناسبة لك.
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

            </section>


            <Sponsors/>
            <Footer/>

        </>
    )
}


export default AboutUs;