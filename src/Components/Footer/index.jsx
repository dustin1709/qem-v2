import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";
import { Link } from "react-router-dom";
const data = {
  logo: "/assets/img/logo.svg",
  backgroundImageUrl: "/assets/img/nature/footer_bg.jpg",
  newsletter: {
    title: "Subscribe Our Newsletter",
    description: "Join our mailbox for latest product pricing and shipping rates.",
    placeholder: "Enter your email address ...",
    buttonText: "Subscribe",
  },
  footerText:
    "",
  usefulLinks: [
    { text: "HOMEPAGE", url: "/" },
    { text: "ABOUT US", url: "about" },
    { text: "OUR BUSINESSES", url: "services" },
    { text: "CONTACT US", url: "contact" },
    { text: "CAREERS", url: "contact" },
  ],
  contactInfo: {
    phone: "+84985130518",
    email: "infodesk@qem-global.com",
  },
  footerBottom: {
    copyrightText: "All Right Reserved. Copyright © " + new Date(),
    companyName: "QEM GLOBAL LTD",
    privacyPolicy: "Privacy & Cookie Policy",
  },
};

const Footer = () => {
  return (
      <footer
        className="cs_footer cs_style_1 cs_heading_bg cs_bg_filed"
        style={{ backgroundImage: `url(${data.backgroundImageUrl})` }}
      >
        <div className="container">
          <div
            className="cs_newsletter cs_style_2 cs_accent_bg cs_bg_filed"
            style={{ backgroundImage: "url(/assets/img/cta_bg.svg)" }}
          >
            <div className="cs_newsletter_left">
              <h2 className="cs_fs_28 cs_mb_9 cs_semibold">
                {data.newsletter.title}
              </h2>
              <p className="mb-0 cs_heading_color">
                {data.newsletter.description}
              </p>
            </div>
            <form action="#" className="cs_newsletter_form">
              <input
                type="text"
                className="cs_newsletter_input"
                placeholder={data.newsletter.placeholder}
              />
              <button type="submit" className="cs_btn cs_style_1 cs_color_1">
                {data.newsletter.buttonText}
                <i>
                  <svg
                    width={9}
                    height={10}
                    viewBox="0 0 9 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.5 9L8.5 1M8.5 1L0.5 1M8.5 1L8.5 9"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
              </button>
            </form>
          </div>
        </div>
        <div className="container cs_white_color">
          <div className="cs_footer_row">
            <div className="cs_footer_col">
              <div className="cs_footer_widget">
                <div className="cs_footer_text_widget">
                  <img src={data.logo} alt="Logo" />
                  <p>{data.footerText}</p>
                </div>
                <div className="cs_social_btns cs_style_1">
                  <Link to="/" target="_blank" className="cs_center">
                    <i>
                      <TfiLinkedin />
                    </i>
                  </Link>
                  <Link to="https://www.youtube.com/@qemcompany" target="_blank" className="cs_center">
                    <i>
                      <FaYoutube />
                    </i>
                  </Link>
                  <Link to="/" target="_blank" className="cs_center">
                    <i>
                      <FaFacebookF />
                    </i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cs_footer_col">
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title cs_fs_21 cs_white_color cs_semibold cs_mb_32">
                  Useful Links
                </h2>
                <ul className="cs_footer_widget_menu">
                  {data.usefulLinks.map((link, index) => (
                    <li key={index}>
                      <Link to={link.url}>{link.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="cs_footer_col">
              
            </div>
            <div className="cs_footer_col">
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title cs_fs_21 cs_white_color cs_semibold cs_mb_32">
                  Contact Info
                </h2>
                <ul className="cs_footer_widget_menu">
                  <li>
                    <Link to={`tel:${data.contactInfo.phone}`}>
                      {data.contactInfo.phone}
                    </Link>
                  </li>
                  <li>
                    <Link to={`mailto:${data.contactInfo.email}`}>
                      {data.contactInfo.email}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_footer_bottom cs_white_color">
          <div className="container">
            <div className="cs_footer_bottom_in">
              <p className="cs_copyright mb-0">
                {data.footerBottom.copyrightText}{" "}
                <Link to="#">{data.footerBottom.companyName}</Link>
              </p>
              <ul className="cs_footer_widget_menu">
                <li>
                  <Link to="#">{data.footerBottom.privacyPolicy}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
