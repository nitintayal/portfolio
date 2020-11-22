import React, { Component } from 'react';

class Resume extends Component {

  render() {
    return (
      <div><section id="resume">
  {/* Education
----------------------------------------------- */}
  <div className="row education">
    <div className="three columns header-col">
      <h1><span>Education</span></h1>
    </div>
    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>BITS Pilani, Rajasthan</h3>
          <p className="info">Master of Technology in Software System <span>•</span> <em className="date">April 2019</em></p>
          <p>
            Specialization in Data Analytics and apply principles behind modern Data Analytics techniques;
             apply statistical and machine learning methods to real data;
             and build expertise in advanced Artificial Intelligence topics such as Deep Learning and Natural Language Processing
          </p>
        </div>
      </div> {/* item end */}
      <div className="row item">
        <div className="twelve columns">
          <h3>SKIT Jaipur, Rajasthan</h3>
          <p className="info">Bachelor of Technology in Electronics and Communications <span>•</span> <em className="date">June 2012</em></p>
          <p>
            Engineering Knowledge<span> • </span>Problem Analysis<span> • </span>Design/development of solutions
            <span> • </span>Conduct investigations of complex problems<span> • </span>Modern tool usage
            <span> • </span>Individual and team work
            <span> • </span>Ethics
            <span> • </span>Project management and finance
            <span> • </span>Life-long learning
          </p>
        </div>
      </div> {/* item end */}
      <div className="row item">
        <div className="twelve columns">
          <h3>Gurukul Grammar, Guwahati</h3>
          <p className="info">High School <span>•</span> <em className="date">July 2007</em></p>
          <p>
            Time-Management
            <span> • </span>Computer Skills- C,C++
            <span> • </span>Advanced Mathematics
            <span> • </span>Physics
            <span> • </span>Chemistry
            <span> • </span>
          </p>
        </div>
      </div> {/* item end */}
    </div> {/* main-col end */}
  </div> {/* End Education */}
  {/* Work
----------------------------------------------- */}
  <div className="row work">
    <div className="three columns header-col">
      <h1><span>Work</span></h1>
    </div>
    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>CMS IT Services </h3>
          <p className="info"> Senior Software Engineer<span>•</span> <em className="date">October 2017 – Present </em></p>
          <p>
            	Working as a Team Lead and System Integrator for integration of applications with NCRB and other stakeholders.
            And as a Data Analyst for visualization of reports for predictive policing.
          </p>
        </div>
      </div> {/* item end */}
      <div className="row item">
        <div className="twelve columns">
          <h3>HCL Technologies </h3>
          <p className="info">Senior Engineer <span>•</span> <em className="date">October 2015 – October 2017</em></p>
          <p>
            	Worked as a System Integrator for development of modules as per state requirement.
            Support and handle the resources in involvement of project.
          </p>
        </div>
      </div> {/* item end */}
      <div className="row item">
        <div className="twelve columns">
          <h3>Tata Consultancy Services</h3>
          <p className="info">Assistant System Engineer <span>•</span> <em className="date">January 2013 – September 2015</em></p>
          <p>
            	Designed and developed production change requirement involving database design for the application.
            Setting up and preparing test environment for UAT phase.
          </p>
        </div>
      </div> {/* item end */}
    </div> {/* main-col end */}
  </div> {/* End Work */}
  {/* Skills
----------------------------------------------- */}
  <div className="row skill">
    <div className="three columns header-col">
      <h1><span>Skills</span></h1>
    </div>
    <div className="nine columns main-col">
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
        voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt.
      </p>
      <div className="bars">
        <ul className="skills">
          <li><span className="bar-expand photoshop" /><em>Mobile App Development</em></li>
          <li><span className="bar-expand illustrator" /><em>Web Services- JSON, XML, REST Web API.</em></li>
          <li><span className="bar-expand wordpress" /><em>ASP.Net,MVC Framework, LINQ, Entity Framework, AJAX.</em></li>
          <li><span className="bar-expand css" /><em>MS SQL Server, mySQL, Sqlite</em></li>
          <li><span className="bar-expand html5" /><em>Node Js, React JS, JavaScript, JQuery</em></li>
          <li><span className="bar-expand css" /><em>SSRS</em></li>
          <li><span className="bar-expand jquery" /><em>Android Studio, MS Visual Studio</em></li>
          <li><span className="bar-expand jquery" /><em>Cloud- AWS ,GCP</em></li>
        </ul>
      </div>{/* end skill-bars */}
    </div> {/* main-col end */}
  </div> {/* End skills */}
</section> {/* Resume Section End*/}
</div>
    );
  }

}

export default Resume;
