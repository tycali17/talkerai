import React from 'react'
import styles from './NavBar.module.scss'
import logo from '../../public/logo.png'
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core'
import Link from 'next/link'
import Image from 'next/image'

import PropTypes from 'prop-types';


const NavBar = () => (

  <AppBar position="static">
    <Toolbar className={styles.navBar}>
      {/* <Routes/> */}
      {/* <BrowserRouter> */}
        <div className={styles.lMenu}>
          <nav className={styles.navContainer}>



            <Link href="/">
              <div className={styles.logo}>
                <Image src={logo} alt=""/>
              </div>
            </Link>
            {/* add: Solutions, About, Account pages (comments), 
            add: Console for chatbots */}
            <div className={styles.nItem}><Link href="/blog">Blog</Link></div>
            <div className={styles.nItem}><Link href="/contact">Contact</Link></div>
            
            
          </nav>
        </div>
        <div className={styles.rMenu}>
          <nav>
            {/* <Link className={styles.endItem} to="/account">Account</Link> */}
          </nav>
        </div>
        {/* </BrowserRouter> */}

    </Toolbar>
  </AppBar>

  // <div className={styles.NavBar} data-testid="NavBar">
  //   NavBar Component
  // </div>
);

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
