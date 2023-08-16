import Layout from '@/components/layout/Layout';
import OfferSec from '@/components/servicesSec/OfferSec';
import ServicesBanner from '@/components/servicesSec/ServicesBanner';
import React from 'react';

const services = () => {
  return (
    <Layout>
      <ServicesBanner />
      <OfferSec />
    </Layout>
  );
};

export default services;
