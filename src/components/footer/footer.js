import React, { Component } from 'react';

class Footer extends Component {

  render() {
    return (
      <footer>
  <div className="row">
    <div className="twelve columns">
      <ul className="social-links">
      <li><a href="https://www.linkedin.com/in/nitin-tayal-48693437/"><i className="fa fa-linkedin" /></a></li>
      <li><a href="#"><i className="fa fa-facebook" /></a></li>
      <li><a href="https://twitter.com/nitin__tayal"><i className="fa fa-twitter" /></a></li>
      <li><a href="#"><i className="fa fa-google-plus" /></a></li>
      {/* <li><a href="#"><i className="fa fa-instagram" /></a></li>
    {/*   <li><a href="#"><i className="fa fa-dribbble" /></a></li> */}
        <li><a href="#"><i className="fa fa-skype" /></a></li>

      </ul>
      <ul className="copyright">
        <li>© Copyright </li>
        <li>Design by <a title="omsitsolutions" href="http://www.omsitsolutions.com/">OMS IT SOLUTIONS</a></li>
      </ul>
    </div>
    <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
  </div>
</footer>

    );
  }

}

export default Footer;
