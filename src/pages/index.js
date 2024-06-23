import About from "@/components/About";
import Blog from "@/components/Blogs";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import Header from "@/components/header";
import Portfolio from "@/components/Portfolio";
import Section from "@/components/Section";
import Services from "@/components/Services";
import StickyBar from "@/components/Stickybar";
import Layout from "@/layout/Layout";
import { createClient } from 'contentful';

export async function getStaticProps() {
  
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID ,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  }) 

  const res = await client.getEntries({content_type:'blog'})
  const projects = await client.getEntries({content_type:'project'})

  return {
    props: {
      blogsdata: res.items,
      projects: projects.items
    }
  }
}

export default function Home({blogsdata,projects}) {
  return (
    <> 
    <Layout> 
    <StickyBar/>
    <Header/>
    <Clients/>
    <About/>
    <Portfolio projects={projects}/>

    <Services/>
    
    <Section/>
    <Blog blogsdata={blogsdata}/>
    <Footer type={'purple-light'}/>
    </Layout>
    
    </> 
   
    );
}
