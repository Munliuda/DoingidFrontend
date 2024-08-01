import React from 'react';
import {Link} from 'react-router-dom';
import { IMAGES } from '../constants/theme';

const jobPostBlog = [
    {image:IMAGES.CompanyPic1, title:'Need Senior Stock Technician', amount:'3500' },
    {image:IMAGES.CompanyPic2, title:'Senior Web Designer , Developer', amount:'3000' },
    {image:IMAGES.CompanyPic3, title:'IT Department Manager', amount:'3250' },
    {image:IMAGES.CompanyPic4, title:'Recreation & Fitness Worker', amount:'4100' },
    {image:IMAGES.CompanyPic5, title:'Senior Stock Technician', amount:'2900' },
    {image:IMAGES.CompanyPic6, title:'Need Senior Stock Technician', amount:'2000' },
];

const JobsPost = () => {
    return (
        <div className="row">
            {jobPostBlog.map((item, index)=>(
                <div className="col-xl-4 col-md-6" key={index}>
                    <div className="job-bx style-1 wow fadeInUp" data-wow-delay="1.0s">
                        <div className="d-flex m-b25 justify-content-between">
                            <span className="media">
                                <img src={item.image} alt="post" />
                            </span>
                            <ul>
                                <li><Link to={"#"} className="job-day">1 Day Ago</Link></li>
                                <li><Link to={"#"} className="job-time" >Full Time</Link></li>
                            </ul>
                        </div>	
                        <div className="job-contant">	
                            <h6 className="job-title "><Link to={"/job-detail"}>{item.title}</Link></h6>
                            <p className="text">1363-1385 Sunset Blvd Los Angeles, CA 90026, USA</p>
                        </div>
                        <div className="jobs-amount">
                            <h6 className="amount">${item.amount}<span>/ month</span></h6>
                            <Link to={"/job-detail"} className="btn btn-primary" ><i className="fa-solid fa-chevron-right"></i></Link>
                        </div>
                    </div>
                </div>
            ))}           
        </div>
    );
};

export default JobsPost;