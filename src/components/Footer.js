import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

import { IMAGES } from '../constants/theme';
const listBlog = [
    {
        maintitle:'Useful Links',    
        list : [
            {title:'Find a Job'},
            {title:'Compnies'},
            {title:'About Us'},
            {title:'Post a Job'},
            {title:'Testimonial'},
        ],
    },
    {
        maintitle:'Category',    
        list : [
            {title:'UI Designer'},
            {title:'UX Designer'},
            {title:'Grapic Designer'},
            {title:'Web Developers'},
            {title:'More'},
        ],
    },
    {
        maintitle:'Follow Us',    
        list : [
            {title:'Linked In'},
            {title:'facebook'},
            {title:'Instagram'},
            {title:'Dribbble'},
            {title:'Behance'},
        ],
    },
];

const Footer = (props) => {
    const nav = useNavigate();
    function handleSubmit(e){
       e.preventDefault(); 
       nav("#");
    }
    return (
        <footer className="site-footer style-1 position-relative">
            <div className={`footer-top bg-light ${props.Space}`}>
                <div className="container">
                    <div className="row p-50">
                        <div className="col-lg-3 col-md-12 col-sm-12">
                            <div className="widget wow fadeInUp text-center text-lg-start" data-wow-delay="1.4s">	
                                <div className="footer-logo">
                                    <Link to={"/"} className="logo-dark"><img src={IMAGES.Logo} alt="" /></Link>
                                </div>
                                <p>Many desktop publishing packages and web page editors now.</p>
                                <div className="widget_getintuch ">
                                    <ul>
                                        <li className="text-center">
                                            <i className="fa-regular fa-comments"></i>
                                            Example@job.com
                                        </li>
                                    </ul>
                                </div>
                            </div>	
                        </div>	
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="row">	
                                {listBlog.map((item, index)=>(
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-6" key={index}>
                                        <div className="widget widget_links">
                                            <h4 className="footer-title">{item.maintitle}</h4>
                                            {item.list.map((data, ind)=>(
                                                <ul key={ind}>
                                                    <li><Link to={"#"}>{data.title}</Link></li>
                                                </ul>
                                            ))}
                                        </div>
                                    </div>
                                ))}                                
                            </div>
                        </div>	
                        <div className="col-lg-3 col-md-12 col-sm-12">
                            <div className="widget  wow fadeInUp" data-wow-delay="2.2s">
                                <h4 className="footer-title">Newsletter</h4>
                                <p>Sign up to our archi. point to recent updates & office</p>
                                <form className="dzSubscribe ft-subscribe mb-4" onSubmit={(e)=>handleSubmit(e)}>
                                    <div className="dzSubscribeMsg"></div>
                                    <div className="input-group mb-0"> 
                                        <input name="dzEmail" required="required" type="email" className="form-control" placeholder="Your Email Address" />
                                        <button name="submit" value="Submit" type="submit" className="btn btn-primary style-1 ">Send</button>				
                                    </div>
                                </form>
                            </div>
                        </div>	
                    </div>	
                </div>
            </div>
            <div className="footer-bottom text-md-center text-md-center bg-light">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="footer-inner text-center ">
                                <p className="copyright-text wow fadeInUp" data-wow-delay="2.4s">Copyright 2023 by <a className="text-primary" href="https://dexignlab.com/" target="_blank">DexignLab</a>. All rights Reserved</p>
                            </div>
                        </div>
                    </div>	
                </div>
            </div>	
        </footer>
    );
};

export default Footer;