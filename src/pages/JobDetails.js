import React from 'react';
import {Link} from 'react-router-dom';
import { IMAGES } from '../constants/theme';

const infoList = [
    {icon:"fas fa-eye", name:'VIEWS', detail:'110'},
    {icon:'fas fa-calendar-alt', name:'DATE POSTED', detail:'July 28, 2022'},
    {icon:'fas fa-map-marker-alt', name:'LOCATION', detail:'1363-1385 Sunset Blvd Los Angeles, CA 90026, USA'},
    {icon:'fas fa-user-tie', name:'JOB TITLE', detail:'Senior Web Designer , Developer'},
    {icon:'fas fa-clock', name:'EXPERIENCE', detail:'Senior Web Designer , Developer'},
    {icon:'fas fa-suitcase', name:'QUALIFICATION', detail:'Bachelor Degree'},
    {icon:'fas fa-venus-mars', name:'GENDER', detail:'Male'},
    {icon:'fas fa-money-bill-wave', name:'OFFERED SALARY', detail:'$2,500/ MONTH'},
];

const JobDetails = () => {
    return (       
        <div className="page-content">
            <section className="content-inner position-relative">
                <div className="container">
                    <div className="row ">
                        <div className="col-xl-8 col-lg-8 m-b30">
                            <div className="blog-single pt-20 sidebar dz-card">
                                <div className="dz-media dz-media-rounded rounded">
                                    <img src={IMAGES.BlogLargePic2} alt="" />
                                </div>
                                <div className="dz-info m-b30">
                                    <div className="job-detail-content">
                                        <h3 className="dz-title">Senior Web Designer, Developer <span className="job-duration">/ 9 months ago</span></h3>
                                        <p className="job-address"><i className="fa-solid fa-location-dot text-primary"></i>1363-1385 Sunset Blvd Los Angeles, CA 90026, USA</p>
                                        <div className="income">
                                            <div className="jobs-amount">$2000 - $2500 <span>/ Month</span></div>
                                            <div className="apllication-area">Application ends:<span className="apllication-date"> 2023-05-31</span></div>
                                        </div>
                                    </div>
                                
                                    <div className="dz-post-text">
                                        <h4 className="title">Job Description:</h4>
                                        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.</p>
                                        <h4 className="title">Requirements:</h4>
                                        <ul className="m-b30">
                                            <li>Must be able to communicate with others to convey information effectively.</li>
                                            <li>Personally passionate and up to date with current trends and technologies, committed to quality and comfortable working with adult media.</li>
                                            <li>Rachelor or Master degree level educational background.</li>
                                            <li>4 years relevant PHP dev experience.</li>
                                            <li>Troubleshooting, testing and maintaining the core product software and databases.</li>
                                        </ul>
                                        <h4 className="title">Responsibilities:</h4>
                                        <ul className="m-b30">
                                            <li>Establish and promote design guidelines, best practices and standards.</li>
                                            <li>Accurately estimate design tickets during planning sessions.</li>
                                            <li>Partnering with product and engineering to translate business and user goals into elegant and practical designs. that can deliver on key business and user metrics.</li>
                                            <li>Create wireframes, storyboards, user flows, process flows and site maps to communicate interaction and design.</li>
                                            <li>Present and defend designs and key deliverables to peers and executive level stakeholders.</li>
                                            <li>Execute all visual design stages from concept to final hand-off to engineering.</li>
                                        </ul>
                                    </div>
                                    <h4 className="title">Social Profile:</h4>
                                    <div className="dz-share-post">
                                        <div className="dz-social-icon dark">
                                            <ul>
                                                <li><a target="_blank" rel="noreferrer"  href="https://www.facebook.com/dexignzone/"><i className='fab fa-facebook-f' /></a></li>
                                                <li><a target="_blank" rel="noreferrer"  href="https://www.instagram.com/dexignzone/"><i className="fab fa-instagram" /></a></li>
                                                <li><a target="_blank" rel="noreferrer"  href="https://twitter.com/dexignzones"><i className="fab fa-twitter" /></a></li>
                                                <li><a target="_blank" rel="noreferrer"  href="https://www.youtube.com/channel/UCGL8V6uxNNMRrk3oZfVct1g"><i className="fab fa-youtube" /></a></li>
                                            </ul>
                                        </div>									
                            
                                    </div>
                                </div>
                            </div>
                            <h4 className="title">Location:</h4>
                            <div className="twm-m-map">
                                <div className="twm-m-map-iframe">
                                    <iframe className="w-100" height="310" src="https://maps.google.com/maps?q=25.12879927431729,75.82016637907016&hl=es&z=14&amp;output=embed"></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4">
                            <aside className="side-bar sticky-top right ">
                                <div className="widget-title">
                                    <h4 className="title">Job Information</h4>
                                </div>
                                <div className="widget widget_categories style-2">
                                    <ul>
                                        {infoList.map((item, index)=>(
                                            <li key={index}>
                                                <div className="info-inner">
                                                    <i className={item.icon} />
                                                    <span className="title">{item.name}</span>
                                                    <div className="info-discription">{item.detail}</div>
                                                </div>
                                            </li>
                                        ))}                                          
                                    </ul>
                                </div>
                                <div className="widget widget_tag_cloud">
                                    <div className="widget-title">
                                        <h4 className="title">Popular Tags</h4>
                                    </div>
                                    <div className="tagcloud">
                                        <Link to={"#"}>General</Link>
                                        <Link to={"#"}>Payment</Link>
                                        <Link to={"#"}>Jobs </Link>
                                        <Link to={"#"}>Application</Link>
                                        <Link to={"#"}>Work</Link>
                                        <Link to={"#"}>Recruiting</Link>
                                        <Link to={"#"}>Income</Link>
                                        <Link to={"#"}>Employer</Link>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default JobDetails;