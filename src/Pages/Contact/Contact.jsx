import Section from '../../Components/Section';
import PageHeading from '../../Components/Heading/PageHeading';
import Button from '../../Components/Button';
import { Link } from 'react-router-dom';
import { pageTitle } from '../../helper';
import Spacing from '../../Components/Spacing';
const headingData = {
  title: 'Contact Us',
};

const contactData = {
  title: 'Get in Touch with Our Team',
  description:
    "Feel free to reach out to us via the contact form below, and we'll do our best to respond promptly. If you cannot get in touch with us with this form, please send an email to our mailbox at infodesk@qem-global.com, thank you!",
  imageUrl: '/assets/img/others/contact_img.jpg',
  formFields: [
    { type: 'text', placeholder: 'YOUR FULL NAME' },
    { type: 'text', placeholder: 'YOUR EMAIL' },
    { type: 'text', placeholder: 'YOUR COMPANY NAME' },
    { type: 'textarea', placeholder: 'WRITE YOUR MESSAGE HERE' },
  ]
};

const Contact = () => {
  pageTitle('Contact');
  return (
    <>
      <Section
        className={
          'cs_page_heading cs_bg_filed cs_center text-center cs_heading_bg'
        }
        backgroundImage="/assets/img/page_heading_bg.jpg"
      >
        <PageHeading data={headingData} />
      </Section>
      <section>
        <Spacing lg={150} md={80} />
        <div className="container">
          <div className="row align-items-center cs_gap_y_40">
            <div className="col-lg-6">
              <img src={contactData.imageUrl} alt="Contact" className="w-100" />
            </div>
            <div className="col-lg-6">
              <div className="cs_pl_75">
                <h3 className="cs_fs_38 cs_semibold cs_mb_14">
                  {contactData.title}
                </h3>
                <p className="cs_mb_46">{contactData.description}</p>
                <form action="#" className="cs_contact_form">
                  {contactData.formFields.map((field, index) =>
                    field.type === 'textarea' ? (
                      <textarea
                        key={index}
                        className="cs_form_field cs_mb_25"
                        cols={30}
                        rows={4}
                        placeholder={field.placeholder}
                      />
                    ) : (
                      <input
                        key={index}
                        type={field.type}
                        className="cs_form_field cs_mb_25"
                        placeholder={field.placeholder}
                      />
                    ),
                  )}
                  <button className="cs_btn cs_style_1" type="submit">
                    Send Enquiries
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
          </div>
        </div>
        <Spacing lg={145} md={75} />
      </section>
    </>
  );
};

export default Contact;
