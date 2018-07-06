import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import profilePhoto from '../images/pp1.jpeg';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    margin: 5,
  },
  bigAvatar: {
    width: 50,
    height: 50,
  },
};

function ImageAvatar(props) {
  const { classes } = props;
  return (
    <div className={classes.row}>
      <Avatar alt="Prasanna Munnangi" src={profilePhoto} className={ classes.avatar, classes.bigAvatar } />
    </div>
  );
}

ImageAvatar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatar);
