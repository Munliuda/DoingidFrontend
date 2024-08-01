import React from 'react';
import {Link} from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import { IMAGES } from '../constants/theme';

const gridCard = [
    {image: IMAGES.BlogPic1, title:'How to convince recruiters and get your dream', date:'14 Feb 2022' },
    {image: IMAGES.BlogPic2, title:'5 things to know about the March 2022', date:'23 June 2022' },
    {image: IMAGES.BlogPic3, title:'Job Board is the most important sector', date:'30 Dec 2022' },
    {image: IMAGES.BlogPic4, title:'These Bizarre Truths Behind Job.', date:'10 Jan 2023' },
    {image: IMAGES.BlogPic5, title:'Jobs You Should Answer Truthfully.', date:'15 Feb 2023' },
    {image: IMAGES.BlogPic6, title:'5 Reasons Why You Should Invest In Jobs.', date:'24 March 2023' },
];

const BlogGrid = () => {
    return (
        <div className="page-content">
            <PageTitle activePage="Blog grid" mainPage="Blog" />
            <section className="content-inner position-relative">
                <div className="container">
                    <div className="row">
                        {gridCard.map((data, index)=>(
                            <div className="col-xl-4 col-md-6  m-b30" key={index}>
                                <div className="dz-card style-1 overlay-shine">
                                    <div className="dz-media">
                                        <Link to={"/blog-details"}><img src={data.image} alt="" /></Link>
                                        <span className="date"><Link to={"#"}>{data.date}</Link></span>
                                    </div>
                                    <div className="dz-info">
                                        <div className="dz-meta">
                                            <ul>
                                                <li className="post-author text-primary">
                                                    <span>
                                                        <i className="fa-solid fa-user" />
                                                    </span>{" "}
                                                    By Kk Sharma</li>
                                                <li className="post-date text-primary">
                                                    <span>
                                                        <i className="fa-solid fa-message" />
                                                    </span>{" "}
                                                24 Comments</li>
                                            </ul>
                                        </div>
                                        <h4 className="dz-title"><Link to={"/blog-details"}>{data.title}</Link></h4>
                                        <p>A wonderful serenity has taken of my entire soul, like these.</p>
                                        <Link to={"/blog-details"} className="btn btn-primary">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 m-b30 m-t30 m-lg-t10">
                            <nav aria-label="Blog Pagination">
                                <ul className="pagination style-1 text-center  wow fadeInUp" data-wow-delay="0.8s">
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
            </section>
        </div>
    );
};

export default BlogGrid;
