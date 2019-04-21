import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <div id="showcase">
          <div className="container">
            <div className="showcase-content-home">
              <h1>
                <span className="text-primary1">Welcome</span> to our website
              </h1>

              <p className="lead">
                Our organization aims to manufacture quality plastic bags and
                provides our best services to all levels of customer. We intend
                to continuously improve and develop our production to meet
                international standard management and accreditation od ISO 9001
                : 2015, GMP and HACCP Food Safety with awareness on social and
                environmental responsibility.
              </p>
              <a className="btn" href="aboutus">
                About us
              </a>
            </div>
          </div>
        </div>

        <section id="contact-info-home" className="bg-dark">
          <div className="info-content1">
            <div className="info-content2">
              <h2>
                <span className="text-primary2">Location</span> Of Head Office
              </h2>
              <p-home>
                39/19 Moo 5 T.Khokkrabue A.Mueng Samutsakorn 74000 Thailand
              </p-home>
              <br />
              <p1-home>
                Tel : +6634-442-245-8 Mobile : +6661-168-9989 Fax :
                +6634-442-249
              </p1-home>
            </div>
            <div className="info-content3">
              <h3>
                <span className="text-primary3">Location</span> Of Bangbon
                Office
              </h3>
              <p2-home>
                236 Soi Prayamonthat Yak 35-9 Bangbon, Bangbon, Bangkok 10150
                Thailand
              </p2-home>
              <br />
              <p2-home>Tel : +662-417-7224-5 Fax : +662-417-7226</p2-home>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
