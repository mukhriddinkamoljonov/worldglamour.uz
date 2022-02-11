import React from "react";

const Main = () => {
  return (
    <div>
      <div id="preloader">
        <div id="status">&nbsp;</div>
      </div>

      {/* <div class="header-connect">
        <div class="container">
          <div class="row">
            <div class="col-md-5 col-sm-8 col-xs-12">
              <div class="header-half header-call">
                <p>
                  <span>
                    <i class="pe-7s-call"></i> +998 97 214-44-01
                  </span>
                  <span>
                    <i class="pe-7s-mail"></i> your@company.com
                  </span>
                </p>
              </div>
            </div>
            <div class="col-md-2 col-md-offset-5 col-sm-3 col-sm-offset-1 col-xs-12">
              <div class="header-half header-social">
                <ul class="list-inline">
                  <li>
                    <a href="/">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i class="fa fa-vine"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i class="fa fa-dribbble"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <nav class="navbar navbar-default">
        <div class="container">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navigation"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="index.html">
              <img src="assets/img/logo.png" alt="" />
            </a>
          </div>

          <div class="collapse navbar-collapse yamm" id="navigation">
            <div class="button navbar-right">
              <button
                class="navbar-btn nav-button wow bounceInRight login"
                onclick=" window.open('register.html')"
                data-wow-delay="0.45s"
              >
                Login
              </button>
              <button
                class="navbar-btn nav-button wow fadeInRight"
                onclick=" window.open('submit-property.html')"
                data-wow-delay="0.48s"
              >
                Submit
              </button>
            </div>
            <ul class="main-nav nav navbar-nav navbar-right">
              <li class="dropdown ymm-sw" data-wow-delay="0.1s">
                <a
                  href="index.html"
                  class="dropdown-toggle active"
                  data-toggle="dropdown"
                  data-hover="dropdown"
                  data-delay="200"
                >
                  Shaharlar <b class="caret"></b>
                </a>
                <ul class="dropdown-menu navbar-nav">
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

              <li class="wow fadeInDown" data-wow-delay="0.2s">
                <a class="" href="properties.html">
                  Sayyohlar uchun
                </a>
              </li>
              <li class="wow fadeInDown" data-wow-delay="0.3s">
                <a class="" href="./property.html">
                  Biz haqimizda
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="slider-area">
        <div class="slider">
          <div id="bg-slider" class="owl-carousel owl-theme">
            <div class="item">
              <img src="assets/img/slide1/slider-image-1.jpg" alt="GTA V" />
            </div>
            <div class="item">
              <img
                src="assets/img/slide1/slider-image-2.jpg"
                alt="The Last of us"
              />
            </div>
            <div class="item">
              <img src="assets/img/slide1/slider-image-1.jpg" alt="GTA V" />
            </div>
          </div>
        </div>
        <div class="slider-content">
          <div class="row">
            <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 col-sm-12">
              <h2>property Searching Just Got So Easy</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eligendi deserunt deleniti, ullam commodi sit ipsam laboriosam
                velit adipisci quibusdam aliquam teneturo!
              </p>
              <div class="search-form wow pulse" data-wow-delay="0.8s">
                <form action="" class="form-inline">
                  <button class="btn toggle-btn" type="button">
                    <i class="fa fa-bars"></i>
                  </button>

                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Key word"
                    />
                  </div>
                  <div class="form-group">
                    <select
                      id="lunchBegins"
                      class="selectpicker"
                      data-live-search="true"
                      data-live-search-style="begins"
                      title="Select your city"
                    >
                      <option>New york, CA</option>
                      <option>Paris</option>
                      <option>Casablanca</option>
                      <option>Tokyo</option>
                      <option>Marraekch</option>
                      <option>kyoto , shibua</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <select
                      id="basic"
                      class="selectpicker show-tick form-control"
                    >
                      <option>-Status-</option>
                      <option>Rent</option>
                      <option>Boy</option>
                      <option>used</option>
                    </select>
                  </div>
                  <button class="btn search-btn" type="submit">
                    <i class="fa fa-search"></i>
                  </button>

                  <div style={{ display: "none" }} class="search-toggle">
                    <div class="search-row">
                      <div class="form-group mar-r-20">
                        <label for="price-range">Price range ($):</label>
                        <input
                          type="text"
                          class="span2"
                          value=""
                          data-slider-min="0"
                          data-slider-max="600"
                          data-slider-step="5"
                          data-slider-value="[0,450]"
                          id="price-range"
                        />
                        <br />
                        <b class="pull-left color">2000$</b>
                        <b class="pull-right color">100000$</b>
                      </div>

                      <div class="form-group mar-l-20">
                        <label for="property-geo">Property geo (m2) :</label>
                        <input
                          type="text"
                          class="span2"
                          value=""
                          data-slider-min="0"
                          data-slider-max="600"
                          data-slider-step="5"
                          data-slider-value="[50,450]"
                          id="property-geo"
                        />
                        <br />
                        <b class="pull-left color">40m</b>
                        <b class="pull-right color">12000m</b>
                      </div>
                    </div>

                    <div class="search-row">
                      <div class="form-group mar-r-20">
                        <label for="price-range">Min baths :</label>
                        <input
                          type="text"
                          class="span2"
                          value=""
                          data-slider-min="0"
                          data-slider-max="600"
                          data-slider-step="5"
                          data-slider-value="[250,450]"
                          id="min-baths"
                        />
                        <br />
                        <b class="pull-left color">1</b>
                        <b class="pull-right color">120</b>
                      </div>

                      <div class="form-group mar-l-20">
                        <label for="property-geo">Min bed :</label>
                        <input
                          type="text"
                          class="span2"
                          value=""
                          data-slider-min="0"
                          data-slider-max="600"
                          data-slider-step="5"
                          data-slider-value="[250,450]"
                          id="min-bed"
                        />
                        <br />
                        <b class="pull-left color">1</b>
                        <b class="pull-right color">120</b>
                      </div>
                    </div>
                    <br />
                    <div class="search-row">
                      <div class="form-group">
                        <div class="checkbox">
                          <label>
                            <input type="checkbox" /> Fire Place(3100)
                          </label>
                        </div>
                      </div>

                      <div class="form-group">
                        <div class="checkbox">
                          <label>
                            <input type="checkbox" /> Dual Sinks(500)
                          </label>
                        </div>
                      </div>

                      <div class="form-group">
                        <div class="checkbox">
                          <label>
                            <input type="checkbox" /> Hurricane Shutters(99)
                          </label>
                        </div>
                      </div>
                    </div>

                    <div class="search-row">
                      <div class="form-group">
                        <div class="checkbox">
                          <label>
                            <input type="checkbox" /> Swimming Pool(1190)
                          </label>
                        </div>
                      </div>

                      <div class="form-group">
                        <div class="checkbox">
                          <label>
                            <input type="checkbox" /> 2 Stories(4600)
                          </label>
                        </div>
                      </div>

                      <div class="form-group">
                        <div class="checkbox">
                          <label>
                            <input type="checkbox" /> Emergency Exit(200)
                          </label>
                        </div>
                      </div>
                    </div>

                    <div class="search-row">
                      <div class="form-group">
                        <div class="checkbox">
                          <label>
                            <input type="checkbox" /> Laundry Room(10073)
                          </label>
                        </div>
                      </div>

                      <div class="form-group">
                        <div class="checkbox">
                          <label>
                            <input type="checkbox" /> Jog Path(1503)
                          </label>
                        </div>
                      </div>

                      <div class="form-group">
                        <div class="checkbox">
                          <label>
                            <input type="checkbox" /> 26' Ceilings(1200)
                          </label>
                        </div>
                      </div>
                      <br />
                      <hr />
                    </div>
                    <button
                      class="btn search-btn prop-btm-sheaerch"
                      type="submit"
                    >
                      <i class="fa fa-search"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="content-area home-area-1 recent-property"
        style={{ backgroundColor: "#fcfcfc", paddingBottom: " 55px" }}
      >
        <div class="container">
          <div class="row">
            <div class="col-md-10 col-md-offset-1 col-sm-12 text-center page-title">
              <h2>Top submitted property</h2>
              <p>
                Nulla quis dapibus nisl. Suspendisse ultricies commodo arcu nec
                pretium. Nullam sed arcu ultricies .
              </p>
            </div>
          </div>

          <div class="row">
            <div class="proerty-th">
              <div class="col-sm-6 col-md-3 p0">
                <div class="box-two proerty-item">
                  <div class="item-thumb">
                    <a href="property-1.html">
                      <img src="assets/img/demo/property-1.jpg" alt="title" />
                    </a>
                  </div>
                  <div class="item-entry overflow">
                    <h5>
                      <a href="property-1.html">Super nice villa </a>
                    </h5>
                    <div class="dot-hr"></div>
                    <span class="pull-left">
                      <b>Area :</b> 120m{" "}
                    </span>
                    <span class="proerty-price pull-right">$ 300,000</span>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-3 p0">
                <div class="box-two proerty-item">
                  <div class="item-thumb">
                    <a href="property-2.html">
                      <img src="assets/img/demo/property-2.jpg" alt="title" />
                    </a>
                  </div>
                  <div class="item-entry overflow">
                    <h5>
                      <a href="property-2.html">Super nice villa </a>
                    </h5>
                    <div class="dot-hr"></div>
                    <span class="pull-left">
                      <b>Area :</b> 120m{" "}
                    </span>
                    <span class="proerty-price pull-right">$ 300,000</span>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-3 p0">
                <div class="box-two proerty-item">
                  <div class="item-thumb">
                    <a href="property-3.html">
                      <img src="assets/img/demo/property-3.jpg" alt="title" />
                    </a>
                  </div>
                  <div class="item-entry overflow">
                    <h5>
                      <a href="property-3.html">Super nice villa </a>
                    </h5>
                    <div class="dot-hr"></div>
                    <span class="pull-left">
                      <b>Area :</b> 120m{" "}
                    </span>
                    <span class="proerty-price pull-right">$ 300,000</span>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-3 p0">
                <div class="box-two proerty-item">
                  <div class="item-thumb">
                    <a href="property-1.html">
                      <img src="assets/img/demo/property-4.jpg" alt="title" />
                    </a>
                  </div>
                  <div class="item-entry overflow">
                    <h5>
                      <a href="property-1.html">Super nice villa </a>
                    </h5>
                    <div class="dot-hr"></div>
                    <span class="pull-left">
                      <b>Area :</b> 120m{" "}
                    </span>
                    <span class="proerty-price pull-right">$ 300,000</span>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-3 p0">
                <div class="box-two proerty-item">
                  <div class="item-thumb">
                    <a href="property-3.html">
                      <img src="assets/img/demo/property-2.jpg" alt="title" />
                    </a>
                  </div>
                  <div class="item-entry overflow">
                    <h5>
                      <a href="property-3.html">Super nice villa </a>
                    </h5>
                    <div class="dot-hr"></div>
                    <span class="pull-left">
                      <b>Area :</b> 120m{" "}
                    </span>
                    <span class="proerty-price pull-right">$ 300,000</span>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-3 p0">
                <div class="box-two proerty-item">
                  <div class="item-thumb">
                    <a href="property-2.html">
                      <img src="assets/img/demo/property-4.jpg" alt="title" />
                    </a>
                  </div>
                  <div class="item-entry overflow">
                    <h5>
                      <a href="property-2.html">Super nice villa </a>
                    </h5>
                    <div class="dot-hr"></div>
                    <span class="pull-left">
                      <b>Area :</b> 120m{" "}
                    </span>
                    <span class="proerty-price pull-right">$ 300,000</span>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-3 p0">
                <div class="box-two proerty-item">
                  <div class="item-thumb">
                    <a href="property-1.html">
                      <img src="assets/img/demo/property-3.jpg" alt="title" />
                    </a>
                  </div>
                  <div class="item-entry overflow">
                    <h5>
                      <a href="property-1.html">Super nice villa </a>
                    </h5>
                    <div class="dot-hr"></div>
                    <span class="pull-left">
                      <b>Area :</b> 120m{" "}
                    </span>
                    <span class="proerty-price pull-right">$ 300,000</span>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-3 p0">
                <div class="box-tree more-proerty text-center">
                  <div class="item-tree-icon">
                    <i class="fa fa-th"></i>
                  </div>
                  <div class="more-entry overflow">
                    <h5>
                      <a href="property-1.html">CAN'T DECIDE ? </a>
                    </h5>
                    <h5 class="tree-sub-ttl">Show all properties</h5>
                    <button
                      class="btn border-btn more-black"
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

      <div class="Welcome-area">
        <div class="container">
          <div class="row">
            <div class="col-md-12 Welcome-entry col-sm-12">
              <div class="col-md-5 col-md-offset-2 col-sm-6 col-xs-12">
                <div
                  class="welcome_text wow fadeInLeft"
                  data-wow-delay="0.3s"
                  data-wow-offset="100"
                >
                  <div class="row">
                    <div class="col-md-10 col-md-offset-1 col-sm-12 text-center page-title">
                      <h2>GARO ESTATE</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-5 col-sm-6 col-xs-12">
                <div
                  class="welcome_services wow fadeInRight"
                  data-wow-delay="0.3s"
                  data-wow-offset="100"
                >
                  <div class="row">
                    <div class="col-xs-6 m-padding">
                      <div class="welcome-estate">
                        <div class="welcome-icon">
                          <i class="pe-7s-home pe-4x"></i>
                        </div>
                        <h3>Any property</h3>
                      </div>
                    </div>
                    <div class="col-xs-6 m-padding">
                      <div class="welcome-estate">
                        <div class="welcome-icon">
                          <i class="pe-7s-users pe-4x"></i>
                        </div>
                        <h3>More Clients</h3>
                      </div>
                    </div>

                    <div class="col-xs-12 text-center">
                      <i class="welcome-circle"></i>
                    </div>

                    <div class="col-xs-6 m-padding">
                      <div class="welcome-estate">
                        <div class="welcome-icon">
                          <i class="pe-7s-notebook pe-4x"></i>
                        </div>
                        <h3>Easy to use</h3>
                      </div>
                    </div>
                    <div class="col-xs-6 m-padding">
                      <div class="welcome-estate">
                        <div class="welcome-icon">
                          <i class="pe-7s-help2 pe-4x"></i>
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
        class="testimonial-area recent-property"
        style={{ backgroundColor: "#fcfcfc", paddingBottom: "15px" }}
      >
        <div class="container">
          <div class="row">
            <div class="col-md-10 col-md-offset-1 col-sm-12 text-center page-title">
              <h2>Our Customers Said</h2>
            </div>
          </div>

          <div class="row">
            <div class="row testimonial">
              <div class="col-md-12">
                <div id="testimonial-slider">
                  <div class="item">
                    <div class="client-text">
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
                      class="client-face wow fadeInRight"
                      data-wow-delay=".9s"
                    >
                      <img src="assets/img/client-face1.png" alt="" />
                    </div>
                  </div>
                  <div class="item">
                    <div class="client-text">
                      <p>
                        Nulla quis dapibus nisl. Suspendisse llam sed arcu
                        ultried arcu ultricies !
                      </p>
                      <h4>
                        <strong>Ohidul Islam, </strong>
                        <i>Web Designer</i>
                      </h4>
                    </div>
                    <div class="client-face">
                      <img src="assets/img/client-face2.png" alt="" />
                    </div>
                  </div>
                  <div class="item">
                    <div class="client-text">
                      <p>
                        Nulla quis dapibus nisl. Suspendisse llam sed arcu
                        ultried arcu ultricies !
                      </p>
                      <h4>
                        <strong>Ohidul Islam, </strong>
                        <i>Web Designer</i>
                      </h4>
                    </div>
                    <div class="client-face">
                      <img src="assets/img/client-face1.png" alt="" />
                    </div>
                  </div>
                  <div class="item">
                    <div class="client-text">
                      <p>
                        Nulla quis dapibus nisl. Suspendisse llam sed arcu
                        ultried arcu ultricies !
                      </p>
                      <h4>
                        <strong>Ohidul Islam, </strong>
                        <i>Web Designer</i>
                      </h4>
                    </div>
                    <div class="client-face">
                      <img src="assets/img/client-face2.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div class="count-area">
        <div class="container">
          <div class="row">
            <div class="col-md-10 col-md-offset-1 col-sm-12 text-center page-title">
              <h2>You can trust Us</h2>
            </div>
          </div>
          <div class="row">
            <div
              class="col-md-12 col-xs-12 percent-blocks m-main"
              data-waypoint-scroll="true"
            >
              <div class="row">
                <div class="col-sm-3 col-xs-6">
                  <div class="count-item">
                    <div class="count-item-circle">
                      <span class="pe-7s-users"></span>
                    </div>
                    <div class="chart" data-percent="5000">
                      <h2 class="percent" id="counter">
                        0
                      </h2>
                      <h5>HAPPY CUSTOMER</h5>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3 col-xs-6">
                  <div class="count-item">
                    <div class="count-item-circle">
                      <span class="pe-7s-home"></span>
                    </div>
                    <div class="chart" data-percent="12000">
                      <h2 class="percent" id="counter1">
                        0
                      </h2>
                      <h5>Properties in stock</h5>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3 col-xs-6">
                  <div class="count-item">
                    <div class="count-item-circle">
                      <span class="pe-7s-flag"></span>
                    </div>
                    <div class="chart" data-percent="120">
                      <h2 class="percent" id="counter2">
                        0
                      </h2>
                      <h5>City registered</h5>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3 col-xs-6">
                  <div class="count-item">
                    <div class="count-item-circle">
                      <span class="pe-7s-graph2"></span>
                    </div>
                    <div class="chart" data-percent="5000">
                      <h2 class="percent" id="counter3">
                        5000
                      </h2>
                      <h5>DEALER BRANCHES</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="boy-sale-area">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-10 col-sm-offset-1 col-md-offset-0 col-xs-12">
              <div class="asks-first">
                <div class="asks-first-circle">
                  <span class="fa fa-search"></span>
                </div>
                <div class="asks-first-info">
                  <h2>ARE YOU LOOKING FOR A Property?</h2>
                  <p>
                    varius od lio eget conseq uat blandit, lorem auglue comm
                    lodo nisl no us nibh mas lsa
                  </p>
                </div>
                <div class="asks-first-arrow">
                  <a href="properties.html">
                    <span class="fa fa-angle-right"></span>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-10 col-sm-offset-1 col-xs-12 col-md-offset-0">
              <div class="asks-first">
                <div class="asks-first-circle">
                  <span class="fa fa-usd"></span>
                </div>
                <div class="asks-first-info">
                  <h2>DO YOU WANT TO SELL A Property?</h2>
                  <p>
                    varius od lio eget conseq uat blandit, lorem auglue comm
                    lodo nisl no us nibh mas lsa
                  </p>
                </div>
                <div class="asks-first-arrow">
                  <a href="properties.html">
                    <span class="fa fa-angle-right"></span>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xs-12">
              <p class="asks-call">
                QUESTIONS? CALL US :
                <span class="strong"> + 3-123- 424-5700</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-area">
        <div class="footer">
          <div class="container">
            <div class="row">
              <div class="col-md-3 col-sm-6 wow fadeInRight animated">
                <div class="single-footer">
                  <h4>About us</h4>
                  <div class="footer-title-line"></div>

                  <img
                    src="assets/img/footer-logo.png"
                    alt=""
                    class="wow pulse"
                    data-wow-delay="1s"
                  />
                  <p>
                    Lorem ipsum dolor cum necessitatibus su quisquam molestias.
                    Vel unde, blanditiis.
                  </p>
                  <ul class="footer-adress">
                    <li>
                      <i class="pe-7s-map-marker strong"> </i> 9089 your adress
                      her
                    </li>
                    <li>
                      <i class="pe-7s-mail strong"> </i> email@yourcompany.com
                    </li>
                    <li>
                      <i class="pe-7s-call strong"> </i> +1 908 967 5906
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-3 col-sm-6 wow fadeInRight animated">
                <div class="single-footer">
                  <h4>Quick links</h4>
                  <div class="footer-title-line"></div>
                  <ul class="footer-menu">
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
              <div class="col-md-3 col-sm-6 wow fadeInRight animated">
                <div class="single-footer">
                  <h4>Last News</h4>
                  <div class="footer-title-line"></div>
                  <ul class="footer-blog">
                    <li>
                      <div class="col-md-3 col-sm-4 col-xs-4 blg-thumb p0">
                        <a href="single.html">
                          <img
                            src="assets/img/demo/small-proerty-2.jpg"
                            alt="title"
                          />
                        </a>
                        <span class="blg-date">12-12-2016</span>
                      </div>
                      <div class="col-md-8 col-sm-8 col-xs-8 blg-entry">
                        <h6>
                          <a href="single.html">Add news functions </a>
                        </h6>
                        <p style={{ lineHeight: "17px", padding: "8px 2px" }}>
                          Lorem ipsum dolor sit amet, nulla ...
                        </p>
                      </div>
                    </li>

                    <li>
                      <div class="col-md-3 col-sm-4 col-xs-4 blg-thumb p0">
                        <a href="single.html">
                          <img
                            src="assets/img/demo/small-proerty-2.jpg"
                            alt="title"
                          />
                        </a>
                        <span class="blg-date">12-12-2016</span>
                      </div>
                      <div class="col-md-8 col-sm-8 col-xs-8 blg-entry">
                        <h6>
                          <a href="single.html">Add news functions </a>
                        </h6>
                        <p style={{ lineHeight: "17px", padding: "8px 2px" }}>
                          Lorem ipsum dolor sit amet, nulla ...
                        </p>
                      </div>
                    </li>

                    <li>
                      <div class="col-md-3 col-sm-4 col-xs-4 blg-thumb p0">
                        <a href="single.html">
                          <img
                            src="assets/img/demo/small-proerty-2.jpg"
                            alt="title"
                          />
                        </a>
                        <span class="blg-date">12-12-2016</span>
                      </div>
                      <div class="col-md-8 col-sm-8 col-xs-8 blg-entry">
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
              <div class="col-md-3 col-sm-6 wow fadeInRight animated">
                <div class="single-footer news-letter">
                  <h4>Stay in touch</h4>
                  <div class="footer-title-line"></div>
                  <p>
                    Lorem ipsum dolor sit amet, nulla suscipit similique
                    quisquam molestias. Vel unde, blanditiis.
                  </p>

                  <form>
                    <div class="input-group">
                      <input
                        class="form-control"
                        type="text"
                        placeholder="E-mail ... "
                      />
                      <span class="input-group-btn">
                        <button class="btn btn-primary subscribe" type="button">
                          <i class="pe-7s-paper-plane pe-2x"></i>
                        </button>
                      </span>
                    </div>
                  </form>

                  <div class="social pull-right">
                    <ul>
                      <li>
                        <a
                          class="wow fadeInUp animated"
                          href="https://twitter.com/kimarotec"
                        >
                          <i class="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="wow fadeInUp animated"
                          href="https://www.facebook.com/kimarotec"
                          data-wow-delay="0.2s"
                        >
                          <i class="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="wow fadeInUp animated"
                          href="https://plus.google.com/kimarotec"
                          data-wow-delay="0.3s"
                        >
                          <i class="fa fa-google-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="wow fadeInUp animated"
                          href="https://instagram.com/kimarotec"
                          data-wow-delay="0.4s"
                        >
                          <i class="fa fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          class="wow fadeInUp animated"
                          href="https://instagram.com/kimarotec"
                          data-wow-delay="0.6s"
                        >
                          <i class="fa fa-dribbble"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-copy text-center">
          <div class="container">
            <div class="row">
              <div class="pull-left">
                <span>
                  (C) <a href="http://www.KimaroTec.com">KimaroTheme</a> , All
                  rights reserved 2016
                </span>
              </div>
              <div class="bottom-menu pull-right">
                <ul>
                  <li>
                    <a
                      class="wow fadeInUp animated"
                      href="/"
                      data-wow-delay="0.2s"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      class="wow fadeInUp animated"
                      href="/"
                      data-wow-delay="0.3s"
                    >
                      Property
                    </a>
                  </li>
                  <li>
                    <a
                      class="wow fadeInUp animated"
                      href="/"
                      data-wow-delay="0.4s"
                    >
                      Faq
                    </a>
                  </li>
                  <li>
                    <a
                      class="wow fadeInUp animated"
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
