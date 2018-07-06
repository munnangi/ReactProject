import React from 'react';
import SimpleExpansionPanel from './SimpleExpansionPanel';
import { Route, Switch } from 'react-router-dom';
import AboutMeCard from './AboutMeCard';
import ContactCard from './ContactCard';
import ProjectsCard from './ProjectsCard';

const RouteMain = () => (
  <Switch>
    <Route exact path="/prasanna" component={SimpleExpansionPanel} />
    <Route path="/prasanna/aboutme" component={AboutMeCard} />
    <Route path="/prasanna/project" component={ProjectsCard} />
    <Route path="/prasanna/contact" component={ContactCard} />
  </Switch>
);

export default RouteMain;
