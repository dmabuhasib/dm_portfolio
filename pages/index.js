import Banner from '@/components/homeSec/Banner';
import BrandCSec from '@/components/homeSec/BrandCSec';
import ClientSec from '@/components/homeSec/ClientSec';
import ProjectSec from '@/components/homeSec/ProjectSec';
import ServicePart from '@/components/homeSec/ServicePart';
import Layout from '@/components/layout/Layout';

export default function Home() {
  return (
    <Layout>
      <Banner />
      <ServicePart />
      <ClientSec />
      <BrandCSec />
      <ProjectSec />
    </Layout>
  );
}
