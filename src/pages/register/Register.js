import "./register.scss";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const Register = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="card shadow-lg p-4">
              <h3 className=" fs-2 fw-bold text-center mb-4">
                انشئ حسابك الخاص
              </h3>
              <form>
                <div className="my-3">
                  <label for="arabic_name" className="form-label">
                    الإسم بالكامل (اللغة العربية){" "}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="arabic_name"
                    placeholder="أدخل إسمك"
                    required
                  />
                </div>
                <div className="my-3">
                  <label for="email" className="form-label">
                    البريد الإلكترونى
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="feicrceremri3@gmail.com"
                    required
                  />
                </div>

                <div className="my-3">
                  <label for="password" className="form-label">
                    كلمة المرور
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>

                <div className="my-1">
                  <label for="password-check" className="form-label">
                    تاكيد كلمة المرور{" "}
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password-check"
                    placeholder="Enter your password"
                    required
                  />
                </div>

                <div className="d-flex  flex-column  justify-content-between my-5">
                  <div className="my-3">
                    <input type="checkbox" id="remember" />
                    <label className="mx-3" for="remember">
                      {" "}
                      أرسل لى عبر البريد الإلكترونى تحديثات المنصة ، والدورات
                      المتاحة واخر الأخبار{" "}
                    </label>
                  </div>
                  <div className="my-1">
                    <input type="checkbox" id="remember" />
                    <label className="mx-3" for="remember">
                      {" "}
                      بالضغط على التسجيل أنا اوافق على شروط الخدمة وسياسة
                      الخصوصية{" "}
                    </label>
                  </div>
                </div>

                <div className="d-grid mb-3">
                  <button type="submit" className="btn sub">
                    تسجيل{" "}
                  </button>
                </div>

                <div className="text-center my-5 d-flex justify-content-between ">
                  <span className="w-50">
                    <hr />
                  </span>
                  <span className="mx-5 fs-5">أو</span>
                  <span className="w-50">
                    <hr />
                  </span>
                </div>
                <div className="holder">
                  <div className="d-grid mb-2">
                    <button type="button" className="btn google">
                      <i className="fab fa-google me-2"></i> عن طريق جوجل
                    </button>
                  </div>
                  <div className="d-grid mb-2">
                    <button type="button" className="btn facebook">
                      <i className="fab fa-facebook-f me-2"></i> عن طريق فيسبوك
                    </button>
                  </div>
                </div>

                <div className="text-center mt-4 fs-5">
                  <p>
                    لديك حساب بالفعل ؟{" "}
                    <a className="mx-3" href="#">
                      تسجيل الدخول{" "}
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
