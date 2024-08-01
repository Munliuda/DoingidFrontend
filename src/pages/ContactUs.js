import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import swal from "sweetalert";

import PageTitle from '../components/PageTitle';
import { SVGICON } from '../constants/theme';
import {
    GoogleReCaptchaProvider,
    GoogleReCaptcha
  } from 'react-google-recaptcha-v3';

const contactform = [
    {name:'First Name'},
    {name:'Last Name'},
    {name:'Email Address'},
    {name:'Mobile No.'},
];

const SiteKey = '6LcXS9ElAAAAAFSeQtM-5c9jKmCpRL8Z-xEOJ9dO';
const ContactUs = () => {
    const [captcha, setCaptcha] = useState(false);
    function ReCaptcha(){        
        setCaptcha(true);
    }

    //form submit
    const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();		
		emailjs.sendForm('service_gfykn6i', 'template_iy1pb0b', e.target, 'HccoOtZS6GHw-N-m6')
		  .then((result) => {
			  console.log(result.text);
		  }, (error) => {
			  console.log(error.text);
		  });
		  e.target.reset()
		  swal('Good job!', 'form successfuly submmited', "success");
	};
    return (
        <div className="page-content">
            <PageTitle activePage="Contact Us" mainPage="Home" />
            <section className="map-wrapper1 overflow-hidden  content-inner">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-lg-5 m-b30">
                            <div className="info-box style-1 ">
                                <div className="info">
                                    <h2 className="text-light wow fadeInUp" data-wow-delay="0.6s">Get in touch</h2>
                                    <p className="wow fadeInUp" data-wow-delay="0.8s">Fill up the form and our team will get<br/> back to you within 24 hours.</p>
                                </div>
                                
                                <div className="widget widget_about">
                                    <div className="widget widget_getintuch">
                                        <ul>
                                            <li className="wow fadeInUp" data-wow-delay="1.0s">
                                                <div className="d-flex align-items-center">
                                                    {SVGICON.Message}
                                                    <span className="text-light">Chat to us</span> 
                                                </div>	
                                                <p className="m-a0 p-t10">Our friendly team is here to help.</p>
                                                <h6 className="text-light">Jobick@info.com</h6>		
                                            </li>
                                            <li className="wow fadeInUp" data-wow-delay="1.2s">
                                                <div className=" d-flex align-items-center">
                                                    {SVGICON.Navigate}
                                                    <span className="text-light">Office</span>
                                                </div>
                                                <p className=" m-a0 p-t10">Come say hello at our offce HQ.</p>
                                                <h6 className="text-light">Jobick@info.com</h6>	
                                            </li>
                                            <li className="wow fadeInUp" data-wow-delay="1.4s">
                                                <div className="d-flex align-items-center">
                                                    {SVGICON.Office}
                                                    <span className="text-light">Office</span>
                                                </div>	
                                                <p className=" m-a0 p-t20">Mon-Fri from 9am to 7pm.</p>
                                                <h6 className="text-light">+(91) 123 456 7890</h6>
                                            </li>					
                                        </ul>
                                    </div>
                                </div>

                                <div className=" dz-social style-1 wow fadeInUp" data-wow-delay="0.2s">
                                    <h6 className="text-light" >Our Socials</h6>
                                    <ul className="social-icon">
                                        <li><a className="social-btn" target="_blank" rel="noreferrer" href="https://www.facebook.com/dexignzone/">
                                                <i className="fa-brands fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li><a className="social-btn" target="_blank" rel="noreferrer" href="https://www.instagram.com/dexignzone/"><i className="fa-brands fa-instagram"></i></a></li>
                                        <li><a className="social-btn" target="_blank" rel="noreferrer" href="https://twitter.com/dexignzones"><i className="fa-brands fa-twitter"></i></a></li>
                                        <li><a className="social-btn" target="_blank" rel="noreferrer" href="https://www.youtube.com/@dexignzone1723"><i className="fab fa-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-sm-12 m-b30">
                            <div className="form-wrapper style-1">
                                <h2 className="title m-a0 wow fadeInUp" data-wow-delay="1.6s">Get In touch</h2>
                                <p className="font-text text-primary p-b10 wow fadeInUp" data-wow-delay="1.7s">We are here for you. How we can help?</p>
                                <div className="contact-area">
                                    <form className="dz-form dzForm style-1 contact-bx" ref={form} onSubmit={sendEmail}>
                                        <div className="dzFormMsg"></div>
                                        <input type="hidden" className="form-control" name="dzToDo" value="Contact" />
                                        <div className="row ">
                                            {contactform.map((item, ind)=>(
                                                <div className="col-md-6" key={ind}>
                                                    <div className="input-group wow fadeInUp" data-wow-delay="1.8s">
                                                        <input name="dzFirstName" required type="text" className="form-control" placeholder={item.name} />
                                                    </div>
                                                </div>
                                            ))}                                           
                                            <div className="col-md-12">
                                                <div className="input-group wow fadeInUp" data-wow-delay="2.2s">
                                                    <textarea name="dzMessage" rows="5" required className="form-control" placeholder="Type Message..."></textarea>
                                                </div>
                                            </div>
                                            {/* <div className="col-md-12">
                                                <div className="input-recaptcha wow fadeInUp" data-wow-delay="2.3s">
                                                    <div className="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
                                                    <input className="form-control d-none" style="display:none;" data-recaptcha="true" required data-error="Please complete the Captcha" />
                                                </div>
                                            </div> */}
                                            <div className='col-md-12'>
                                                <GoogleReCaptchaProvider reCaptchaKey={SiteKey}>
                                                    <GoogleReCaptcha onVerify={ReCaptcha} />
                                                </GoogleReCaptchaProvider>
                                                {/* <GoogleReCaptcha
                                                    onVerify={captcha => {
                                                        setCaptcha(captcha);
                                                    }}
                                                /> */}
                                            </div>
                                            <div className="col-md-12 p-t20">
                                                <button name="submit" type="submit" value="Submit" className="btn btn-primary wow fadeInUp" data-wow-delay="2.4s">Submit Now</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>	
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;