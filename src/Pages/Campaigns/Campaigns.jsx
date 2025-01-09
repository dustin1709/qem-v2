import Section from '../../Components/Section';
import PageHeading from '../../Components/Heading/PageHeading';
import DonationSection6 from '../../Components/DonationSection/DonationSection6';
import { pageTitle } from '../../helper';
const headingData = {
  title: 'CAREERS',
};

const donationData = {
  sectionSubtitle: ' CAREERS',
  sectionTitle: 'WHY WORK AT QEM?',
  donationCampaigns: [
    {
      id: 1,
      title: 'Opportunities for Growth',
      description:
        'At QEM, we believe in fostering talent and creating opportunities for growth. A **career** with us means working in a dynamic, fast-paced environment where innovation and expertise drive success. We are always on the lookout for motivated individuals who are passionate about commodities trading, logistics, software development, and consulting. At QEM, we offer competitive benefits, professional development opportunities, and a collaborative culture that encourages teamwork and innovation. Join us and be a part of shaping the future of global trade and solutions.',
      imageUrl: '/assets/img/others/card_img_1.jpg'
    },
    {
      id: 2,
      title: 'Performance based Bonuses',
      description:
        'With growing demand, we’re expanding our team to better support our clients and meet the needs of our business. Our aim is to motivate and engage our employees, fostering a culture of collaboration and excellence. We offer performance-based bonuses, team incentives, and recognition rewards. We believe in celebrating success and ensuring that everyone shares in the achievements of the company. We always look for talents to join our company and be a part of shaping the of global trade. Whether you’re an experienced professional or just starting your career, we offer exciting opportunities at QEM.',
      imageUrl: '/assets/img/others/card_img_2.jpg'
    }
  ],
};

const Campaigns = () => {
  pageTitle('Careers');
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
      <Section
        topSpaceMd="75"
        topSpaceLg="145"
        bottomSpaceMd="80"
        bottomSpaceLg="150"
      >
        <DonationSection6 data={donationData} />
      </Section>
    </>
  );
};

export default Campaigns;
