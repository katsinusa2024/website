import React from 'react';
import './footer.scss';
import location from '../../assets/icons/location.png';
import phone from '../../assets/icons/call.png';
import calendar from '../../assets/icons/calendar.png';
import clock from '../../assets/icons/clock.png';
import mail from '../../assets/icons/email.png';
import logo from '../../assets/katsin-logo-white.png';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-5 mb-5 mb-md-0 row flex-md-row flex-column flex-wrap">
            <div className="col1 mx-auto d-flex flex-column align-items-center align-items-md-start">
              <div className=" d-flex align-items-center flex-row mb-3">
                <div className="hours me-2">
                  <div>
                    <img src={calendar} alt="img" />
                    <p>Tue. - Thu.</p>
                  </div>
                </div>
                <div className="hours">
                  <div>
                    <img src={clock} alt="img" />
                    <p>6:00PM - 12:00AM</p>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center flex-row mb-3">
                <div className="hours me-3">
                  <div>
                    <img src={calendar} alt="img" />
                    <p>Fri. - Sun.</p>
                  </div>
                </div>
                <div className="hours">
                  <div>
                    <img src={clock} alt="img" />
                    <p>6:00PM - 12:00AM</p>
                  </div>
                </div>
              </div>
              <div className="d-flex mt-3">
                <div className="hours">
                  <div className="mb-3">
                    <img src={calendar} alt="img" />
                    <p>Monday - Closed</p>
                  </div>
                </div>
              </div>
            </div>
            {/*<div className="col1 col-md-6 mt-md-0 mt-4">*/}
            {/*  <div className="row mt-4 d-flex d-md-none">*/}
            {/*    <div className="col-6">*/}
            {/*      <div className="hours">*/}
            {/*        <div className="mb-3">*/}
            {/*          <img src={calendar} alt="img" />*/}
            {/*          <p>Monday</p>*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*    <div className="col-6">*/}
            {/*      <div className="hours">*/}
            {/*        <div className="mx-auto">*/}
            {/*          <p className="closed">Closed</p>*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
          <div className="col-md-7">
            <div className="d-flex flex-wrap-reverse justify-content-between">
              <div className="col-md-4 col-12 mb-5 mb-md-0">
                <div className="logo-wrapper mb-4">
                  <img src={logo} alt="logo" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-7 col-12">
                <div className="col1 info-col">
                  <div className="email mb-3">
                    <a href="mailto:info@katsinusa.com">
                      <img src={mail} alt="img" />
                      <p>info@katsinusa.com</p>
                    </a>
                  </div>
                  <a href="tel:+18188693030" className="phone-link">
                    <img src={phone} alt="img" />
                    <span>+1 (818) 869 - 3030</span>
                  </a>
                  <a
                    href="https://www.google.com/maps/place/Katsin+Restaurant+and+Dining+Bar/@34.1470597,-118.2672905,17z/data=!3m1!4b1!4m6!3m5!1s0x80c2c1c8f527aba1:0xaa8b3daade84e096!8m2!3d34.1470553!4d-118.2647156!16s%2Fg%2F11y2344l5j?entry=ttu"
                    target="_blank"
                    rel="noreferrer"
                    className="location-link mb-5"
                  >
                    <div>
                      <img src={location} alt="img" />
                      <span>515 W Broadway Ave, Unit 111, Glendale, CA, 91204</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <ul className="footer-links">
            <li>
              <NavLink to={'/jobs'}>Jobs</NavLink>
            </li>
            <span>|</span>
            <li>
              <NavLink to={'/privacy-policy'}>Privacy Policy</NavLink>
            </li>
            <span>|</span>
            <li>
              <NavLink to={'/terms-of-services'}>Terms of Services</NavLink>
            </li>
            <span>|</span>
            <li>
              <NavLink to={'/accessibility'}>Accessibility</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <p className="poweredBy mb-0">
        Powered by <a href="https://www.linkedin.com/in/mkrtum-abrahamyan/">M. A.</a>
      </p>
    </div>
  );
};

export default Footer;
