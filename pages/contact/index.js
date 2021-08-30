import NavBar from '../../parts/NavBar/NavBar';
import Footer from '../../parts/Footer/Footer';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.module.scss';
import { TextField, Button, InputBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  but: {
    zIndex: '200',
    opacity: '1',
    // alignItems: 'center',
    // backgroundColor: '#282C35',
    backgroundColor: '#40fff2',
    // backgroundColor: 'black', // testing
    color: 'black',
    height: '42px',
    fontSize: '25px',
    fontWeight: '600',
    width: 'fill',
    "&:hover": {
      backgroundColor: "#0dbab1 !important"
    }
  },
  em: {
    color: 'white',
    // position: 'absolute',
    // zIndex: '300',
    width: 'stretch',
    // backgroundColor: '#63e'
    border: '1px solid white',
    borderRadius: theme.shape.borderRadius,
    height: '45px',
    paddingLeft: '10px',
    fontSize: '20px',
    marginBottom: '1px',
  },
}));

const Contact = () => (
  <>
    <NavBar/>
    <div className={styles.Contact} data-testid="Contact">
      <form 
        action="https://formspree.io/f/meqvkeed"
        method="POST"
      >
      <h3>Questions? Comments? 
        Suggestions? We'd love to hear from you!</h3>
      <div className={styles.input}>
        <label>
          Enter email:
        </label>
      </div>
      <div className={styles.input}>
          <input style={{height:'30px',width:'300px',padding:'5px',fontSize:'18px'}} type="email" name="email"/>
      </div>

      <div className={styles.input}>
      <label>
          Message:
        </label>
      </div>

      <div className={styles.input}>
      <textarea className={styles.expand} name="message"></textarea>
      </div>
      
      
      <div className={styles.input}>
        <Button className={useStyles().but} type="submit" variant="contained" color="primary">
          submit
        </Button>
      </div>
      {/* <button className={styles.input} type="submit">Send</button> */}
    </form>
    </div>
    <Footer/>
  </>
);

Contact.propTypes = {};

Contact.defaultProps = {};

export default Contact;