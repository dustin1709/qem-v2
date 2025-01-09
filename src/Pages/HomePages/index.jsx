import AboutSection from '../../Components/AboutSection';
import BlogSection from '../../Components/BlogSection';
import CTASection from '../../Components/CTASection';
import DonationSection from '../../Components/DonationSection';
import FaqSection from '../../Components/FaqSection';
import FeatureSection from '../../Components/FeatureSection';
import FunFact from '../../Components/FunFact';
import HeroSection from '../../Components/HeroSection';
import Section from '../../Components/Section';
import ServicesSection from '../../Components/ServicesSection';
import TeamSection from '../../Components/TeamSection';
import { pageTitle } from '../../helper';

const heroData = {
  rotateBg: '/assets/img/nature/hero_rotate_text_bg.svg',
  rotateText: '/assets/img/nature/hero_rotate_text.svg',
  leftImage: '/assets/img/nature/hero_img_1.jpg',
  rightImage: '/assets/img/nature/hero_img_2.jpg',
  slides: [
    {
      title: 'Recycling is more than just a process.',
      subtitle:
        'By transforming waste into reusable materials, we reduce pollution, conserve natural resources, and minimize the strain on our environment.',
      btnText: 'Learn more about QEM GREEN',
      btnUrl: '/about',
    },
    {
      title: 'Small Changes, Big Impact on Our Planet',
      subtitle:
        'Making small changes in everyday life can have a significant impact on preserving natural resources and maintaining ecological balance.',
      btnText: 'Explore Our Businesses',
      btnUrl: '/services',
    },
  ],
};

const aboutData = {
  videoUrl: '',
  videoImageUrl: '/assets/img/nature/video_block_bg.jpg',
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

  btnUrl: '/about',
  btnText: 'See more',
};

const fqaData = {
  SectionSubtitle: 'OUR BUSINESSES',
  SectionTitle: 'What we trade',
  rightImgUrl: '/assets/img/nature/faq_bg.jpg',
  faqData: [
    {
      question: 'TRADING',
      answer:
        'We trade a wide range of assets, including stocks, ETFs, and commodities such as aluminum, copper, steel, scraps, and select agricultural products. Our diversified portfolio allows us to meet the varied needs of our clients while maintaining a strong presence in global markets.',
    },
    {
      question: "LOGISTICS",
      answer:
        'Our logistics operations are designed to ensure efficient, timely, and cost-effective delivery of commodities and products to our clients. Leveraging global networks to ensure smooth operations, our logistics solutions are tailored to meet the specific needs of our clients, ensuring seamless transportation, storage, and distribution of materials across various industries.',
    },
    {
      question: 'CONSULTING & MANAGEMENT',
      answer:
        'Our team of experts offers tailored advice on risk management, market analysis, and operational efficiency, ensuring that businesses are equipped with the insights and tools necessary for sustainable growth. Whether optimizing procurement processes or identifying new market opportunities, our consulting services are designed to deliver long-term value and success.',
    },
    {
      question: 'SOFTWARE DEVELOPMENT',
      answer:
        'We aim to reduce costs for our clients by offering software development services, which we either distribute or develop in-house. This approach allows us to provide high-quality solutions while ensuring efficiency and affordability.',
    },
  ],
};

const teamSectionData = {
  SectionSubtitle: 'Our Team',
  SectionTitle: 'Meet Our Dedicated Company Members',
  bgRightImhUrl: '/assets/img/nature/about_shape_1.svg',
  bgLeftImhUrl2: '/assets/img/nature/about_shape_2.svg',
  teamData: [
    {
      name: 'Quinn Ng',
      role: 'Director',
      image: '/assets/img/nature/team_member.png',
      description:
        '',
      facebookUrl: '/',
      instagramUrl: '/',
      linkedinUrl: '/',
    },
    {
      name: 'Vu Chu',
      role: 'Deputy Director',
      image: '/assets/img/nature/team_member.png',
      description:
        'Manages North America markets.',
      facebookUrl: '/',
      instagramUrl: '/',
      linkedinUrl: '/',
    },
    {
      name: 'Iven Jiang',
      role: 'CTO',
      image: '/assets/img/nature/team_member.png',
      description:
        'Chief technology officer.',
      facebookUrl: '/',
      instagramUrl: '/',
      linkedinUrl: '/',
    },
    {
      name: 'Huy Nguyen',
      role: 'Sourcing Partner',
      image: '/assets/img/nature/team_member.png',
      description:
        '',
      facebookUrl: '/',
      instagramUrl: '/',
      linkedinUrl: '/',
    },
  ],
};

const blogData = {
  SectionSubtitle: 'Featured Products',
  SectionTitle: 'Some of our popular enquiries',
  rightImgUrl: '/assets/img/nature/blog_shape_1.png',
  leftImgUrl: '/assets/img/nature/blog_shape_2.png',
  posts: [
    {
      imgSrc: '/assets/img/nature/post_img_1.jpg',
      category: 'Scrap',
      title: 'USED ALUMINUM CANS (UBC)',
      description:
        'Loading Port: Cat Lai Port (Vietnam), Port of Los Angeles (USA), Port of New York and New Jersey (USA), and Port of Savannah (USA).'
    },
    {
      imgSrc: '/assets/img/nature/post_img_2.jpg',
      category: 'Scrap',
      title: 'COPPER WIRES (Copper Scrap)',
      description:
        'Loading Port: Bangkok Port (Thailand), Cat Lai Port (Vietnam), Port of Los Angeles (USA), Port of New York and New Jersey (USA), and Port of Savannah (USA).'
    },
    {
      imgSrc: '/assets/img/nature/post_img_3.jpg',
      category: 'Scrap',
      title: 'WASTE PAPERS, CONTAINERS (OCC)',
      description:
        'Loading Port: Cat Lai Port (Vietnam), Port of Los Angeles (USA), Port of New York and New Jersey (USA), and Port of Savannah (USA).'
    },
  ],
};
export default function Nature() {
  pageTitle('Homepage');
  return (
    <>
      <HeroSection data={heroData} />
      <Section
        className={'cs_shape_wrap'}
        topSpaceMd="70"
        topSpaceLg="140"
        bottomSpaceMd="80"
        bottomSpaceLg="150"
      >
        <AboutSection data={aboutData} />
      </Section>
      <Section className={'cs_gray_bg_2'}>
        <FaqSection data={fqaData} reverseOrder={false} />
      </Section>
      <Section
        className={'cs_half_bg_wrap'}
        topSpaceMd="75"
        topSpaceLg="145"
        bottomSpaceMd="80"
        bottomSpaceLg="150"
      >
      </Section>
      <Section
        className={'cs_shape_wrap'}
        topSpaceMd="35"
        topSpaceLg="75"
        bottomSpaceMd="80"
        bottomSpaceLg="150"
      >
        <TeamSection data={teamSectionData} />
      </Section>
      <Section
        className="cs_shape_wrap"
        topSpaceMd="75"
        topSpaceLg="75"
        bottomSpaceMd="80"
        bottomSpaceLg="150"
      >
        <BlogSection data={blogData} />
      </Section>
    </>
  );
}
