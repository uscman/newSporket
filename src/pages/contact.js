/* eslint-disable @next/next/no-css-tags */
import { useEffect } from 'react';
import Head from 'next/head';
//= Layout
//= Components
import Header from '../components/AboutHeader';
import Contactt from '../components/contact/index';

import StickyBar from '@/components/Stickybar';
import Layout from '@/layout/Layout';
import Footer from '@/components/Footer';

const Contact = () => {
  useEffect(() => {
    document.body.classList.add('cr-agency');

    const removeClasses = [
      'land-demo2', 'index-corporate',
      'index-restaurant', 'index-arch',
      'index-freelancer', 'index-bus1',
      'index-main', 'mobile-app',
      'gr-orange-bg', 'nft-market'
    ];

    document.body.classList.remove(...removeClasses);
  }, []);

  return (
    <>
      <Head>
        <title>Ravo - Contact Creative</title>
      </Head>
<Layout>
        <StickyBar/>
        <Header title="Contact Us." />
        <main className="main-content">
        <Contactt/>
        <Footer type={'purple-light'} />   
       
        </main>
        </Layout>
    </>
  )
}

export default Contact;