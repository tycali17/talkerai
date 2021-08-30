import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Blog.module.scss';
import NavBar from '../../parts/NavBar/NavBar';
import Footer from '../../parts/Footer/Footer';
import { createClient, Entry } from 'contentful';
import {getEntries} from '../../parts/ContentDelivery';
import rob from '../../public/rob.svg';
import Link from 'next/link';
import Image from 'next/image';

// const client = createClient({
//       space: process.env.NEXT_PUBLIC_SPACE, // ID of a Compose-compatible space to be used
//       accessToken: process.env.NEXT_PUBLIC_ACCESS_TK, // delivery API key for the space
//       product: process.env.NEXT_PUBLIC_PRODUCT
// });

function Blog () {
  //const [data, setData] = useState(false)

  // const getEntries = async () => {
  //   const res = await client.getEntries(Object.assign({
  //     content_type: process.env.NEXT_PUBLIC_PRODUCT
  //   }));
  //   return res; 
  // }

  const [mapr, setMap] = useState([])
  // setter: [String] // String (explicit) needed for string array?
  var blogs = []
  var urls = [] // for extensions, post index
  var titles = []
  var descs = []
  var tImages = []

  var post = [
    // {title: "", slug: "", desc: "", image: ""},
  ];

  useEffect(() => {

    getEntries()
    .then(res => {
      var size = Object.keys(res.items).length
      //console.log("size: "+ size);
      blogs = res
      //console.log('title:');
      //console.log(blogs.items[0].fields.title);
      
      for (let i=0; i<size; i++) {
        let title = res.items[i].fields.title
        let url = res.items[i].fields.title.replace(/\s+/g, '-').toLowerCase()
        let desc = res.items[i].fields.description
        let img = "https:" + res.items[i].fields.titleImage.fields.file.url
        console.log(img);
        //title formatting
        title = title.toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ')

        titles.push(title)
        urls.push(url)
        descs.push(desc)
        tImages.push(img)
        blogs.items[i].fields.title = title
        blogs.items[i].fields.titleImage.fields.file.url = img
      }

      // build blog array, update state + DOM
      var tempI = 0
      for (let i = 0; i < titles.length; i++) {
        const gen = {
          title: titles[i],
          slug: res.items[i].fields.slug,
          desc: descs[i],
          image: tImages[i] }
        post.push(gen)
        setMap(mapr => [...mapr, post])
        //console.log(mapr);
        
        
      }
      
      //if (tempI === titles.length) {
     
      
      console.log(post);
      
      //console.log('mapr done');
      
    })
  }, []);
  

  // title undefined error still plagues me
  //if (mapr.length > 0) {
  return (
    <>
      <NavBar/>
      <div className={styles.Blog} data-testid="Blog">  
            
            {
              mapr[0] ? // title undefined still appears after *code change on page*
              <>
                {mapr.map((p, i) => (
                  // <Link slug={p[i]} href={"p/" + p[i].slug}
                  // as={{
                  //   pathname: "p/" + p[i].slug,
                  //   query: { data: p[i] }
                  // }}
                  // >
                  <Link
                    href={{
                      pathname: `p/[slug]`,
                      query: {
                        slug: p[i].slug, // should be `title` not `id`
                      },
                    }}
                    as={`/p/${p[i].slug}`}
                  >
                    <div key={p[i].slug} className={styles.posts} data-testid="posts">
                      <Image 
                      src={p[i].image}
                      width={680}
                      height={400}
                      layout="responsive"
                      alt=""/>
                      <p key={p[i].title} className={styles.pTitle}>{p[i].title}</p>
                      <p key={p[i].desc} className={styles.pDesc}>{p[i].desc}</p>
                      {i+1}
                    </div>
                  </Link>
                ))}
              </> : null
            }
            
            
              
            
           
          
        

      </div>
      <Footer/>
    </>
  );
  // } else {
  //   return(
  //     <p>Loading...</p>
  //   );
  // }
}
Blog.propTypes = {}; // for type checking
Blog.defaultProps = {}; // for when no val is present
export default Blog;
