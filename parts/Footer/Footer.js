import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.scss';
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';

const Footer = () => (
  <AppBar position="static">
    <Toolbar className={styles.footer}>
      <Typography style={{fontWeight: 600, fontSize:19}} variant="body1" color="inherit">
        © 2021 talkerAI L.L.C.
      </Typography>
    </Toolbar>
  </AppBar>
  // <div className={styles.Footer} data-testid="Footer">
  //   Footer Component
  // </div>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
