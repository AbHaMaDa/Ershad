import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import "./login.scss";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="card shadow-lg p-4">
              <h3 className="text-center mb-4">سجل الدخول </h3>
              <form>
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

                <div className="d-flex justify-content-between my-5">
                  <div>
                    <input type="checkbox" id="remember" />
                    <label className="mx-3" for="remember">
                      {" "}
                      تذكرني{" "}
                    </label>
                  </div>
                  <a href="#" className="">
                    نسيت كلمة المرور ؟
                  </a>
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

                <div className="text-center mt-4 fs-5">
                  <p>
                    ليس لديك حساب؟{" "}
                    <a className="mx-3" href="#">
                      أنشئ حساب جديد
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

export default Login;
