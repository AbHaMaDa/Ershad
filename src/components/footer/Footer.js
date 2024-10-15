import "./footer.scss"




const Footer =()=>{
    return(


      
<footer className="footer footer_type_1">
  <div className="footer-middle container">
    <div className="wrap row row-cols-1 row-cols-sm-2 row-cols-lg-5">
      <div className="footer-column footer-store-info col mb-4">
        <div className="logo d-flex align-items-center">
          <a href="/">
            <img src="./images/logo.png" alt="ارشاد" className="logo__image d-block" />
          </a>
          <a href="/">
            <h1 className="ms-2">إرشاد</h1>
          </a>
        </div>
        <ul className="social-links list-unstyled d-flex mb-0">
          <li>
            <a href="#" className="footer__social-link d-block" target="_blank">
              <svg className="svg-icon svg-icon_email" width="24" height="24" viewBox="0 0 9 15" xmlns="http://www.w3.org/2000/svg">
                <use href="#icon_email" />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com" className="footer__social-link d-block" target="_blank">
              <svg className="svg-icon svg-icon_facebook" width="24" height="24" viewBox="0 0 9 15" xmlns="http://www.w3.org/2000/svg">
                <use href="#icon_facebook" />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://web.whatsapp.com" className="footer__social-link d-block" target="_blank">
              <svg className="svg-icon svg-icon_whatsapp" width="24" height="24" viewBox="0 0 9 15" xmlns="http://www.w3.org/2000/svg">
                <use href="#icon_whatsapp" />
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-column footer-menu mb-4 mb-lg-0">
        <h6 className="sub-menu__title text-uppercase">عن الموقع</h6>
        <ul className="sub-menu__list list-unstyled">
          <li className="sub-menu__item"><a href="./about.html" className="menu-link" target="_blank">من نحن</a></li>
          <li className="sub-menu__item"><a href="./about.html" className="menu-link" target="_blank">ما نقدمه</a></li>
          <li className="sub-menu__item"><a href="./about.html" className="menu-link" target="_blank">ما الجديد</a></li>
        </ul>
      </div>

      <div className="case footer-column footer-menu mb-4 mb-lg-0">
        <h6 className="sub-menu__title text-uppercase">مسارات التعلم</h6>
        <ul className="sub-menu__list list-unstyled">
          <li className="sub-menu__item"><a href="./shop2.html" className="menu-link" target="_blank">مسار Front-end developer</a></li>
          <li className="sub-menu__item"><a href="./shop3.html" className="menu-link" target="_blank">مسار Back-end developer</a></li>
          <li className="sub-menu__item"><a href="./shop4.html" className="menu-link" target="_blank">مسار Mobile App developer</a></li>
          <li className="sub-menu__item"><a href="./shop5.html" className="menu-link" target="_blank">مسار Data Analysis</a></li>
        </ul>
      </div>

      <div className="footer-column footer-menu mb-4 mb-lg-0">
        <h6 className="sub-menu__title text-uppercase">عن المنحة</h6>
        <ul className="sub-menu__list list-unstyled">
          <li className="sub-menu__item"><a href="./about.html" className="menu-link" target="_blank">تعرف على خبرائنا</a></li>
          <li className="sub-menu__item"><a href="./account_dashboard.html" className="menu-link" target="_blank">التسجيل فى المنحة</a></li>
          <li className="sub-menu__item"><a href="./store_location.html" className="menu-link" target="_blank">تواصل معنا</a></li>
        </ul>
      </div>
    </div>
  </div>

  <div className="footer-bottom container">
    <div className="d-flex align-items-center justify-content-center">
      <span className="footer-copyright">2024©Made by Ershad</span>
    </div>
  </div>
</footer>



    )
}

export default Footer