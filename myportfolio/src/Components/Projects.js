import React from 'react';

class Projects extends React.Component {
  render() {
    return (
      <div>
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
    );
  }
}

export default Projects;
