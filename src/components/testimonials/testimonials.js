import React, { Component } from 'react';

class Testimonials extends Component {

  render() {
    return (
      <div><section id="testimonials">
  <div className="text-container">
    <div className="row">
      <div className="two columns header-col">
        <h1><span>Client Testimonials</span></h1>
      </div>
      <div className="ten columns flex-container">
        <div className="flexslider">
          <ul className="slides">
            <li>
              <blockquote>
                <p>	Quarterly Excellence Awarded  in Year 2017, 2018-2019.
                </p>
                <cite>CMS IT SERVICES</cite>
              </blockquote>
            </li> {/* slide ends */}
            <li>
              <blockquote>
                <p>It gives me immense pleasure to applause the onsite application team of HCL Technologies for CCTNS Assam Shri Nitin Tayal ...
                </p>
                <cite>Shri Anil Kumar Jha, IPS, Addl Directorate General of Police, (CID)</cite>
              </blockquote>
            </li> {/* slide ends */}
          </ul>
        </div> {/* div.flexslider ends */}
      </div> {/* div.flex-container ends */}
    </div> {/* row ends */}
  </div>  {/* text-container ends */}
</section> {/* Testimonials Section End*/}
</div>
    );
  }

}

export default Testimonials;
