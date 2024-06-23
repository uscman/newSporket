/* eslint-disable @next/next/no-css-tags */
import { useEffect } from 'react';
import Head from 'next/head';
import { createClient } from 'contentful';
import StickyBar from '@/components/Stickybar';
import Layout from '@/layout/Layout';
import ProjectHeader from '@/components/ProjectHeader';
import Footer from '@/components/Footer';
import ProjectIntro from '@/components/ProjectIntro';
import Details from '@/components/Details';
import NextPrev from '@/components/nextprev';
//= Layout
//= Components
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "project",
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
};

export const getStaticProps = async ({ params }) => {
  const res = await client.getEntries({
    content_type: "project",
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
    props: { project: res.items[0],},
    revalidate: 1,
  };
};
const ProjectDetails = ({project}) => {
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
        <StickyBar/>
        <div className="wrapper">
        <ProjectHeader project={project}/>
        <ProjectIntro project ={project}/>
        <Details project={project} />
       
        <Footer type={'purple-light'}/>
        </div>
        </Layout>
    </>
  )
}

export default ProjectDetails;