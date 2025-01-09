import Section from '../../Components/Section';
import PageHeading from '../../Components/Heading/PageHeading';
import FeatureSection4 from '../../Components/FeatureSection/FeatureSection4';
import { pageTitle } from '../../helper';
const headingData = {
  title: 'Services',
};

const featureData = {
  features: [
    {
      icon: '/assets/img/nature/service_icon_1.svg',
      title: 'Invest in Green',
      description:
        'Generate steady financial returns from recycled material markets.'
    },
    {
      icon: '/assets/img/nature/service_icon_2.svg',
      title: 'Sustainable Network',
      description:
        'Reduce environmental impact and align with global sustainability goals.'
    },
    {
      icon: '/assets/img/nature/service_icon_3.svg',
      title: 'Global Reach',
      description:
        'A diverse range of markets, from construction to manufacturing.'
    },
    {
      icon: '/assets/img/nature/service_icon_4.svg',
      title: 'Eco-Friendly Impact',
      description:
        'Contributes to reducing landfill waste and conserving natural resources.'
    },
    {
      icon: '/assets/img/nature/service_icon_6.svg',
      title: 'Sustainable Investing',
      description:
        'Support local economies by creating jobs in recycling operations.'
    },
    {
      icon: '/assets/img/nature/service_icon_5.svg',
      title: 'Quality Assurance',
      description:
        'Verify the grade and purity of the scrap to meet buyer requirements.'
    },
  ],
};
const Services = () => {
  pageTitle('Service');
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
        <FeatureSection4 data={featureData} variant={true} />
      </Section>
    </>
  );
};

export default Services;
