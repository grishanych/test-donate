import React from "react";
import styles from "./Footer.module.scss";
import Logo from "../../images/footer/Logo.svg";
import paypal from "../../images/footer/paypal.png";
import mastercard from "../../images/footer/mastercard.png";
import visa from "../../images/footer/visa.png";
import liqpay from "../../images/footer/liqpay.png";
import HomeIcon from "../../images/footer/Home.svg";
import FavoriteIcon from "../../images/footer/Vector.svg";
import CartIcon from "../../images/footer/Shop.svg";
import UserIcon from "../../images/footer/User.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
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
                  <a href="##">
                    <img src={Logo} alt="Logo" />
                  </a>
                </li>

                <li className={styles.contactsItem}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.0918 8.92531C12.0918 7.77425 11.1591 6.84155 10.0081 6.84155C8.85787 6.84155 7.92517 7.77425 7.92517 8.92531C7.92517 10.0755 8.85787 11.0082 10.0081 11.0082C11.1591 11.0082 12.0918 10.0755 12.0918 8.92531Z"
                      stroke="#46A358"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.99959 17.5C7.58457 17.5 3.75 13.2989 3.75 8.8322C3.75 5.33539 6.54758 2.5 9.99959 2.5C13.4516 2.5 16.25 5.33539 16.25 8.8322C16.25 13.2989 12.4154 17.5 9.99959 17.5Z"
                      stroke="#46A358"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <a href="##">Київ, Україна</a>
                </li>
                <li className={styles.contactsItem}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.6208 7.51587C14.6208 7.51587 11.9457 10.7264 9.98919 10.7264C8.03347 10.7264 5.32837 7.51587 5.32837 7.51587"
                      stroke="#46A358"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.0434 9.97404C2.0434 4.27562 4.02753 2.37671 9.97991 2.37671C15.9323 2.37671 17.9164 4.27562 17.9164 9.97404C17.9164 15.6716 15.9323 17.5714 9.97991 17.5714C4.02753 17.5714 2.0434 15.6716 2.0434 9.97404Z"
                      stroke="#46A358"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <a href="mailto:contact@donate.com">contact@donate.com</a>
                </li>
                <li className={styles.contactsItem}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9604 2.29175C15.0446 2.63425 17.4813 5.06758 17.8279 8.15175"
                      stroke="#46A358"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.9604 5.24414C13.4363 5.53081 14.5896 6.68497 14.8771 8.16081"
                      stroke="#46A358"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.41708 13.5825C0.668758 7.83352 1.48616 5.20096 2.09213 4.35263C2.16997 4.21552 4.08873 1.34323 6.1455 3.02839C11.2507 7.23288 4.78759 6.63843 9.0745 10.9261C13.3623 15.2128 12.7669 8.74996 16.9716 13.8541C18.6568 15.9117 15.7844 17.8303 15.6482 17.9073C14.7998 18.5141 12.1663 19.3315 6.41708 13.5825Z"
                      stroke="#46A358"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

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
                  <a href="##" className={styles.bottomLink}>
                    Про нас
                  </a>
                </li>
                <li className={styles.bottomListItem}>
                  <a href="##" className={styles.bottomLink}>
                    Доставка та оплата
                  </a>
                </li>
                <li className={styles.bottomListItem}>
                  <a href="##" className={styles.bottomLink}>
                    Обмін та повернення
                  </a>
                </li>
                <li className={styles.bottomListItem}>
                  <a href="##" className={styles.bottomLink}>
                    Контакти
                  </a>
                </li>
              </ul>
            </nav>

            <nav className={styles.bottomItem}>
              <h4 className={styles.bottomTitle}>Інформація</h4>
              <ul className={styles.bottomList}>
                <li className={styles.bottomListItem}>
                  <a href="##" className={styles.bottomLink}>
                    Політика конфіденційності
                  </a>
                </li>
                <li className={styles.bottomListItem}>
                  <a href="##" className={styles.bottomLink}>
                    Блог
                  </a>
                </li>
                <li className={styles.bottomListItem}>
                  <a href="##" className={styles.bottomLink}>
                    Новини
                  </a>
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
                  <svg
                    width="8"
                    height="16"
                    viewBox="0 0 8 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5.33333H0V8H2V16H5.33333V8H7.73333L8 5.33333H5.33333V4.2C5.33333 3.6 5.46667 3.33333 6.06667 3.33333H8V0H5.46667C3.06667 0 2 1.06667 2 3.06667V5.33333Z"
                      fill="#46A358"
                      fillOpacity="0.6"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.bottomSocialLink}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 1.46667C10.1333 1.46667 10.4 1.46667 11.2667 1.53333C13.4667 1.6 14.4667 2.66667 14.5333 4.8C14.6 5.66667 14.6 5.86667 14.6 8C14.6 10.1333 14.6 10.4 14.5333 11.2C14.4667 13.3333 13.4 14.4 11.2667 14.4667C10.4 14.5333 10.2 14.5333 8 14.5333C5.86667 14.5333 5.6 14.5333 4.8 14.4667C2.6 14.4 1.6 13.3333 1.53333 11.2C1.46667 10.3333 1.46667 10.1333 1.46667 8C1.46667 5.86667 1.46667 5.6 1.53333 4.8C1.6 2.66667 2.66667 1.6 4.8 1.53333C5.6 1.46667 5.86667 1.46667 8 1.46667ZM8 0C5.8 0 5.53333 0 4.73333 0.0666667C1.8 0.2 0.2 1.8 0.0666667 4.73333C0 5.53333 0 5.8 0 8C0 10.2 0 10.4667 0.0666667 11.2667C0.2 14.2 1.8 15.8 4.73333 15.9333C5.53333 16 5.8 16 8 16C10.2 16 10.4667 16 11.2667 15.9333C14.2 15.8 15.8 14.2 15.9333 11.2667C16 10.4667 16 10.2 16 8C16 5.8 16 5.53333 15.9333 4.73333C15.8 1.8 14.2 0.2 11.2667 0.0666667C10.4667 0 10.2 0 8 0ZM8 3.86667C5.73333 3.86667 3.86667 5.73333 3.86667 8C3.86667 10.2667 5.73333 12.1333 8 12.1333C10.2667 12.1333 12.1333 10.2667 12.1333 8C12.1333 5.73333 10.2667 3.86667 8 3.86667ZM8 10.6667C6.53333 10.6667 5.33333 9.46667 5.33333 8C5.33333 6.53333 6.53333 5.33333 8 5.33333C9.46667 5.33333 10.6667 6.53333 10.6667 8C10.6667 9.46667 9.46667 10.6667 8 10.6667ZM12.2667 2.8C11.7333 2.8 11.3333 3.2 11.3333 3.73333C11.3333 4.26667 11.7333 4.66667 12.2667 4.66667C12.8 4.66667 13.2 4.26667 13.2 3.73333C13.2 3.2 12.8 2.8 12.2667 2.8Z"
                      fill="#46A358"
                      fillOpacity="0.6"
                    />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.bottomSocialLink}
                >
                  <svg
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.03186 13.0036C11.0699 13.0036 14.3718 8.00118 14.3718 3.66357C14.3718 3.52144 14.3689 3.38005 14.3624 3.2392C15.0033 2.77588 15.5605 2.19756 16 1.53953C15.4118 1.80085 14.7789 1.97682 14.1149 2.05616C14.7926 1.64981 15.313 1.0067 15.5585 0.24021C14.9241 0.616357 14.2217 0.889688 13.4742 1.03709C12.8749 0.399076 12.0218 0 11.0779 0C9.26483 0 7.79464 1.4702 7.79464 3.28233C7.79464 3.54001 7.82357 3.79041 7.87962 4.0308C5.1516 3.89377 2.73239 2.58735 1.11352 0.601253C0.831273 1.08622 0.668767 1.64999 0.668767 2.25106C0.668767 3.38988 1.24837 4.3953 2.12968 4.98363C1.59121 4.96707 1.08531 4.81894 0.642926 4.57291C0.642198 4.58656 0.642198 4.60039 0.642198 4.61476C0.642198 6.2047 1.77392 7.53204 3.27578 7.83285C3.00008 7.90801 2.71001 7.94841 2.41047 7.94841C2.19901 7.94841 1.99338 7.9273 1.79339 7.88927C2.21121 9.19332 3.42318 10.1425 4.86007 10.1693C3.73636 11.0499 2.32094 11.5745 0.783049 11.5745C0.518272 11.5745 0.256952 11.5594 0 11.529C1.45273 12.46 3.17769 13.0036 5.03186 13.0036Z"
                      fill="#46A358"
                      fillOpacity="0.6"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.bottomSocialLink}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.33333 1.66667C3.33333 2.6 2.6 3.33333 1.66667 3.33333C0.733333 3.33333 0 2.6 0 1.66667C0 0.733333 0.733333 0 1.66667 0C2.6 0 3.33333 0.733333 3.33333 1.66667ZM3.33333 4.66667H0V15.3333H3.33333V4.66667ZM8.66667 4.66667H5.33333V15.3333H8.66667V9.73333C8.66667 6.6 12.6667 6.33333 12.6667 9.73333V15.3333H16V8.6C16 3.33333 10.0667 3.53333 8.66667 6.13333V4.66667Z"
                      fill="#46A358"
                      fillOpacity="0.6"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.bottomSocialLink}
                >
                  <svg
                    height="14px"
                    width="19px"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 461.00 461.00"
                    fill="#ffffff"
                    stroke="#ffffff"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="#CCCCCC"
                      strokeWidth="15.674034"
                    />

                    <g id="SVGRepo_iconCarrier">
                      <g>
                        <path
                          d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"
                          fill="#46A358"
                          fillOpacity="0.6"
                        />
                      </g>
                    </g>
                  </svg>
                </a>
              </div>
              <div className={styles.bottomPaymentMethods}>
                <img src={paypal} alt="paypal" />
                <img src={mastercard} alt="mastercard" />
                <img src={visa} alt="visa" />
                <img src={liqpay} alt="liqpay" />
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
