import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ProfileQualifications from './ProfileQualifications';
import TechnicalSkills from './TechnicalSkills';
import WorkExperienceSS from './WorkExperienceSS';
import Education from './Education';
import ProfileQualificationsImg from '../images/profileResize.png';
import TechnicalSkillsImg from '../images/techSkills.png';
import WorkExpImg from '../images/briefcase.png';
import EducationImg from '../images/education.png';


const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  imgPadding: {
    paddingRight: 16,
  },
});

function SimpleExpansionPanel(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel defaultExpanded={true}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <img src={ProfileQualificationsImg} alt='qualifications' className={classes.imgPadding}/>
          <Typography className={classes.heading}>Profile of Qualifications</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <ProfileQualifications />
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel defaultExpanded={true} >
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <img src={TechnicalSkillsImg} alt='techskills' className={classes.imgPadding} />
          <Typography className={classes.heading}>Technical Skills</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <TechnicalSkills />
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel defaultExpanded={true}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
           <img src={WorkExpImg} alt='workexperience' className={classes.imgPadding} />
          <Typography className={classes.heading}>Work Experience</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <WorkExperienceSS />
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel defaultExpanded={true}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <img src={EducationImg} alt='education' className={classes.imgPadding} />
          <Typography className={classes.heading}>Education</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <Education />
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel);
