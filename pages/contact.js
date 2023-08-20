import ContactBanner from '@/components/contactsec/ContactBanner'
import ContactForm from '@/components/contactsec/ContactForm'
import Layout from '@/components/layout/Layout'
import React from 'react'

const contact = () => {
  return (
    <Layout>
        <ContactBanner />
        <ContactForm />
    </Layout>
  )
}

export default contact