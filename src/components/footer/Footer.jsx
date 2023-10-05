import React from "react";
import styles from "./Footer.module.scss";
import stylesApp from "../App.module.scss";
import Logo from "../footer/icons/Logo.svg";
import { Location } from "./icons/location/Location";
import { Message } from "./icons/message/Message";
import { Call } from "./icons/call/Call";
import { Facebook } from "./icons/facebook/Facebook";
import { Instagram } from "./icons/instagram/Instagram";
import { Twitter } from "./icons/twitter/Twitter";
import { Linkedin } from "./icons/linkedin/LinkedIn";
import { Youtube } from "./icons/youtube/Youtube";
import { ReactComponent as PaypalIcon } from "../footer/icons/paymentMethods/paypal.svg";
import { ReactComponent as MastercardIcon } from "../footer/icons/paymentMethods/mastercard.svg";
import { ReactComponent as VisaIcon } from "../footer/icons/paymentMethods/visa.svg";
import { ReactComponent as LiqpayIcon } from "../footer/icons/paymentMethods/liqpay.svg";
import HomeIcon from "../footer/icons/mobileVersionIcons/Home.svg";
import FavoriteIcon from "../footer/icons/mobileVersionIcons/Vector.svg";
import CartIcon from "../footer/icons/mobileVersionIcons/Shop.svg";
import UserIcon from "../footer/icons/mobileVersionIcons/User.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={`${stylesApp.container}`}>
      <div className={styles.footerMobileVersion}>
        <div className={styles.mobileIconsContainer}>
          <a href="##" className={styles.mobileIcons}>
            <img src={HomeIcon} alt="Home Icon" />
          </a>
          <a href="##" className={styles.mobileIcons}>
            <img src={FavoriteIcon} alt="Favorite Icon" />
          </a>
          <a href="##" className={styles.mobileIcons}>
            <img src={CartIcon} alt="Cart Icon" />
          </a>
          <a href="##" className={styles.mobileIcons}>
            <img src={UserIcon} alt="User Icon" />
          </a>
        </div>
      </div>
      <div className={styles.footerContainer}>
        <div className={styles.footerSubscribeWrapper}>
          <div className={styles.footerSubscribeContainer}>
            <h3 className={styles.footerSubscribeHeader}>
              Дізнавайтесь першими про розпродажі і новинки!
            </h3>
            <div className={styles.footerInput}>
              <input
                type="text"
                placeholder="Введіть email"
                className={styles.emailInput}
              />
              <button type="submit" className={styles.joinBtn}>
                Підписатися
              </button>
            </div>
            <p className={styles.footerSubscribeInfo}>
              Оформляйте підписку та отримуйте найгарячіші пропозиції обраних
              товарів, знижки та інформацію про нові поставки товару.
            </p>
          </div>
        </div>
        <div className={styles.footerContacts}>
          <div className={styles.contactsContainer}>
            <div className={styles.contactsInner}>
              <ul className={styles.contactsList}>
                <li className={styles.contactsItem}>
                  <Link to="/">
                    <img src={Logo} alt="Logo" />
                  </Link>
                </li>

                <li className={styles.contactsItem}>
                  <Location />
                  <a href="##">Київ, Україна</a>
                </li>
                <li className={styles.contactsItem}>
                  <Message />
                  <a href="mailto:contact@donate.com">contact@donate.com</a>
                </li>
                <li className={styles.contactsItem}>
                  <Call />
                  <a href="tel: +38 099 999-19-99">+38 099 999-19-99</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.footerNavigationContainer}>
          <div className={styles.bottomInner}>
            <nav className={styles.bottomItem}>
              <h4 className={styles.bottomTitle}>Клієнтам</h4>
              <ul className={styles.bottomList}>
                <li className={styles.bottomListItem}>
                  <a href="##" className={styles.bottomLink}>
                    Вхід до кабінету
                  </a>
                </li>
                <li className={styles.bottomListItem}>
                  <Link to="/about-us" className={styles.bottomLink}>
                    Про нас
                  </Link>
                </li>
                <li className={styles.bottomListItem}>
                  <Link to="/delivery-payment" className={styles.bottomLink}>
                    Доставка та оплата
                  </Link>
                </li>
                <li className={styles.bottomListItem}>
                  <Link to="/returns" className={styles.bottomLink}>
                    Обмін та повернення
                  </Link>
                </li>
                <li className={styles.bottomListItem}>
                  <Link to="/contacts" className={styles.bottomLink}>
                    Контакти
                  </Link>
                </li>
              </ul>
            </nav>

            <nav className={styles.bottomItem}>
              <h4 className={styles.bottomTitle}>Інформація</h4>
              <ul className={styles.bottomList}>
                <li className={styles.bottomListItem}>
                  <Link to="/privacy-policy" className={styles.bottomLink}>
                    Політика конфіденційності
                  </Link>
                </li>
                <li className={styles.bottomListItem}>
                  <Link to="/blog" className={styles.bottomLink}>
                    Блог
                  </Link>
                </li>
                <li className={styles.bottomListItem}>
                  <Link to="/reports" className={styles.bottomLink}>
                    Звіти
                  </Link>
                </li>
              </ul>
            </nav>

            <nav className={styles.bottomItem}>
              <h4 className={styles.bottomTitle}>Категорії</h4>
              <ul className={styles.bottomList}>
                <li className={styles.bottomListItem}>
                  <a href="##" className={styles.bottomLink}>
                    Верхній одяг
                  </a>
                </li>
                <li className={styles.bottomListItem}>
                  <a href="##" className={styles.bottomLink}>
                    Взуття
                  </a>
                </li>
                <li className={styles.bottomListItem}>
                  <a href="##" className={styles.bottomLink}>
                    Комплекти форми
                  </a>
                </li>
                <li className={styles.bottomListItem}>
                  <a href="##" className={styles.bottomLink}>
                    Лоти
                  </a>
                </li>
                <li className={styles.bottomListItem}>
                  <a href="##" className={styles.bottomLink}>
                    Донати
                  </a>
                </li>
              </ul>
            </nav>
            <div className={styles.bottomItem}>
              <h4 className={styles.bottomTitle}>Соціальні мережі</h4>
              <div className={styles.bottomSocialMedia}>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.bottomSocialLink}
                >
                  <Facebook />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.bottomSocialLink}
                >
                  <Instagram />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.bottomSocialLink}
                >
                  <Twitter />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.bottomSocialLink}
                >
                  <Linkedin />
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.bottomSocialLink}
                >
                  <Youtube />
                </a>
              </div>
              <div className={styles.bottomPaymentMethods}>
                <a href="#1">
                  <PaypalIcon />
                </a>
                <a href="#1">
                  <MastercardIcon />
                </a>
                <a href="#1">
                  <VisaIcon />
                </a>
                <a href="#1">
                  <LiqpayIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className={styles.rightsReserved}>
          © 2023 GreenShop. Усі права захищені.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
