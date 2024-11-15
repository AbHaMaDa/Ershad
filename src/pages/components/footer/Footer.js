import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="footer footer_type_1">
      <div className="footer-middle container">
        <div className="wrap row row-cols-1 row-cols-sm-2 row-cols-lg-5">
          <div className="footer-column footer-store-info col mb-4">
            <ul className="social-links list-unstyled d-flex mb-0">
              <li>
                <a href="#" className="footer__social-link" target="_blank">
                  <CiMail />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com"
                  className="footer__social-link"
                  target="_blank"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  href="https://web.whatsapp.com"
                  className="footer__social-link"
                  target="_blank"
                >
                  <FaWhatsapp />
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
  );
};

export default Footer;
