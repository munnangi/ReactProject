import React from 'react';
import Typography from '@material-ui/core/Typography';

class WorkExperienceSS extends React.Component {
  render() {
    return (
      <div>
        <section>
          <div>
              <Typography>
                  <strong>Software Engineer II</strong>
              </Typography>
          </div>
          <div>
              <Typography>
                  <span>
                    <strong>SharpSpring, Gainesville, FL</strong>&nbsp;&nbsp;(September 2017 - Current)
                  </span>
              </Typography>
          </div>
          <ul>
            <Typography>
                <li>Develop code in <strong>docker</strong> environment with <strong>kubernetes</strong> managing the application.</li>
                <li>Followed <strong>PSR-2</strong> standards for coding and PSR-4 standards for autoloading.</li>
                <li>Utilized <strong>CodeIgniter MVC</strong> framework for rapid application development and address separation of concerns.</li>
                <li>Implemented UI Screens, Advanced Search, Timer, Navigation and Menu Bars, Forms, Sorting, Filtering in <strong>React JS & CSS3</strong>.</li>
                <li>Used <strong>React Redux</strong> to create single page applications with <strong>micro service-oriented architecture</strong>.</li>
                <li>Added functionality to upload images using <strong>Antd component</strong> and updated backend and local storage through <strong>GraphQL</strong> query mutation via <strong>Apollo Client</strong>.</li>
                <li>Created audit logs to capture new, deleted PieSync connections and suppressed at risk email jobs.</li>
                <li>Integrated the send email job errors to a slack channel with appropriate error messages.</li>
                <li>Attributed UTM campaigns to leads who are created by filling out form, visiting website etc.,</li>
                <li>Ran <strong>PHPUnit tests</strong> with code coverage turned on and analyzed code coverage % and CRAP values for classes and methods to extend test cases and refactor the code.</li>
                <li>Added new dynamic content to email templates and refactored the old redundant code.</li>
                <li>Fixed issues with <strong>JIRA integration</strong> in the internal application not showing cards for the filters.</li>
                <li>Created amount to deduct from credit one-time charge modals for the billing module.</li>
                <li>Used <strong>Phinx database migrations</strong> for better version control of the database changes.</li>
                <li>Configured <strong>Composer</strong> for managing dependencies in PHP project.</li>
                <li>Hands on experience working with <strong>SVN, Git</strong> source control software’s.</li>
                <li>Utilized Jenkins CI configured for <strong>lint</strong> checking, <strong>unit tests</strong> and run migrations. </li>
            </Typography>
          </ul>
        </section>
        <section>
          <div>
              <Typography>
                  <strong>Software Developer</strong>
              </Typography>
          </div>
          <div>
            <Typography>
                <span>
                  <strong>Paycom, OKC, OK</strong>&nbsp;&nbsp;(February 2014 - July 2017)
                </span>
            </Typography>
          </div>
          <ul>
              <Typography>
                  <li>Developed wizard for an entire module and incorporated on the fly additional screens using <strong>AJAX</strong> calls and <strong>promises</strong> for best user experience, and <strong>Twitter Bootstrap framework</strong> for responsive web applications.</li>
                  <li>Refactored and developed code by using Object Oriented Programming concepts, design patterns, separation of concerns, <strong>Dependency Injection</strong> in <strong>Zend & Symfony MVC frameworks</strong>.</li>
                  <li>Improved the response time of SQL queries run on payroll data by 30% using Indexes, optimizing table scans and other techniques.</li>
                  <li>Utilized <strong>Memcached</strong> caching system and Page Load Optimization techniques such as image size optimization, minification of JavaScript’s to speed up the dynamic web pages.</li>
                  <li>Added validation to the forms using <strong>AngularJS</strong> and made asynchronous calls to the server to fetch information.</li>
                  <li>Used <strong>Doctrine</strong> Database Abstraction Layer to execute queries and other database actions.</li>
                  <li>Utilized <strong>Twig Templates</strong> to manipulate front end logic and to create views using <strong>HTML5 & CSS3</strong>.</li>
                  <li>Integrated 3rd party JavaScript libraries <strong>HightCharts, Data Tables API</strong> to create interactive charts and add advanced interaction controls to the tables respectively.</li>
                  <li>Migrated legacy procedural code to <strong>structured MVC</strong> and implemented service oriented architecture.</li>
                  <li>Performed PHP code debugging using <strong>XDebug extension</strong>.</li>
                  <li>Created custom JavaScript libraries for wizard functionality and used across the entire system.</li>
                  <li>Focused on <strong>Test-Driven Development(TDD)</strong>, wrote functional and unit test cases leveraging PHPUnit and Behat tests.</li>
                  <li>Worked with <strong>BuildMaster</strong> to automate deployments and coordinate releases.</li>
                  <li>Used <strong>YouTrack</strong>, bug tracking system to track issues, create tasks and reports. </li>
                  <li>Utilized <strong>SOAP & REST API</strong> web services for exchanging information between heterogeneous applications.</li>
                  <li>Implemented validation and security criteria, Cross Site Scripting<strong>(XSS)</strong>, Cross Site Request Forgery <strong>(XSRF)</strong> and prepared statements required to access the web pages and present appropriate data.</li>
                  <li>Awarded <strong>MVP</strong> of the Team in <strong>Code-a-Thon</strong> competition conducted in spring 2015.</li>
              </Typography>
          </ul>
        </section>
        <section>
          <div>
              <Typography>
                <strong>Programmer Analyst</strong>
              </Typography>
          </div>
          <div>
            <Typography>
              <span>
                <strong>Cognizant Technology Solutions</strong>&nbsp;&nbsp;(August 2011 - July 2012)
              </span>
            </Typography>
          </div>
          <ul>
              <Typography>
                <li>Performed coding in <strong>C, C++, PL/SQL</strong> and <strong>JavaScript</strong>. </li>
                <li>Customized reports, graphs, dashboards were generated using <strong>Cognos 8 BI</strong>. </li>
                <li>Utilized <strong>SQL Server 2008 DBMS</strong> to query for data after loading process is complete. </li>
                <li>Created <strong>Stored Procedures</strong> and SQL queries with best performance. </li>
                <li>Generated ad hoc reports on the loaded data using Excel for testing and managerial monitoring. </li>
                <li>Used <strong>Informatica</strong> to manipulate data from various sources, using transformations and stored it to Oracle database. </li>
                <li>Presented paper on <strong>‘Data Mining: Knowledge discovery in Databases’</strong>. </li>
              </Typography>
          </ul>
        </section>
      </div>
    );
  }
}

export default WorkExperienceSS;
