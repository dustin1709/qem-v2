import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import DonationWidget from '../Widget/DonationWidget';
import Spacing from '../Spacing';

const CampaignDetailsSection = ({ data }) => {
  const { fixedAmounts, defaultAmount } = data || {};
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const progress =
    (data.rightSectionData.progress.percentage / 100) * circumference;

  return (
    <>
      <section>
        <Spacing lg={150} md={80} />
        <div className="container">
          <div className="row cs_gap_y_80">
            <div className="col-lg-7">
              <div className="cs_details_content">
                <img src={data.imageUrl} alt="Campaign" />
                <h2>{data.title}</h2>
                <p>{data.introduction}</p>

                {data.goals.map((goal, index) => (
                  <div key={index}>
                    <h3>{goal.heading}</h3>
                    <p>{goal.text}</p>
                  </div>
                ))}
                <h3>{data.contribution.heading}</h3>
                <p>{data.contribution.text}</p>

                <h3>{data.impact.heading}</h3>
                <p>{data.impact.text}</p>

                <h3>{data.celebration.heading}</h3>
                <p>{data.celebration.text}</p>

                <h3>{data.conclusion.text}</h3>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="cs_progress_widget cs_gray_bg">
                <div className="cs_round_progress_wrap">
                  <div className="cs_round_progress_in">
                    <div className="cs_round_progress_number mb-0 cs_semibold cs_fs_51">
                      <span className="odometer">
                        {data.rightSectionData.progress.percentage}
                      </span>
                      %
                    </div>
                  </div>
                  <div className="cs_round_progress cs_accent_color">
                    <svg
                      className="cs_round_progress_percentage"
                      viewBox="0 0 100 100"
                      width={163}
                      height={163}
                      data-percent={`${data.rightSectionData.progress.percentage}%`}
                      style={{
                        strokeDasharray: `${progress}, ${circumference}`,
                      }}
                    >
                      <circle cx={50} cy={50} r={40} />
                    </svg>
                  </div>
                </div>
                <h3 className="cs_progress_widget_info cs_fs_21 cs_semibold">
                  <span>Goal : ${data.rightSectionData.progress.goal}</span>
                  <span>Raised : ${data.rightSectionData.progress.raised}</span>
                </h3>
              </div>
              <Spacing lg={50} md={40} />
              <DonationWidget
                fixedAmounts={fixedAmounts}
                defaultAmount={defaultAmount}
                variant={true}
              />

              <Spacing lg={50} md={40} />
              <div className="cs_social_widget cs_gray_bg">
                <h2 className="cs_fs_28 cs_semibold cs_mb_30">
                  Share This Opportunity
                </h2>
                <div className="cs_social_widget_list">
                  <Link to="#" className="cs_center">
                    <i>
                      <FaFacebookF />
                    </i>
                  </Link>
                  <Link to="#" className="cs_center">
                    <i>
                      <FaInstagram />
                    </i>
                  </Link>
                  <Link to="#" className="cs_center">
                    <i>
                      <FaLinkedinIn />
                    </i>
                  </Link>
                  <Link to="#" className="cs_center">
                    <i>
                      <FaTwitter />
                    </i>
                  </Link>
                  <Link to="#" className="cs_center">
                    <i>
                      <FaWhatsapp />
                    </i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Spacing lg={150} md={80} />
      </section>
    </>
  );
};

export default CampaignDetailsSection;
