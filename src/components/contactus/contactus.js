import React, { Component } from 'react';

class ContactUs extends Component {

  render() {
    return (
      <section id="contact">
  <div className="row section-head">
    <div className="two columns header-col">
      <h1><span>Get In Touch.</span></h1>
    </div>
    <div className="ten columns">
      <p className="lead">Drop a message to me.
      </p>
    </div>
  </div>
  <div className="row">
    <div className="eight columns">
      {/* form */}
      <form action method="post" id="contactForm" name="contactForm">
        <fieldset>
          <div>
            <label htmlFor="contactName">Name <span className="required">*</span></label>
            <input type="text" defaultValue size={35} id="contactName" name="contactName" />
          </div>
          <div>
            <label htmlFor="contactEmail">Email <span className="required">*</span></label>
            <input type="text" defaultValue size={35} id="contactEmail" name="contactEmail" />
          </div>
          <div>
            <label htmlFor="contactSubject">Subject</label>
            <input type="text" defaultValue size={35} id="contactSubject" name="contactSubject" />
          </div>
          <div>
            <label htmlFor="contactMessage">Message <span className="required">*</span></label>
            <textarea cols={50} rows={15} id="contactMessage" name="contactMessage" defaultValue={""} />
          </div>
          <div>
            <button className="submit">Submit</button>
            <span id="image-loader">
              <img alt="" src="images/loader.gif" />
            </span>
          </div>
        </fieldset>
      </form> {/* Form End */}
      {/* contact-warning */}
      <div id="message-warning"> Error boy</div>
      {/* contact-success */}
      <div id="message-success">
        <i className="fa fa-check" />Your message was sent, thank you!<br />
      </div>
    </div>
    <aside className="four columns footer-widgets">
      <div className="widget widget_contact">
        <h4>Address and Phone</h4>
        <p className="address">
          <span>Nitin Tayal</span><br />
          <span>M G Road, Ward No. 2<br />
            Rangapara , Sonitpur,<br /> Assam, India - 784505
          </span><br />
          <span>8879947125</span><br />
          <span>er.ntayal@gmail.com</span>
        </p>
      </div>
      <div className="widget widget_tweets">
        <h4 className="widget-title">Latest Tweets</h4>
        <ul id="twitter">
          <li>
        <blockquote class="twitter-tweet"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/StayHealthy?src=hash&amp;ref_src=twsrc%5Etfw">#StayHealthy</a> <a href="https://twitter.com/hashtag/StayFit?src=hash&amp;ref_src=twsrc%5Etfw">#StayFit</a> <a href="https://twitter.com/hashtag/lifequotes?src=hash&amp;ref_src=twsrc%5Etfw">#lifequotes</a> <a href="https://t.co/WTsanSun9l">pic.twitter.com/WTsanSun9l</a></p>&mdash; NITIN TAYAL (@nitin__tayal) <a href="https://twitter.com/nitin__tayal/status/1291287000327139328?ref_src=twsrc%5Etfw">August 6, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </li>
          <li>
            <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Sleep is the best meditation. We may transcend this material world when we realise - &quot;I am not the Body nor the Mind&quot; everyday before sleep. <a href="https://twitter.com/hashtag/HealthyLife?src=hash&amp;ref_src=twsrc%5Etfw">#HealthyLife</a> <a href="https://twitter.com/hashtag/GoodSleep?src=hash&amp;ref_src=twsrc%5Etfw">#GoodSleep</a> <a href="https://twitter.com/hashtag/insomnia?src=hash&amp;ref_src=twsrc%5Etfw">#insomnia </a><a href="https://t.co/xyDHRcA70v">https://t.co/xyDHRcA70v</a></p>&mdash; NITIN TAYAL (@nitin__tayal) <a href="https://twitter.com/nitin__tayal/status/1282754258027180034?ref_src=twsrc%5Etfw">July 13, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
          </li>
        </ul>
      </div>
    </aside>
  </div>
</section>

    );
  }

}

export default ContactUs;
