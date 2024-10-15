import "./register.scss"
import Footer from "../login/components/footer/Footer"
import Navbar from "../login/components/navbar/Navbar"

const Register =()=>{
    return(
        <>
            <Navbar/>
            <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-12 col-md-8 col-lg-6">
                <div class="card shadow-lg p-4">
                    <h3 class=" fs-2 fw-bold text-center mb-4">انشئ حسابك الخاص</h3>
                    <form>
                            <div class="my-3">
                                <label for="arabic_name" class="form-label">الإسم بالكامل (اللغة العربية) </label>
                                <input type="text" class="form-control" id="arabic_name" placeholder="Enter your name" required/>
                            </div>
                            <div class="my-3">
                                <label for="email" class="form-label">البريد الإلكترونى</label>
                                <input type="email" class="form-control" id="email" placeholder="Enter your email" required/>
                            </div>
                            
                            <div class="my-3">
                                <label for="password" class="form-label">كلمة المرور</label>
                                <input type="password" class="form-control" id="password" placeholder="Enter your password" required/>
                            </div>

                            <div class="my-1">
                                <label for="password-check" class="form-label">تاكيد كلمة المرور </label>
                                <input type="password" class="form-control" id="password-check" placeholder="Enter your password" required/>
                            </div>

                            <div class="d-flex  flex-column  justify-content-between my-5">
                                <div className="my-3">
                                    <input type="checkbox" id="remember" />
                                    <label className="mx-3" for="remember"> أرسل لى عبر البريد الإلكترونى تحديثات المنصة ، والدورات المتاحة واخر الأخبار  </label>
                                </div>
                                <div className="my-1" >
                                    <input type="checkbox" id="remember" />
                                    <label className="mx-3" for="remember"> بالضغط على التسجيل أنا اوافق على شروط الخدمة وسياسة الخصوصية  </label>
                                </div>
                            </div>


                            <div class="d-grid mb-3">
                                <button  type="submit" class="btn sub">تسجيل </button>
                            </div>

                            <div class="text-center my-5 d-flex justify-content-between ">
                                <span className="w-50"><hr/></span>
                                <span className="mx-5 fs-5">أو</span>
                                <span className="w-50"><hr /></span>
                            </div>
                            <div className="holder">
                            <div class="d-grid mb-2">
                                <button type="button" class="btn google">
                                    <i class="fab fa-google me-2"></i> عن طريق جوجل 
                                </button>
                            </div>
                            <div class="d-grid mb-2">
                                <button type="button" class="btn facebook">
                                    <i class="fab fa-facebook-f me-2"></i> عن طريق فيسبوك 
                                </button>
                            </div>
                        </div>



                            <div class="text-center mt-4 fs-5">
                                <p>لديك حساب بالفعل ؟ <a className="mx-3" href="#">تسجيل الدخول </a></p>
                            </div>
                        </form>

                </div>
            </div>
        </div>
            </div>
            <Footer/>

        </>
    )
}


export default Register