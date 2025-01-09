import Section from '../../Components/Section';
import PageHeading from '../../Components/Heading/PageHeading';
import AboutSection from '../../Components/AboutSection';
import { pageTitle } from '../../helper';
const headingData = {
  title: 'About Us',
};

const aboutData = {
  videoUrl: '',
  videoImageUrl: '/assets/img/nature/plasticbottles-deco.jpg',
  SectionTitle: 'Quality. Engineering. Management.',
  SectionSubtitle: 'Who we are',
  description:
    "QEM is independently owned and operated by its leadership team alongside global business partners. We are dedicated to cultivating enduring and sustainable partnerships with our clients and suppliers.",

  option: [
    {
      optionTitle: 'What we do',
      optionDescription:
        'Specializing in the procurement, storage, and delivery of bulk materials, we serve clients across the world. Our commitment to responsible trade ensures we consistently meet the highest standards in operational efficiency, safety, and quality throughout our supply chain.',
    },
    {
      optionTitle: 'Our Values',
      optionDescription:
        'QEM was founded with a mission to support both developing and established resource companies, united by a vision to create a brighter, more sustainable future for the industry.',
    },
  ],

  btnUrl: '',
  btnText: '',
};


export default function AboutPage() {
  pageTitle('About');
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
        className={'cs_shape_wrap'}
        topSpaceMd="70"
        topSpaceLg="140"
        bottomSpaceMd="80"
        bottomSpaceLg="150"
      >
        <AboutSection data={aboutData} variant={'about_style_1'} />
      </Section>
    </>
  );
}
