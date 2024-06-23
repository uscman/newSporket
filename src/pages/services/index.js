/* eslint-disable @next/next/no-css-tags */
import { useEffect } from 'react';
import Head from 'next/head';

import AboutHeader from '@/components/AboutHeader';
import Layout from '@/layout/Layout';
import StickyBar from '@/components/Stickybar';
import Services2 from '@/components/Services2';
import SecHalf from '@/components/SecHalf';
import Stats from '@/components/Stats';
import Footer from '@/components/Footer';
import AboutClients from '@/components/AboutClients';
import { createClient } from 'contentful';


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

const Services = ({servicedata}) => {
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
console.log(servicedata)
  return (
    <>
      <Head>
        <title>Ravo - Services Creative</title>
      </Head>

        <Layout> 
        <StickyBar/>
        <AboutHeader title={'Services'}/>
        <main className="main-content">
         <Services2 servicedata={servicedata} />
         <SecHalf/>
         <Stats/>
         <AboutClients/>  
         <Footer type={'purple-light'}/>
        </main>
        </Layout>
    </>
  )
}

export default Services;