import React from 'react';

class WorkExperienceSS extends React.Component {
  render() {
    return (
      <div>
        <section>
          <div>
            <b>Software Engineer II</b>
          </div>
          <div>
            <span>
              <b>SharpSpring, Gainesville, FL</b>&nbsp;&nbsp;(September 2017 - Current)
            </span>
          </div>
          <ul>
              <li>Develop code in docker environment with kubernetes managing the application.</li>
              <li>Followed PSR-2 standards for coding and PSR-4 standards for autoloading.</li>
              <li>Utilized CodeIgniter MVC framework for rapid application development and address separation of concerns.</li>
              <li>Used React Redux to create single page applications with micro service-oriented architecture.</li>
              <li>Created audit logs to capture new, deleted PieSync connections and suppressed at risk email jobs.</li>
              <li>Integrated the send email job errors to a slack channel with appropriate error messages.</li>
              <li>Attributed UTM campaigns to leads who are created by filling out form, visiting website etc.,</li>
              <li>Ran PHPUnit tests with code coverage turned on and analyzed code coverage % and CRAP values for classes and methods to extend test cases and refactor the code.</li>
              <li>Added new dynamic content to email templates and refactored the old redundant code.</li>
              <li>Fixed issues with JIRA integration in the internal application not showing cards for the filters.</li>
              <li>Created amount to deduct from credit one-time charge modals for the billing module.</li>
              <li>Used Phinx database migrations for better version control of the database changes.</li>
              <li>Utilized Jenkins CI configured for lint checking, unit tests and run migrations. </li>
          </ul>
        </section>
        <section>
          <div>
            <b>Software Developer</b>
          </div>
          <div>
            <span>
              <b>Paycom, OKC, OK</b>&nbsp;&nbsp;(February 2014 - July 2017)
            </span>
          </div>
          <ul>
            <li>Developed wizard for an entire module and incorporated on the fly additional screens using AJAX calls and promises for best user experience, and Twitter Bootstrap framework for responsive web applications.</li>
            <li>Refactored and developed code by using Object Oriented Programming concepts, design patterns, separation of concerns, Dependency Injection in Zend & Symfony MVC frameworks.</li>
            <li>Improved the response time of SQL queries run on payroll data by 30% using Indexes, optimizing table scans and other techniques.</li>
            <li>Utilized Memcached caching system and Page Load Optimization techniques such as image size optimization, minification of JavaScript’s to speed up the dynamic web pages.</li>
            <li>Added validation to the forms using AngularJS and made asynchronous calls to the server to fetch information.</li>
            <li>Used Doctrine Database Abstraction Layer to execute queries and other database actions.</li>
            <li>Utilized Twig Templates to manipulate front end logic and to create views.</li>
            <li>Integrated 3rd party JavaScript libraries HightCharts, Data Tables API to create interactive charts and add advanced interaction controls to the tables respectively.</li>
            <li>Configured Composer for managing dependencies in PHP project.</li>
            <li>Migrated legacy procedural code to structured MVC and implemented service oriented architecture.</li>
            <li>Performed PHP code debugging using XDebug extension.</li>
            <li>Created custom JavaScript libraries for wizard functionality and used across the entire system.</li>
            <li>Focused on Test-Driven Development(TDD), wrote functional and unit test cases leveraging PHPUnit and Behat tests.</li>
            <li>Worked with BuildMaster to automate deployments and coordinate releases.</li>
            <li>Used YouTrack, bug tracking system to track issues, create tasks and reports. </li>
            <li>Utilized SOAP & REST API web services for exchanging information between heterogeneous applications.</li>
            <li>Implemented validation and security criteria, Cross Site Scripting(XSS), Cross Site Request Forgery (XSRF) and prepared statements required to access the web pages and present appropriate data.</li>
            <li>Hands on experience working with SVN, Git source control software’s.</li>
            <li>Awarded MVP of the Team in Code-a-Thon competition conducted in spring 2015.</li>
          </ul>
        </section>
        <section>
          <div>
              <b>Programmer Analyst</b>
          </div>
          <div>
            <span>
              <b>Cognizant Technology Solutions</b>&nbsp;&nbsp;(August 2011 - July 2012)
            </span>
          </div>
          <ul>
            <li>Performed coding in C, C++, PL/SQL and JavaScript. </li>
            <li>Customized reports, graphs, dashboards were generated using Cognos 8 BI. </li>
            <li>Utilized SQL Server 2008 DBMS to query for data after loading process is complete. </li>
            <li>Created Stored Procedures and SQL queries with best performance. </li>
            <li>Generated ad hoc reports on the loaded data using Excel for testing and managerial monitoring. </li>
            <li>Used Informatica to manipulate data from various sources, using transformations and stored it to Oracle database. </li>
            <li>Presented paper on ‘Data Mining: Knowledge discovery in Databases’. </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default WorkExperienceSS;
