import "./header.scss"

const Header =()=>{
    return(
        <div class="container-fluid expert-info-container">
        <div class="row justify-content-center">
            <div class="col-md-8 col-sm-12 expert-section text-center">
                <h1 class="expert-info-text-style">تعرف على خبراءنا</h1>
                <div class="expert-card bg-transparent   mt-3">
                    <p>
                        <a class="home mx-2" href="">الرئيسية</a>
                        <i class="fa-solid fa-angle-left"></i>
                        <a class="current mx-2" href="">عن الموقع</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
}


export default Header;