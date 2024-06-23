import Head from 'next/head';
import StickyBar from '@/components/Stickybar';
import Layout from '@/layout/Layout';
import Footer from '@/components/Footer';
import SingleBlog from '@/components/SingleBlog';
import { createClient } from "contentful";

// const client = createClient({
//   space: process.env.CONTENTFUL_SPACE_ID ,
//   accessToken: process.env.CONTENTFUL_ACCESS_KEY,
// }) 

// export const getStaticPaths = async () => {
//   const res = await client.getEntries({
//     content_type:"blog",
//   })

//   const paths = res.items?.map((item)=>{
//     return {
//       params: {slug: item?.fields?.slug},
//     }
//   })
//   return {
//     paths,
//     fallback: true,
//   }

// }

// export const getStaticProps = async ({params})=> {
//  const res = await client.getEntries ({
//   content_type:'blog',
//   'fields.slug': params?.slug
//  })

//  return {
//   props: {
//     blog:res.items[0]
//   }
//  }
// }

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "blog",
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
    content_type: "blog",
    "fields.slug": params?.slug,
  });
  const blogs = await client.getEntries({content_type:'blog'})


  if (!res.items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { blog: res?.items[0], blogsdata: blogs.items},
    revalidate: 1,
  };
};


const BlogDetails = ({blog,blogsdata}) => {
  // const {title,slug} = blog?.fields;
 console.log (blog)
  return (
    <>
      <Head>
      <title >Ravo - Blog Post</title>
      </Head>
      <StickyBar/>
      <Layout>
      <main className="position-re pt-100">
      <SingleBlog blog={blog} blogsdata={blogsdata} />
      <Footer type={'purple-light'}/>
      </main>
      </Layout>
    </>
  )
}

export default BlogDetails;
