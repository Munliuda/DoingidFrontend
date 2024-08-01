import React from 'react';
import {Link} from 'react-router-dom';

import PageTitle from '../components/PageTitle';
import BlogSideBar from '../elements/BlogSideBar';
import { IMAGES } from '../constants/theme';

const gridData = [
    {image: IMAGES.BlogPic1, title:'How to convince recruiters and get your dream', date:'14 Feb 2022' },
    {image: IMAGES.BlogPic2, title:'5 things to know about the March 2022', date:'23 June 2022' },
    {image: IMAGES.BlogPic3, title:'Job Board is the most important sector', date:'30 Dec 2022' },
    {image: IMAGES.BlogPic5, title:'These Bizarre Truths Behind Job.', date:'10 Jan 2023' },
];
const BlogList = () => {
    return (
        <div className="page-content">
            <PageTitle mainPage="Home" activePage="Blog List Sidebar" />
            <section className="content-inner bg-white position-relative">
                <div className="container">
                    <div className="row ">
                        <div className="col-xl-8 col-lg-8">
                            <div className="row">
                                {gridData.map((item, ind)=>(
                                    <div className="col-lg-12" key={ind}>
                                        <div className="dz-card style-1 blog-half overlay-shine wow fadeInUp" data-wow-delay="1.0s">
                                            <div className="dz-media">
                                                <Link to={"/blog-details"}><img src={item.image} alt="" /></Link>
                                                <span className="date"><Link to={"#"}>14 Feb 2012</Link></span>
                                            </div>
                                            <div className="dz-info">
                                                <div className="dz-meta">
                                                    <ul>
                                                        <li className="post-author text-primary">
                                                            <span>
                                                                <i className="fa-solid fa-user"></i>
                                                            </span>
                                                            {" "}By Kk Sharma</li>
                                                        <li className="post-date text-primary">
                                                            <span>
                                                                <i className="fa-solid fa-message"></i>
                                                            </span>
                                                        24 Comments</li>
                                                    </ul>
                                                </div>
                                                <h4 className="dz-title"><Link to={"/blog-details"}>{item.title}</Link></h4>
                                                <p>Nostrud tem exrcitation duis laboris nisi ut aliquip sed duis aute cupidata lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                <Link to={"/blog-details"} className="btn btn-primary">Read More</Link>
                                            </div>
                                        </div>
                                    </div>                                    
                                ))}
                                <div className="col-xl-12 col-lg-12 m-b30 m-t30 m-lg-t10">
                                    <nav aria-label="Blog Pagination">
                                        <ul className="pagination style-2 text-center wow fadeInUp" data-wow-delay="0.8s">
                                            <li className="page-item"><Link to={"#"} className="page-link prev"><i className="fas fa-chevron-left"></i></Link></li>
                                            <li className="page-item"><Link to={"#"} className="page-link active">1</Link></li>
                                            <li className="page-item"><Link to={"#"} className="page-link">2</Link></li>
                                            <li className="page-item"><Link to={"#"} className="page-link">3</Link></li>
                                            <li className="page-item"><Link to={"#"} className="page-link next"><i className="fas fa-chevron-right"></i></Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4">
                            <BlogSideBar />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogList;