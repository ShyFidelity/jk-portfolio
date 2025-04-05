import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import LaptopGirl from "../../assets/images/laptop-girl.jpeg";
import CloudsBG from "../../assets/images/new-long-cloud.png";
import CloudSolo from "../../assets/images/cloud-solo.png";
import Star1 from "../../assets/images/star1.svg";
import Saturn from "../../assets/images/saturn.png";
import Star2 from "../../assets/images/star-2.svg";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="flex flex-col align-self-center ">
              <div className="intro mx-auto">
                <div className="width80">
                  <h2 className="mb-1x">{introdata.title}</h2>
                  <h1 className="fluidz-48 mb-1x">
                    <Typewriter
                      options={{
                        strings: [
                          introdata.animated.first,
                          introdata.animated.second,
                          introdata.animated.third,
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 10,
                      }}
                    />
                  </h1>
                  <p className="mb-1x">{introdata.description}</p>
                  <div className="intro_btn-action pb-5">
                    <Link to="/portfolio" className="text_2">
                      <div id="button_p" className="ac_btn btn ">
                        My Portfolio
                        <div className="ring one"></div>
                        <div className="ring two"></div>
                        <div className="ring three"></div>
                      </div>
                    </Link>
                    <Link to="/contact">
                      <div id="button_h" className="ac_btn btn">
                        Contact Me
                        <div className="ring one"></div>
                        <div className="ring two"></div>
                        <div className="ring three"></div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div>
                  <div className="intro_img">
                    <img
                      src={Star1}
                      alt="star"
                      className="wobble-spin-img star-1"
                    />
                  </div>
                  <div className="intro_img">
                    <img
                      src={Star2}
                      alt="star"
                      className="wobble-spin-img-2 star-2"
                    />
                  </div>

                  <div>
                    <img
                      src={CloudSolo}
                      alt="cloud"
                      className="bouncing-img floating-cloud cloud"
                    />
                  </div>
                  <div className="floating-saturn">
                    <img
                      src={Saturn}
                      alt="cloud"
                      className="bouncing-img tilt-img"
                    />
                  </div>

                  <div
                    className="h_bg-image order-1 order-lg-2 h-100 "
                    style={{ backgroundImage: `url(${CloudsBG})` }}
                  ></div>
                </div>
                {/* <h2 className="mb-1x"> Here is my current favorite project:</h2> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
