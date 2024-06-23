/* eslint-disable @next/next/no-css-tags */
import Head from 'next/head';
import { useEffect } from 'react';
//= Layout
//= Components
import { createClient } from 'contentful';
import Layout from '@/layout/Layout';
import StickyBar from '@/components/Stickybar';
import AboutHeader from '@/components/AboutHeader';
import AboutUs from '@/components/AboutUs';
import Numbers from '@/components/Numbers';
import Team from '@/components/Team';
import Skills from '@/components/Skills';
import AboutServices from '@/components/AboutServices';
import Testimonials from '@/components/Testimonials';
import AboutBlogs from '@/components/AboutBlogs';
import AboutClients from '@/components/AboutClients';
import CallAction from '@/components/CallAction';
import Footer from '@/components/Footer';

export const getStaticProps = async() => {
  const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID ,
      accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    }) 

    const res =  await client.getEntries({content_type:'service'})

    return {
      props :{
          servicedata:res.items
      }
    }
}
const AboutCreative = ({servicedata}) => {
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
        <title>Ravo - About Creative</title>
      </Head>

<Layout> 
    <StickyBar/>
        <AboutHeader title={'About Us'}/>
        <main className="main-content">
         <AboutUs/>
          <Numbers/>
          <Team/>
          <Skills/>
          {/* <Testimonials/> */}
          <AboutClients/>
          <Footer type={'purple-light'}/>
        </main>
        </Layout>
    </>
  )
}

export default AboutCreative;