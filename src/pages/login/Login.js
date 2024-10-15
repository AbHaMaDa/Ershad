import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import "./login.scss"



const Login =()=>{
    return(
        <>
        <Navbar/>
        <div class="container my-5">
            <div class="row justify-content-center">
                <div class="col-12 col-md-8 col-lg-6">
                    <div class="card shadow-lg p-4">
                        <h3 class="text-center mb-4">سجل الدخول </h3>
                        <form>
                            <div class="my-3">
                                <label for="email" class="form-label">البريد الإلكترونى</label>
                                <input type="email" class="form-control" id="email" placeholder="Enter your email" required/>
                            </div>
                            
                            <div class="my-3">
                                <label for="password" class="form-label">كلمة المرور</label>
                                <input type="password" class="form-control" id="password" placeholder="Enter your password" required/>
                            </div>

                            <div class="d-flex justify-content-between my-5">
                                <div >
                                    <input type="checkbox" id="remember" />
                                    <label className="mx-3" for="remember"> تذكرني </label>
                                </div>
                                <a href="#" class="">نسيت كلمة المرور ؟</a>
                            </div>


                            <div class="d-grid mb-3">
                                <button  type="submit" class="btn sub">تسجيل </button>
                            </div>

                            <div class="text-center my-5 d-flex justify-content-between ">
                                <span className="w-50"><hr/></span>
                                <span className="mx-5 fs-5">أو</span>
                                <span className="w-50"><hr /></span>
                            </div>



                            <div class="text-center mt-4 fs-5">
                                <p>ليس لديك حساب؟ <a className="mx-3" href="#">أنشئ حساب جديد</a></p>
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

export default Login