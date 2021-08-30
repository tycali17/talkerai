import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './P.module.scss';
import NavBar from '../../parts/NavBar/NavBar';
import Footer from '../../parts/Footer/Footer';
import getQueryParams from 'next/link';

// 🎵 P is for Post🎵
function P (props) {
  // const { slug } = getStaticProps();
  const [data, setData] = useState([])


  
  useEffect(() => {

    const setPost = async () => {
      //console.log(slug);
      // const res = await fetch("http://localhost:3000/blog");
      // const d = await res.json();

      // console.log('d:');
      // console.log(d);
      //setData(d);
  };

  setPost();
  }, []);
  return(
    <>
      <NavBar/>
      <div className={styles.Post} data-testid="Post">
        
        {props.slug}
      </div>
      <Footer/>
    </>
  );
}

P.propTypes = {};

P.defaultProps = {};

export async function getStaticProps(context) {
  console.log("slug ID: " + context.params.slug);
  return {
    props: {slug: context.params.slug}, // will be passed to the page component as props
  }
}
export const getStaticPaths = async () => {

  return {
      paths: [], //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
}

export default P;
