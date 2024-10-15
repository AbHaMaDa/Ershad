

const Footer =()=>{
    return(


<footer className="footer footer_type_1">
  <div className="footer-middle container">
    <div className="wrap row row-cols-1 row-cols-sm-2 row-cols-lg-5">
      <div className="footer-column footer-store-info col mb-4">

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

      <div className="d-flex align-items-center justify-content-center">
      <span className="footer-copyright">2024©Made by Ershad</span>
    </div>

    </div>
  </div>


</footer>

    )
}

export default Footer