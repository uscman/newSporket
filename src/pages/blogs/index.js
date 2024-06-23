/* eslint-disable @next/next/no-css-tags */
import { useEffect } from 'react';
import Head from 'next/head';
//= Layout
//= Components
import Layout from '@/layout/Layout';
import StickyBar from '@/components/Stickybar';
import Footer from '@/components/Footer';
import BlogHeader from '@/components/BlogHeader';
import Blogs2 from '@/components/Blogs2';
import { createClient } from 'contentful';

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID ,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  }) 

  const res = await client.getEntries({content_type:'blog'})

  return {
    props: {
      blogsdata: res?.items
    }
  }
}

const Blogs = ({blogsdata}) => {
  
  useEffect(() => {
    document.body.classList.add('index-bus1');

    const removeClasses = [
      'index-main', 'index-corporate',
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
        <title>Ravo - Blog Grid Creative</title>
      </Head>

      <Layout>
        <StickyBar/>
        <BlogHeader/>
        <main className="position-re">
        <Blogs2 blogsdata={blogsdata}/>
        <Footer type={'purple-light'}/>
        </main>
      </Layout> 
    </>
  )
}

export default Blogs;