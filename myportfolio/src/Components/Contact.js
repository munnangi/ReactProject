import React from 'react';
import email from '../images/email.png';
import location_on from '../images/location.png';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import GithubImg from '../images/githubImage.png';
import { withStyles } from '@material-ui/core/styles';

const styles = {
listItemStyle: {
  width: 'auto',
  height: 'auto',
},
avatarStyle: {
  width: '1.25em',
  height: '1.25em',
},
};

class Contact extends React.Component {
  render() {
    return (
      <List>
        <ListItem>
          <ListItemIcon>
              <img src={email} alt='email' />
          </ListItemIcon>
          <ListItemText primary="munnangi.prasanna@gmail.com" />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <img src={location_on} alt='location' />
          </ListItemIcon>
          <ListItemText primary="Gainesville, FL" />
        </ListItem>
        <ListItem >
          <ListItemIcon classes={{width: 25, height: 25 }} >
            <img src={GithubImg} alt='github' />
          </ListItemIcon>
          <a target="_blank" rel="noopener noreferrer"  href="https://github.com/munnangi" style={{ paddingLeft:16 }}>
             <ListItemText primary="https://github.com/munnangi" />
          </a>

        </ListItem>
      </List>
    );
  }
}

export default withStyles(styles)(Contact);
