/* eslint-disable @next/next/no-css-tags */
import { useEffect } from 'react';
import Head from 'next/head';
//= Layout
//= Components
import StickyBar from '@/components/Stickybar';
import Layout from '@/layout/Layout';
import Footer from '@/components/Footer';
import PortfolioHeader from '@/components/PortfolioHeader';
import PortfolioMain from '@/components/PortfolioMain';
import { createClient } from 'contentful';


export const  getStaticProps = async () => {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID ,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
      }) 

      const projectEntries = await client.getEntries({content_type:'project'})
    

      return {
        props:{
            projects: projectEntries.items
           
        }
      }
}

const Portfolio = ({projects}) => {
  useEffect(() => {
    const removeClasses = [
      'index-main', 'index-bus1', 'index-corporate',
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
        <title>Ravo - Portfolio Colorful | Masonry</title>
      </Head>
        <Layout> 
        <StickyBar/>
        <PortfolioHeader title="Portfolio " subTitle={'Our Previous Work'} />
        <main className="position-re">
        <PortfolioMain projects={projects}/>
         <Footer type={'purple-light'}/>       
         </main>
        </Layout>
    </>
  )
}

export default Portfolio;