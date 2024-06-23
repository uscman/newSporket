/* eslint-disable @next/next/no-css-tags */
import { useEffect } from 'react';
import Head from 'next/head';
import StickyBar from '@/components/Stickybar';
import Layout from '@/layout/Layout';
import Footer from '@/components/Footer';
import ServiceHeader from '@/components/ServiceHeader';
import ServiceIntro from '@/components/ServiceIntro';
import ServiceDescription from '@/components/ServiceDescription';
import ServiceDet from '@/components/ServiceDetail';
import { createClient } from 'contentful';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID ,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  }) 


export const getStaticPaths = async()=>{
    const res = await client.getEntries({
        content_type: "service",
      });
    
      const paths = res.items?.map((item) => {
        return {
          params: { slug: item?.fields?.slug },
        };
      })
    
      return {
        paths,
        fallback: true,
      };
}

export const getStaticProps = async ({ params }) => {
    const res = await client.getEntries({
      content_type: "service",
      "fields.slug": params?.slug,
    });
  
    if (!res.items.length) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
  
    return {
      props: { service: res.items[0],},
      revalidate: 1,
    };
  };




const ServiceDetails = ({service}) => {
  useEffect(() => {
    const removeClasses = [
      'index-bus1', 'index-main', 'index-corporate',
      'index-restaurant', 'index-arch',
      'index-freelancer', 'cr-agency',
      'land-demo2', 'mobile-app',
      'gr-orange-bg', 'nft-market'
    ];

    document.body.classList.remove(...removeClasses);
  }, []);

  return (
    <>
      <Head>
        <title>Ravo - Project Details</title>
      </Head>
      <Layout>
        <StickyBar />
        <div className="wrapper">
         <ServiceHeader service = {service}/>
         {/* <ServiceIntro service = {service}/> */}
         <ServiceDescription service={service}/>
         {/* <ServiceDet/> */}

          <Footer type={'purple-light'}/>
        </div>
      </Layout>
    </>
  );
}

export default ServiceDetails;
