import "./header.scss";

const Header = () => {
  return (
    <div className="container-fluid expert-info-container">
      <div className="row justify-content-center">
        <div className="col-md-8 col-sm-12 expert-section text-center">
          <h1 className="expert-info-text-style">تعرف على خبراءنا</h1>
          <div className="expert-card bg-transparent   mt-3">
            <p>
              <a className="home mx-2" href="">
                الرئيسية
              </a>
              <i className="fa-solid fa-angle-left"></i>
              <a className="current mx-2" href="">
                عن الموقع
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
