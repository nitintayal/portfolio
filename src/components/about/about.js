import React, { Component } from 'react';

class About extends Component {

  render() {
    return (
      <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src="images/profilepic.jpg" alt="" />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>
          <p>I’m an experienced Software professional having more than 7 years of industry experience and looking to continue my career as Data Analytics Expert in the world of technology to make our planet better.
I have excellent analytical & problem solving skills, as well as an ability converting requirements into exciting solutions.

          </p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>Nitin Tayal</span><br />
                <span>M G Road, Ward No. 2<br />
                  Rangapara , Sonitpur,<br /> Assam, India - 784505
                </span><br />
                <span>8879947125</span><br />
                <span>er.ntayal@gmail.com</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
              </p>
            </div>
          </div> {/* end row */}
        </div> {/* end .main-col */}
      </div>
    </section>


    );
  }

}

export default About;
