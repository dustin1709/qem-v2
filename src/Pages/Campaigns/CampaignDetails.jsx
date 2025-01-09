import Section from '../../Components/Section';
import PageHeading from '../../Components/Heading/PageHeading';
import CampaignDetailsSection from '../../Components/CampaignDetails';
import { pageTitle } from '../../helper';
const headingData = {
  title: 'Campaign Details',
};

const campaignData = {
  imageUrl: '/assets/img/others/campaing_details_1.jpg',
  title: 'Reforestation and Tree Planting Campaign 2024',
  introduction: `Join us in our ambitious Reforestation and Tree Planting
  Campaign as we embark on a mission to revitalize our ecosystems and combat climate change. The year 2024 marks a pivotal moment in our commitment to environmental restoration, and we invite you to be a key participant in this transformative initiative.`,
  defaultAmount: 50,
  fixedAmounts: [10, 50, 100, 500],
  goals: [
    {
      heading: 'Campaign Goals:',
      text: `We prioritize products that are made from recycled or
      renewable materials, are energy-efficient, and have minimal
      environmental footprints. Our selection process involves
      assessing the entire lifecycle of each product to ensure it
      aligns with our commitment to sustainability.`,
    },
    {
      heading: '1. Planting Targets',
      text: `Our goal is to plant thousand of trees across Europe by
      the end of 2024. Each tree planted contributes to carbon
      sequestration, biodiversity enhancement, and the restoration
      of vital ecosystems.`,
    },
    {
      heading: '2. Community Engagement',
      text: `Foster a sense of environmental stewardship by engaging local
      communities, schools, and organizations in tree planting
      events, workshops, and awareness campaigns.`,
    },
    {
      heading: '3. Biodiversity Conservation',
      text: `Prioritize the planting of native tree species to support
      local biodiversity, create habitats for wildlife, and
      strengthen the resilience of natural ecosystems.`,
    },
  ],
  contribution: {
    heading: 'How You Can Contribute:',
    text: `Contribute to the campaign by sponsoring the planting of one
    or more trees. Your sponsorship covers the cost of saplings,
    planting materials, and ongoing care. Participate in tree
    planting events and community workshops to actively contribute
    to the campaign on the ground. Check our events calendar for
    upcoming opportunities. Raise awareness about the campaign by
    sharing our posts on social media, using our campaign
    hashtags, and encouraging friends and family to join the
    movement.`,
  },
  impact: {
    heading: 'Impact and Progress Tracking:',
    text: `Stay updated on the campaign's progress through our
    interactive online tracker. We'll regularly share updates on
    the number of trees planted, community involvement, and the
    positive environmental impact achieved.`,
  },
  celebration: {
    heading: 'Celebrating Success:',
    text: `As the campaign progresses, we'll highlight success stories,
    showcase community efforts, and express gratitude to sponsors
    and volunteers who have played a pivotal role in making the
    Reforestation and Tree Planting Campaign a resounding success.`,
  },
  conclusion: {
    text: `Together, let's make 2024 a landmark year for environmental
    restoration. Join the Reforestation and Tree Planting Campaign
    today and leave a lasting legacy for future generations.`,
  },

  rightSectionData: {
    progress: {
      percentage: 63,
      goal: 4000,
      raised: 2800,
    },
    fixedAmounts: [10, 50, 100, 500],

    personalInfo: {
      name: '',
      email: '',
      mobile: '',
    },
    totalDonation: 50,
  },
};
const CampaignDetails = () => {
  pageTitle('Campaign Details');
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
      <CampaignDetailsSection data={campaignData} />
    </>
  );
};

export default CampaignDetails;
