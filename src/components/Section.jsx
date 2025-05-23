import VideoThumb from "../assets/images/video-thumb.jpg";
import happyClient1 from "../assets/images/happyclient-01.jpg";

function Section() {
  return (
    <>
      {/* Section Area Start */}
      <div className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 align-self-center">
              <div className="caption header-text">
                <h6>SEO DIGITAL AGENCY</h6>
                <div className="line-dec"></div>
                <h4>
                  Discover More <em>About Us</em>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
                <div className="main-button">
                  <a href="#">Discover More</a>
                </div>
                <span>or</span>
                <div className="second-button">
                  <a href="#">Check our FAQs</a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 align-self-center">
              <img src={VideoThumb} alt="Agency visual" />
            </div>
          </div>
        </div>
      </div>

      <div className="video-info section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="video-thumb">
                <img src={VideoThumb} alt="Video thumbnail" />
                <a href="http://youtube.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-play"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="section-heading">
                <h2>Detailed Information On What We Do &amp; Who We Are</h2>
                <div className="line-dec"></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore dolor.
                </p>
              </div>
              <div className="skills">
                <div className="skill-slide marketing">
                  <div className="fill"></div>
                  <h6>SEO Marketing</h6>
                  <span>90%</span>
                </div>
                <div className="skill-slide digital">
                  <div className="fill"></div>
                  <h6>Digital Marketing</h6>
                  <span>80%</span>
                </div>
                <div className="skill-slide media">
                  <div className="fill"></div>
                  <h6>Social Media Management</h6>
                  <span>95%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="happy-clients section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>
                  Our 4 Steps <em>To Success</em> &amp; <span>Happy Clients</span>
                </h2>
                <div className="line-dec"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="naccs">
                <div className="tabs">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="menu">
                        <div className="active"><span>Project Introduction</span></div>
                        <div><span>Work Development</span></div>
                        <div><span>Data Analysis</span></div>
                        <div className="last-item"><span>Project Finishing</span></div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <ul className="nacc">
                        <li className="active">
                          <div>
                            <div className="row">
                              <div className="col-lg-7">
                                <h4>Best CSS Templates for you</h4>
                                <div className="line-dec"></div>
                                <p>
                                  Tale is the best SEO agency website template using
                                  Bootstrap v5.2.2 CSS for your company. It is a free
                                  download provided by TemplateMo. There are 3 HTML
                                  pages, <a href="index.html">Home</a>, <a href="about.html">About</a>, and <a href="faqs.html">FAQ</a>.
                                </p>
                                <div className="info">
                                  <span>Website Design</span>
                                  <span>User Interface</span>
                                  <span>User Experience</span>
                                  <span className="last-span">Digital Agency</span>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit, sed do eiusmod tempor incididunt ut labore
                                  et dolore dolor dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod.
                                </p>
                              </div>
                              <div className="col-lg-5 align-self-center">
                                <img src={happyClient1} alt="Happy client" />
                              </div>
                            </div>
                          </div>
                        </li>
                        {/* Additional tabs can be added here */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cta section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h4>
                Are You Ready To Work &amp; Develop With Us ?<br />
                Don't Hesitate &amp; Contact Us !
              </h4>
            </div>
            <div className="col-lg-4">
              <div className="main-button">
                <a href="#">Contact Us Now!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section Area End */}
    </>
  );
}

export default Section;