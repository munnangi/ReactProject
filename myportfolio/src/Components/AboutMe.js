import React from 'react';
import PropTypes from 'prop-types';
import javascript from '../images/javascriptLogo.png';
import html5 from '../images/html5Logo.png';
import css3 from '../images/css3Logo.png';
import react from '../images/reactLogo.png';
import redux from '../images/reduxLogo.png';
import php7 from '../images/php7Logo.png';
import mysql from '../images/mysqlLogo.png';
import mongodb from '../images/mongodbLogo.jpg';
import graphql from '../images/graphqlLogo.jpg';
import apollo from '../images/apolloLogo.jpg';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  imgLogoPadding: {
    paddingTop: 25,
    paddingRight: 25,
  },
});

 const AboutMe = (props) => {
   const {classes } = props;
   return (<div style={{fontSize: 18}}>
      <p>
        Hi, I am Prasanna. Currently work as Full stack developer at SharpSpring
        in Gainesville, FL. My passion is to solve complex software problems and write code to make the users job
        easier. My focus is on writing quality and test driven code.
      </p>
      <p>
        In my spare time, I read articles on <b>Medium</b> etc., and play around with new technologies.
        I participate in local coding meetups and solve question on leetCode which is a online coding platform.
      </p>
      <p>
      I am an avid NBA fan and I love to play basketball. I am pretty good at ping pong.
      </p>
      <p>
        The following are the technologies I have worked with on my projects:
      </p>
      <img src={javascript} alt='javascript' className={classes.imgLogoPadding} />
      <img src={react} alt='react' className={classes.imgLogoPadding} />
      <img src={redux} alt='redux' className={classes.imgLogoPadding} />
      <img src={html5} alt='html' className={classes.imgLogoPadding} />
      <img src={css3} alt='css3' className={classes.imgLogoPadding} />
      <img src={php7} alt='php7' className={classes.imgLogoPadding} />
      <img src={mysql} alt='mysql' className={classes.imgLogoPadding} />
      <img src={mongodb} alt='mongodb' className={classes.imgLogoPadding} />
      <img src={graphql} alt='graphql' className={classes.imgLogoPadding} />
      <img src={apollo} alt='apollo' className={classes.imgLogoPadding} />
    </div>
  );
}
AboutMe.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default  withStyles(styles)(AboutMe);
