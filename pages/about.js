import AboutBanner from '@/components/abouSec/AboutBanner';
import AboutChosseSec from '@/components/abouSec/AboutChosseSec';
import AboutExpertSec from '@/components/abouSec/AboutExpertSec';
import AboutMsgSec from '@/components/abouSec/AboutMsgSec';
import AboutPartnerSec from '@/components/abouSec/AboutPartnerSec';
import AboutSkillSec from '@/components/abouSec/AboutSkillSec';
import Layout from '@/components/layout/Layout';

const about = () => {
  return (
    <Layout>
      <AboutBanner />
      <AboutPartnerSec />
      <AboutSkillSec />
      <AboutChosseSec />
      <AboutMsgSec />
    </Layout>
  );
};

export default about;
