import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';

class Projects extends React.Component {
  render() {
    return (
      <Fragment>
        <div>
          <Typography variant="headline" component="h2">
            Improve Performance of Web Pages:
          </Typography>
          <ul>
            <li>
              Identified the section of the code which was causing the problem using debugging techniques.
            </li>
            <li>
              Analyzed SQL using Explain and created indexes if necessary to reduce the table scans.
            </li>
            <li>
              Implemented Memcached memory caching system to enable faster web page load.
            </li>
            <li>
              Used Expires headers for browser caching of the static resources which do not change frequently.
            </li>
            <li>
              Reduced page redirects and HTTP requests for better page load times.
            </li>
            <li>
              Minified JavaScript and optimized CSS delivery by utilizing external style sheets and combining several style sheets as and when applicable to reduce the number of HTTP requests.
            </li>
            <li>
              Optimized image load by cropping images into the specified width, not having browser resize the images there by improving load times.
            </li>
            <li>
              Enabled compression and improved server response time by fixing slow application logic and slow database queries.
            </li>
            <li>
              Implemented code in Zend MVC framework architecture which provides inbuilt browser caching feature.
            </li>
            <li>
              Enabled progressive rendering of the web pages.
            </li>
            <li>
              Improved page load speed by only loading the data of the active tab using Ajax calls.
            </li>
            <li>
              Achieved 45% better page load times by incorporating the page load optimization methodologies.
            </li>
          </ul>
        </div>
        <div>
          <Typography variant="headline" component="h2">
            Bring 250ok Spam trap data into the database tables:
          </Typography>
          <ul>
            <li>Used x-api-key header to set the apikey.</li>
            <li>Created Api consumer which fetches data from the 250ok api.</li>
            <li>The results of the api call are validated and inserted into the database.</li>
            <li>Used cURL to set options and perform a cURL session.</li>
            <li>Created a cronjob which adds jobs to the MailQueue service.</li>
          </ul>
        </div>
        <div>
          <Typography variant="headline" component="h2">
            Modal, users can use to send emails to leads in a list (List Send Modal):
          </Typography>
          <ul>
            <li>Used React JS to create reusable components.</li>
            <li>Utilized Antd React Components to create the modal.</li>
            <li>Created apollo client store and initalized the default values for checkboxes and radio buttons.</li>
            <li>Created resolvers to update apollo local storage based on user interactions.</li>
            <li>Wrote GraphQL queries to fetch data from the GraphQL API and used the data to populate emails, lists etc.,.</li>
            <li>Used TypeScript static typing language to curb errors.</li>
            <li>This feature was introduced to all the clients on companys platform.</li>
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default Projects;
