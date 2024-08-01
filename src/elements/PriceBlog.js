import React from 'react';
import {Link} from 'react-router-dom';

const priceCard = [
    {title:'Basic', price:'90', package:'1'},
    {title:'Standard', price:'248', package:'2'},
    {title:'Extended', price:'499', package:'3'},
];

const PriceBlog = () => {
    return (
        <div className="row justify-content-center">
            {priceCard.map((item, index)=>(
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 m-b30" key={index}>
                    <div className="pricing-wrapper rounded wow fadeInUp" data-wow-delay="1.0s">
                        <div className="pricing-inner">
                            <div className="Package-title">
                                <h4 className="title">{item.title}</h4>            
                            </div>
                            <div className="Package-price">
                                <span>${item.price}</span>
                                <p>/Monthly</p>
                            </div>
                            <div className="Package-list">
                                {
                                 item.package === '3' ?  
                                    <ul>
                                        <li><span><i className="fa-solid fa-check"></i></span>1 job posting</li>
                                        <li><span><i className="fa-solid fa-check"></i></span>0 featured job</li>
                                        <li><span><i className="fa-solid fa-check"></i></span>job displayed fo 20 days</li>
                                        <li><span><i className="fa-solid fa-check"></i></span>Premium support 24/7</li>
                                    </ul>
                                :                                 
                                  item.package === '2' ? 

                                    <ul>
                                        <li><span><i className="fa-solid fa-check"></i></span>1 job posting</li>
                                        <li><span><i className="fa-solid fa-check"></i></span>0 featured job</li>
                                        <li><span><i className="fa-solid fa-check"></i></span>job displayed fo 20 days</li>
                                        <li className="disable"><i className="fa-solid fa-xmark"></i>Premium support 24/7</li>
                                    </ul>
                                :
                                                                           
                                    <ul>
                                        <li><span><i className="fa-solid fa-check"></i></span>1 job posting</li>
                                        <li className="disable"><i className="fa-solid fa-xmark"></i>0 featured job</li>
                                        <li className="disable"><i className="fa-solid fa-xmark"></i>job displayed fo 20 days</li>
                                        <li className="disable"><i className="fa-solid fa-xmark"></i>Premium support 24/7</li>
                                    </ul>
                                }
                            </div>
                            <Link to={"/contact-us"} className="btn btn-primary btn-lg">Purchase Now</Link>
                        </div>

                    </div>

                </div>
            ))}
        </div>
            
        
    );
};

export default PriceBlog;