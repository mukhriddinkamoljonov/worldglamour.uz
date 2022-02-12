import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <div>
      <div id="preloader">
        <div id="status">&nbsp;</div>
      </div>
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navigation"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="index.html">
              <img src="assets/img/icon/logo.png" alt="" />
            </a>
            <span className="header-title">World Glamour Tour</span>
          </div>

          <div className="collapse navbar-collapse yamm" id="navigation">
            <div className="button navbar-right">
              <form action="" className="form-inline">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Key word"
                  />
                </div>
                <button className="btn search-btn" type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </form>
            </div>
            <ul className="main-nav nav navbar-nav navbar-right">
              <li className="dropdown ymm-sw" data-wow-delay="0.1s">
                <a
                  href="index.html"
                  className="dropdown-toggle active"
                  data-toggle="dropdown"
                  data-hover="dropdown"
                  data-delay="200"
                >
                  Shaharlar <b className="caret"></b>
                </a>
                <ul className="dropdown-menu navbar-nav">
                  <li>
                    <a href="./index-2.html">Toshkent</a>
                  </li>
                  <li>
                    <a href="./index-3.html">Buxoro</a>
                  </li>
                  <li>
                    <a href="./index-4.html">Xiva</a>
                  </li>
                  <li>
                    <a href="./index-5.html">Xorazim</a>
                  </li>
                </ul>
              </li>

              <li className="wow fadeInDown" data-wow-delay="0.2s">
                <a className="" href="properties.html">
                  Sayyohlar uchun
                </a>
              </li>
              <li className="wow fadeInDown" data-wow-delay="0.3s">
                <a className="" href="./property.html">
                  Biz haqimizda
                </a>
              </li>
              <li className="dropdown yamm-fw" data-wow-delay="0.4s">
                <a
                  href="/"
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  data-hover="dropdown"
                  data-delay="200"
                >
                  Template <b class="caret"></b>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <div className="yamm-content">
                      <div className="row">
                        <div className="col-sm-3">
                          {/*<h5>Home pages</h5>*/}
                          <ul>
                            <li>
                              <a href="index.html">Toshkent</a>
                            </li>
                            <li>
                              <a href="index-2.html">Samarqand</a>
                            </li>
                            <li>
                              <a href="index-3.html">Buxoro</a>
                            </li>
                            <li>
                              <a href="index-4.html">Xiva</a>
                            </li>
                            <li>
                              <a href="index-5.html">Shahrisabz </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-3">
                          {/*<h5>Pages and blog</h5>*/}
                          <ul>
                            <li>
                              <a href="blog.html">Mo'ynoq</a>
                            </li>
                            <li>
                              <a href="single.html">Zomin</a>
                            </li>
                            <li>
                              <a href="single-right.html">Blog Post (Right)</a>
                            </li>
                            <li>
                              <a href="single-left.html">Blog Post (left)</a>
                            </li>
                            <li>
                              <a href="contact.html">Contact style (1)</a>
                            </li>
                            <li>
                              <a href="contact-3.html">Contact style (2)</a>
                            </li>
                            <li>
                              <a href="contact_3.html">Contact style (3)</a>
                            </li>
                            <li>
                              <a href="faq.html">FAQ page</a>
                            </li>
                            <li>
                              <a href="404.html">404 page</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-3">
                          <h5>Property</h5>
                          <ul>
                            <li>
                              <a href="property-1.html">
                                Property pages style (1)
                              </a>
                            </li>
                            <li>
                              <a href="property-2.html">
                                Property pages style (2)
                              </a>
                            </li>
                            <li>
                              <a href="property-3.html">
                                Property pages style (3)
                              </a>
                            </li>
                          </ul>

                          <h5>Properties list</h5>
                          <ul>
                            <li>
                              <a href="properties.html">
                                Properties list style (1)
                              </a>
                            </li>
                            <li>
                              <a href="properties-2.html">
                                Properties list style (2)
                              </a>
                            </li>
                            <li>
                              <a href="properties-3.html">
                                Properties list style (3)
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-3">
                          <h5>Property process</h5>
                          <ul>
                            <li>
                              <a href="submit-property.html">Submit - step 1</a>
                            </li>
                            <li>
                              <a href="submit-property.html">Submit - step 2</a>
                            </li>
                            <li>
                              <a href="submit-property.html">Submit - step 3</a>
                            </li>
                          </ul>
                          <h5>User account</h5>
                          <ul>
                            <li>
                              <a href="register.html">Register / login</a>
                            </li>
                            <li>
                              <a href="user-properties.html">Your properties</a>
                            </li>
                            <li>
                              <a href="submit-property.html">Submit property</a>
                            </li>
                            <li>
                              <a href="change-password.html">Change password</a>
                            </li>
                            <li>
                              <a href="user-profile.html">Your profile</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="slider-area">
        <div className="slider">
          <div id="bg-slider" className="owl-carousel owl-theme">
            <div className="item">
              <img src="assets/img/slide1/slider-image-1.jpg" alt="GTA V" />
            </div>
            <div className="item">
              <img
                src="assets/img/slide1/slider-image-2.jpg"
                alt="The Last of us"
              />
            </div>
            <div className="item">
              <img src="assets/img/slide1/slider-image-4.jpg" alt="GTA V" />
            </div>
          </div>
        </div>
        <div className="slider-content">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 col-sm-12">
              <h2 className="header-title-per">
                Sayoxatni biz bilan mazmunli o'tkazing!
              </h2>
              <h4 className="header-title-simple">
                Eʼtiborga molik joylarni, insonlar hayoti va hodisalar
                to‘g‘risida eng qiziqarli maʼlumotlarni siz biz orqali
                topishingiz mumkin!
              </h4>
              {/* <div className="search-form wow pulse" data-wow-delay="0.8s">
                <form action="" className="form-inline">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Key word"
                    />
                  </div>
                  <button className="btn search-btn" type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div
        className="content-area home-area-1 recent-property"
        style={{ backgroundColor: "#fcfcfc", paddingBottom: " 55px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1 col-sm-12 text-center page-title">
              <h2>Top submitted property</h2>
              <p>
                Nulla quis dapibus nisl. Suspendisse ultricies commodo arcu nec
                pretium. Nullam sed arcu ultricies .
              </p>
            </div>
          </div>

          <div className="row">
            <div className="proerty-th">
              <div className="col-sm-6 col-md-3 p0">
                <div className="box-two proerty-item">
                  <div className="item-thumb">
                    <a href="property-1.html">
                      <img src="assets/img/demo/property-1.jpg" alt="title" />
                    </a>
                  </div>
                  <div className="item-entry overflow">
                    <h5>
                      <a href="property-1.html">Super nice villa </a>
                    </h5>
                    <div className="dot-hr"></div>
                    <span className="pull-left">
                      <b>Area :</b> 120m{" "}
                    </span>
                    <span className="proerty-price pull-right">$ 300,000</span>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-3 p0">
                <div className="box-two proerty-item">
                  <div className="item-thumb">
                    <a href="property-2.html">
                      <img src="assets/img/demo/property-2.jpg" alt="title" />
                    </a>
                  </div>
                  <div className="item-entry overflow">
                    <h5>
                      <a href="property-2.html">Super nice villa </a>
                    </h5>
                    <div className="dot-hr"></div>
                    <span className="pull-left">
                      <b>Area :</b> 120m{" "}
                    </span>
                    <span className="proerty-price pull-right">$ 300,000</span>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-3 p0">
                <div className="box-two proerty-item">
                  <div className="item-thumb">
                    <a href="property-3.html">
                      <img src="assets/img/demo/property-3.jpg" alt="title" />
                    </a>
                  </div>
                  <div className="item-entry overflow">
                    <h5>
                      <a href="property-3.html">Super nice villa </a>
                    </h5>
                    <div className="dot-hr"></div>
                    <span className="pull-left">
                      <b>Area :</b> 120m{" "}
                    </span>
                    <span className="proerty-price pull-right">$ 300,000</span>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-3 p0">
                <div className="box-two proerty-item">
                  <div className="item-thumb">
                    <a href="property-1.html">
                      <img src="assets/img/demo/property-4.jpg" alt="title" />
                    </a>
                  </div>
                  <div className="item-entry overflow">
                    <h5>
                      <a href="property-1.html">Super nice villa </a>
                    </h5>
                    <div className="dot-hr"></div>
                    <span className="pull-left">
                      <b>Area :</b> 120m{" "}
                    </span>
                    <span className="proerty-price pull-right">$ 300,000</span>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-3 p0">
                <div className="box-two proerty-item">
                  <div className="item-thumb">
                    <a href="property-3.html">
                      <img src="assets/img/demo/property-2.jpg" alt="title" />
                    </a>
                  </div>
                  <div className="item-entry overflow">
                    <h5>
                      <a href="property-3.html">Super nice villa </a>
                    </h5>
                    <div className="dot-hr"></div>
                    <span className="pull-left">
                      <b>Area :</b> 120m{" "}
                    </span>
                    <span className="proerty-price pull-right">$ 300,000</span>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-3 p0">
                <div className="box-two proerty-item">
                  <div className="item-thumb">
                    <a href="property-2.html">
                      <img src="assets/img/demo/property-4.jpg" alt="title" />
                    </a>
                  </div>
                  <div className="item-entry overflow">
                    <h5>
                      <a href="property-2.html">Super nice villa </a>
                    </h5>
                    <div className="dot-hr"></div>
                    <span className="pull-left">
                      <b>Area :</b> 120m{" "}
                    </span>
                    <span className="proerty-price pull-right">$ 300,000</span>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-3 p0">
                <div className="box-two proerty-item">
                  <div className="item-thumb">
                    <a href="property-1.html">
                      <img src="assets/img/demo/property-3.jpg" alt="title" />
                    </a>
                  </div>
                  <div className="item-entry overflow">
                    <h5>
                      <a href="property-1.html">Super nice villa </a>
                    </h5>
                    <div className="dot-hr"></div>
                    <span className="pull-left">
                      <b>Area :</b> 120m{" "}
                    </span>
                    <span className="proerty-price pull-right">$ 300,000</span>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-3 p0">
                <div className="box-tree more-proerty text-center">
                  <div className="item-tree-icon">
                    <i className="fa fa-th"></i>
                  </div>
                  <div className="more-entry overflow">
                    <h5>
                      <a href="property-1.html">CAN'T DECIDE ? </a>
                    </h5>
                    <h5 className="tree-sub-ttl">Show all properties</h5>
                    <button
                      className="btn border-btn more-black"
                      value="All properties"
                    >
                      All properties
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Welcome-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12 Welcome-entry col-sm-12">
              <div className="col-md-5 col-md-offset-2 col-sm-6 col-xs-12">
                <div
                  className="welcome_text wow fadeInLeft"
                  data-wow-delay="0.3s"
                  data-wow-offset="100"
                >
                  <div className="row">
                    <div className="col-md-10 col-md-offset-1 col-sm-12 text-center page-title">
                      <h2>GARO ESTATE</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-sm-6 col-xs-12">
                <div
                  className="welcome_services wow fadeInRight"
                  data-wow-delay="0.3s"
                  data-wow-offset="100"
                >
                  <div className="row">
                    <div className="col-xs-6 m-padding">
                      <div className="welcome-estate">
                        <div className="welcome-icon">
                          <i className="pe-7s-home pe-4x"></i>
                        </div>
                        <h3>Any property</h3>
                      </div>
                    </div>
                    <div className="col-xs-6 m-padding">
                      <div className="welcome-estate">
                        <div className="welcome-icon">
                          <i className="pe-7s-users pe-4x"></i>
                        </div>
                        <h3>More Clients</h3>
                      </div>
                    </div>

                    <div className="col-xs-12 text-center">
                      <i className="welcome-circle"></i>
                    </div>

                    <div className="col-xs-6 m-padding">
                      <div className="welcome-estate">
                        <div className="welcome-icon">
                          <i className="pe-7s-notebook pe-4x"></i>
                        </div>
                        <h3>Easy to use</h3>
                      </div>
                    </div>
                    <div className="col-xs-6 m-padding">
                      <div className="welcome-estate">
                        <div className="welcome-icon">
                          <i className="pe-7s-help2 pe-4x"></i>
                        </div>
                        <h3>Any help</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div
        className="testimonial-area recent-property"
        style={{ backgroundColor: "#fcfcfc", paddingBottom: "15px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1 col-sm-12 text-center page-title">
              <h2>Our Customers Said</h2>
            </div>
          </div>

          <div className="row">
            <div className="row testimonial">
              <div className="col-md-12">
                <div id="testimonial-slider">
                  <div className="item">
                    <div className="client-text">
                      <p>
                        Nulla quis dapibus nisl. Suspendisse llam sed arcu
                        ultried arcu ultricies !
                      </p>
                      <h4>
                        <strong>Ohidul Islam, </strong>
                        <i>Web Designer</i>
                      </h4>
                    </div>
                    <div
                      className="client-face wow fadeInRight"
                      data-wow-delay=".9s"
                    >
                      <img src="assets/img/client-face1.png" alt="" />
                    </div>
                  </div>
                  <div className="item">
                    <div className="client-text">
                      <p>
                        Nulla quis dapibus nisl. Suspendisse llam sed arcu
                        ultried arcu ultricies !
                      </p>
                      <h4>
                        <strong>Ohidul Islam, </strong>
                        <i>Web Designer</i>
                      </h4>
                    </div>
                    <div className="client-face">
                      <img src="assets/img/client-face2.png" alt="" />
                    </div>
                  </div>
                  <div className="item">
                    <div className="client-text">
                      <p>
                        Nulla quis dapibus nisl. Suspendisse llam sed arcu
                        ultried arcu ultricies !
                      </p>
                      <h4>
                        <strong>Ohidul Islam, </strong>
                        <i>Web Designer</i>
                      </h4>
                    </div>
                    <div className="client-face">
                      <img src="assets/img/client-face1.png" alt="" />
                    </div>
                  </div>
                  <div className="item">
                    <div className="client-text">
                      <p>
                        Nulla quis dapibus nisl. Suspendisse llam sed arcu
                        ultried arcu ultricies !
                      </p>
                      <h4>
                        <strong>Ohidul Islam, </strong>
                        <i>Web Designer</i>
                      </h4>
                    </div>
                    <div className="client-face">
                      <img src="assets/img/client-face2.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="count-area">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1 col-sm-12 text-center page-title">
              <h2>You can trust Us</h2>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-12 col-xs-12 percent-blocks m-main"
              data-waypoint-scroll="true"
            >
              <div className="row">
                <div className="col-sm-3 col-xs-6">
                  <div className="count-item">
                    <div className="count-item-circle">
                      <span className="pe-7s-users"></span>
                    </div>
                    <div className="chart" data-percent="5000">
                      <h2 className="percent" id="counter">
                        0
                      </h2>
                      <h5>1 AQSh dollari , USD</h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 col-xs-6">
                  <div className="count-item">
                    <div className="count-item-circle">
                      <span className="pe-7s-home"></span>
                    </div>
                    <div className="chart" data-percent="12000">
                      <h2 className="percent" id="counter1">
                        0
                      </h2>
                      <h5>1 Rossiya rubli, RUB</h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 col-xs-6">
                  <div className="count-item">
                    <div className="count-item-circle">
                      <span className="pe-7s-flag"></span>
                    </div>
                    <div className="chart" data-percent="120">
                      <h2 className="percent" id="counter2">
                        0
                      </h2>
                      <h5>1 Yevro, EUR</h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 col-xs-6">
                  <div className="count-item">
                    <div className="count-item-circle">
                      <span className="pe-7s-graph2"></span>
                    </div>
                    <div className="chart" data-percent="5000">
                      <h2 className="percent" id="counter3">
                        5000
                      </h2>
                      <h5>1 Turkiya lirasi , TRY</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="boy-sale-area">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-10 col-sm-offset-1 col-md-offset-0 col-xs-12">
              <div className="asks-first">
                <div className="asks-first-circle">
                  <span className="fa fa-search"></span>
                </div>
                <div className="asks-first-info">
                  <h2>ARE YOU LOOKING FOR A Property?</h2>
                  <p>
                    varius od lio eget conseq uat blandit, lorem auglue comm
                    lodo nisl no us nibh mas lsa
                  </p>
                </div>
                <div className="asks-first-arrow">
                  <a href="properties.html">
                    <span className="fa fa-angle-right"></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-10 col-sm-offset-1 col-xs-12 col-md-offset-0">
              <div className="asks-first">
                <div className="asks-first-circle">
                  <span className="fa fa-usd"></span>
                </div>
                <div className="asks-first-info">
                  <h2>DO YOU WANT TO SELL A Property?</h2>
                  <p>
                    varius od lio eget conseq uat blandit, lorem auglue comm
                    lodo nisl no us nibh mas lsa
                  </p>
                </div>
                <div className="asks-first-arrow">
                  <a href="properties.html">
                    <span className="fa fa-angle-right"></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xs-12">
              <p className="asks-call">
                QUESTIONS? CALL US :
                <span className="strong"> + 3-123- 424-5700</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-area">
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6 wow fadeInRight animated">
                <div className="single-footer">
                  <h4>About us</h4>
                  <div className="footer-title-line"></div>

                  <img
                    src="assets/img/footer-logo.png"
                    alt=""
                    className="wow pulse"
                    data-wow-delay="1s"
                  />
                  <p>
                    Lorem ipsum dolor cum necessitatibus su quisquam molestias.
                    Vel unde, blanditiis.
                  </p>
                  <ul className="footer-adress">
                    <li>
                      <i className="pe-7s-map-marker strong"> </i> 9089 your
                      adress her
                    </li>
                    <li>
                      <i className="pe-7s-mail strong"> </i>{" "}
                      email@yourcompany.com
                    </li>
                    <li>
                      <i className="pe-7s-call strong"> </i> +1 908 967 5906
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 wow fadeInRight animated">
                <div className="single-footer">
                  <h4>Quick links</h4>
                  <div className="footer-title-line"></div>
                  <ul className="footer-menu">
                    <li>
                      <a href="properties.html">Properties</a>
                    </li>
                    <li>
                      <a href="/">Services</a>
                    </li>
                    <li>
                      <a href="submit-property.html">Submit property </a>
                    </li>
                    <li>
                      <a href="contact.html">Contact us</a>
                    </li>
                    <li>
                      <a href="faq.html">fqa</a>
                    </li>
                    <li>
                      <a href="faq.html">Terms </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 wow fadeInRight animated">
                <div className="single-footer">
                  <h4>Last News</h4>
                  <div className="footer-title-line"></div>
                  <ul className="footer-blog">
                    <li>
                      <div className="col-md-3 col-sm-4 col-xs-4 blg-thumb p0">
                        <a href="single.html">
                          <img
                            src="assets/img/demo/small-proerty-2.jpg"
                            alt="title"
                          />
                        </a>
                        <span className="blg-date">12-12-2016</span>
                      </div>
                      <div className="col-md-8 col-sm-8 col-xs-8 blg-entry">
                        <h6>
                          <a href="single.html">Add news functions </a>
                        </h6>
                        <p style={{ lineHeight: "17px", padding: "8px 2px" }}>
                          Lorem ipsum dolor sit amet, nulla ...
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className="col-md-3 col-sm-4 col-xs-4 blg-thumb p0">
                        <a href="single.html">
                          <img
                            src="assets/img/demo/small-proerty-2.jpg"
                            alt="title"
                          />
                        </a>
                        <span className="blg-date">12-12-2016</span>
                      </div>
                      <div className="col-md-8 col-sm-8 col-xs-8 blg-entry">
                        <h6>
                          <a href="single.html">Add news functions </a>
                        </h6>
                        <p style={{ lineHeight: "17px", padding: "8px 2px" }}>
                          Lorem ipsum dolor sit amet, nulla ...
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className="col-md-3 col-sm-4 col-xs-4 blg-thumb p0">
                        <a href="single.html">
                          <img
                            src="assets/img/demo/small-proerty-2.jpg"
                            alt="title"
                          />
                        </a>
                        <span className="blg-date">12-12-2016</span>
                      </div>
                      <div className="col-md-8 col-sm-8 col-xs-8 blg-entry">
                        <h6>
                          <a href="single.html">Add news functions </a>
                        </h6>
                        <p style={{ lineHeight: "17px", padding: "8px 2px" }}>
                          Lorem ipsum dolor sit amet, nulla ...
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 wow fadeInRight animated">
                <div className="single-footer news-letter">
                  <h4>Stay in touch</h4>
                  <div className="footer-title-line"></div>
                  <p>
                    Lorem ipsum dolor sit amet, nulla suscipit similique
                    quisquam molestias. Vel unde, blanditiis.
                  </p>

                  <form>
                    <div className="input-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="E-mail ... "
                      />
                      <span className="input-group-btn">
                        <button
                          className="btn btn-primary subscribe"
                          type="button"
                        >
                          <i className="pe-7s-paper-plane pe-2x"></i>
                        </button>
                      </span>
                    </div>
                  </form>

                  <div className="social pull-right">
                    <ul>
                      <li>
                        <a
                          className="wow fadeInUp animated"
                          href="https://twitter.com/kimarotec"
                        >
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="wow fadeInUp animated"
                          href="https://www.facebook.com/kimarotec"
                          data-wow-delay="0.2s"
                        >
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="wow fadeInUp animated"
                          href="https://plus.google.com/kimarotec"
                          data-wow-delay="0.3s"
                        >
                          <i className="fa fa-google-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="wow fadeInUp animated"
                          href="https://instagram.com/kimarotec"
                          data-wow-delay="0.4s"
                        >
                          <i className="fa fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="wow fadeInUp animated"
                          href="https://instagram.com/kimarotec"
                          data-wow-delay="0.6s"
                        >
                          <i className="fa fa-dribbble"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copy text-center">
          <div className="container">
            <div className="row">
              <div className="pull-left">
                <span>
                  (C) <a href="http://www.KimaroTec.com">KimaroTheme</a> , All
                  rights reserved 2016
                </span>
              </div>
              <div className="bottom-menu pull-right">
                <ul>
                  <li>
                    <a
                      className="wow fadeInUp animated"
                      href="/"
                      data-wow-delay="0.2s"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      className="wow fadeInUp animated"
                      href="/"
                      data-wow-delay="0.3s"
                    >
                      Property
                    </a>
                  </li>
                  <li>
                    <a
                      className="wow fadeInUp animated"
                      href="/"
                      data-wow-delay="0.4s"
                    >
                      Faq
                    </a>
                  </li>
                  <li>
                    <a
                      className="wow fadeInUp animated"
                      href="/"
                      data-wow-delay="0.6s"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
