import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import ImageAvatar from './ImageAvatar';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import featured_play_list from '@material-ui/icons/FeaturedPlayList';
import account_box from '@material-ui/icons/AccountBox';
import assignment_turned_in from '@material-ui/icons/AssignmentTurnedIn';
import contact_mail from '@material-ui/icons/ContactMail';
import { Link } from 'react-router-dom';
import RouteMain from './RouteMain';
// import contentItems  from './TileData';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  titleText: {
    justifyContent: 'center',
  },
  profilePhotoIcon: {
    paddingLeft: 50,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  listItemStyle:{
    paddingBottom: 30,
    paddingTop: 30,
  },
  toolbar: theme.mixins.toolbar,
});


function ClippedDrawer(props) {
  const { classes } = props;
  const sideBarItems = (
      <List component="nav">
        <Link style={{ textDecoration: 'none', color:'white' }} to="/prasanna">
          <ListItem
            button
            className={classes.listItemStyle}>
            <ListItemIcon>
              <Icon color="primary">featured_play_list</Icon>
            </ListItemIcon>
            <ListItemText primary="Resume" />
          </ListItem>
        </Link>
        <Link style={{ textDecoration: 'none', color:'white' }} to="/prasanna/aboutme">
          <ListItem
            button
            className={classes.listItemStyle}>
            <ListItemIcon>
              <Icon color="primary">account_box</Icon>
            </ListItemIcon>
            <ListItemText primary="About Me" />
          </ListItem>
        </Link>
        <Link style={{ textDecoration: 'none', color:'white' }} to="/prasanna/project">
          <ListItem
            button
            className={classes.listItemStyle}>
            <ListItemIcon>
              <Icon color="primary">assignment_turned_in</Icon>
            </ListItemIcon>
            <ListItemText primary="Projects" />
          </ListItem>
        </Link>
        <Link style={{ textDecoration: 'none', color:'white' }} to="/prasanna/contact">
          <ListItem
            button
            className={classes.listItemStyle}>
            <ListItemIcon>
              <Icon color="primary">contact_mail</Icon>
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
        </Link>
      </List>
 );

  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar className={classes.titleText}>
          <Typography variant="title" color="inherit">
            Prasanna Munnangi
          </Typography>
          <div className={classes.profilePhotoIcon}>
            <IconButton color="inherit">
              <ImageAvatar />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.toolbar} />
        {sideBarItems}
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <RouteMain />
      </main>
    </div>
  );
}

ClippedDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClippedDrawer);
