import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ImageAvatar from './ImageAvatar';
import Icon from '@material-ui/core/Icon';
import featured_play_list from '@material-ui/icons/FeaturedPlayList';
import account_box from '@material-ui/icons/AccountBox';
import assignment_turned_in from '@material-ui/icons/AssignmentTurnedIn';
import contact_mail from '@material-ui/icons/ContactMail';
import { Link } from 'react-router-dom';
import RouteMain from './RouteMain';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: 'auto',
  },
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
  titleText: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  displayFlex: {
    display: 'flex',
  },
  profilePhotoIcon: {
    paddingLeft: 50,
  },
  listItemStyle:{
    paddingBottom: 30,
    paddingTop: 30,
  },
});

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, theme } = this.props;

    const drawer = (


      <div>
              <div className={classes.toolbar} />
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
      </div>

    );

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.displayFlex}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
            <div className={classes.titleText}>
              <Typography variant="title" color="inherit">
                Prasanna Munnangi
              </Typography>
              <div className={classes.profilePhotoIcon}>
                <IconButton color="inherit">
                  <ImageAvatar />
                </IconButton>
              </div>
            </div>
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <div className={classes.toolbar} />
            <RouteMain />
        </main>
      </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
