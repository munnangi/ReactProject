import React from 'react';
import Typography from '@material-ui/core/Typography';

class WorkExperienceSS extends React.Component {
  render() {
    return (
      <div>
        <section>
          <div>
              <Typography>
                  <b>Software Engineer II</b>
              </Typography>
          </div>
          <div>
              <Typography>
                  <span>
                    <b>SharpSpring, Gainesville, FL</b>&nbsp;&nbsp;(September 2017 - Current)
                  </span>
              </Typography>
          </div>
          <ul>
            <Typography>
                <li>Develop code in <b>docker</b> environment with <b>kubernetes</b> managing the application.</li>
                <li>Followed <b>PSR-2</b> standards for coding and PSR-4 standards for autoloading.</li>
                <li>Utilized <b>CodeIgniter MVC</b> framework for rapid application development and address separation of concerns.</li>
                <li>Used <b>React Redux</b> to create single page applications with <b>micro service-oriented architecture</b>.</li>
                <li>Added functionality to upload images using <b>Antd component</b> and updated backend and local storage through <b>GraphQL</b> query mutation via <b>Apollo Client</b>.</li>
                <li>Created audit logs to capture new, deleted PieSync connections and suppressed at risk email jobs.</li>
                <li>Integrated the send email job errors to a slack channel with appropriate error messages.</li>
                <li>Attributed UTM campaigns to leads who are created by filling out form, visiting website etc.,</li>
                <li>Ran <b>PHPUnit tests</b> with code coverage turned on and analyzed code coverage % and CRAP values for classes and methods to extend test cases and refactor the code.</li>
                <li>Added new dynamic content to email templates and refactored the old redundant code.</li>
                <li>Fixed issues with <b>JIRA integration</b> in the internal application not showing cards for the filters.</li>
                <li>Created amount to deduct from credit one-time charge modals for the billing module.</li>
                <li>Used <b>Phinx database migrations</b> for better version control of the database changes.</li>
                <li>Configured <b>Composer</b> for managing dependencies in PHP project.</li>
                <li>Hands on experience working with <b>SVN, Git</b> source control software’s.</li>
                <li>Utilized Jenkins CI configured for <b>lint</b> checking, <b>unit tests</b> and run migrations. </li>
            </Typography>
          </ul>
        </section>
        <section>
          <div>
              <Typography>
                  <b>Software Developer</b>
              </Typography>
          </div>
          <div>
            <Typography>
                <span>
                  <b>Paycom, OKC, OK</b>&nbsp;&nbsp;(February 2014 - July 2017)
                </span>
            </Typography>
          </div>
          <ul>
              <Typography>
                  <li>Developed wizard for an entire module and incorporated on the fly additional screens using <b>AJAX</b> calls and <b>promises</b> for best user experience, and <b>Twitter Bootstrap framework</b> for responsive web applications.</li>
                  <li>Refactored and developed code by using Object Oriented Programming concepts, design patterns, separation of concerns, <b>Dependency Injection</b> in <b>Zend & Symfony MVC frameworks</b>.</li>
                  <li>Improved the response time of SQL queries run on payroll data by 30% using Indexes, optimizing table scans and other techniques.</li>
                  <li>Utilized <b>Memcached</b> caching system and Page Load Optimization techniques such as image size optimization, minification of JavaScript’s to speed up the dynamic web pages.</li>
                  <li>Added validation to the forms using <b>AngularJS</b> and made asynchronous calls to the server to fetch information.</li>
                  <li>Used <b>Doctrine</b> Database Abstraction Layer to execute queries and other database actions.</li>
                  <li>Utilized <b>Twig Templates</b> to manipulate front end logic and to create views.</li>
                  <li>Integrated 3rd party JavaScript libraries <b>HightCharts, Data Tables API</b> to create interactive charts and add advanced interaction controls to the tables respectively.</li>
                  <li>Migrated legacy procedural code to <b>structured MVC</b> and implemented service oriented architecture.</li>
                  <li>Performed PHP code debugging using <b>XDebug extension</b>.</li>
                  <li>Created custom JavaScript libraries for wizard functionality and used across the entire system.</li>
                  <li>Focused on <b>Test-Driven Development(TDD)</b>, wrote functional and unit test cases leveraging PHPUnit and Behat tests.</li>
                  <li>Worked with <b>BuildMaster</b> to automate deployments and coordinate releases.</li>
                  <li>Used <b>YouTrack</b>, bug tracking system to track issues, create tasks and reports. </li>
                  <li>Utilized <b>SOAP & REST API</b> web services for exchanging information between heterogeneous applications.</li>
                  <li>Implemented validation and security criteria, Cross Site Scripting(XSS), Cross Site Request Forgery (XSRF) and prepared statements required to access the web pages and present appropriate data.</li>
                  <li>Awarded <b>MVP</b> of the Team in Code-a-Thon competition conducted in spring 2015.</li>
              </Typography>
          </ul>
        </section>
        <section>
          <div>
              <Typography>
                <b>Programmer Analyst</b>
              </Typography>
          </div>
          <div>
            <Typography>
              <span>
                <b>Cognizant Technology Solutions</b>&nbsp;&nbsp;(August 2011 - July 2012)
              </span>
            </Typography>
          </div>
          <ul>
              <Typography>
                <li>Performed coding in <b>C, C++, PL/SQL</b> and <b>JavaScript</b>. </li>
                <li>Customized reports, graphs, dashboards were generated using <b>Cognos 8 BI</b>. </li>
                <li>Utilized <b>SQL Server 2008 DBMS</b> to query for data after loading process is complete. </li>
                <li>Created <b>Stored Procedures</b> and SQL queries with best performance. </li>
                <li>Generated ad hoc reports on the loaded data using Excel for testing and managerial monitoring. </li>
                <li>Used <b>Informatica</b> to manipulate data from various sources, using transformations and stored it to Oracle database. </li>
                <li>Presented paper on <b>‘Data Mining: Knowledge discovery in Databases’</b>. </li>
              </Typography>
          </ul>
        </section>
      </div>
    );
  }
}

export default WorkExperienceSS;
