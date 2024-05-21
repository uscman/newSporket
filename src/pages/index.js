import About from "@/components/About";
import Blog from "@/components/Blogs";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import Header from "@/components/header";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Section from "@/components/Section";
import Services from "@/components/Services";
import StickyBar from "@/components/Stickybar";
import Layout from "@/layout/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <> 
    <Layout> 
    <StickyBar/>
    <Header/>
    <Clients/>
    <Services/>
    <About/>
    <Portfolio/>
    <Section/>
    <Blog grblue={true}/>
    <Footer/>
    </Layout>
    
    </> 
   
    );
}
