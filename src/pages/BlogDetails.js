import React from 'react';
import {Link} from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import BlogSideBar from '../elements/BlogSideBar';
import { IMAGES } from '../constants/theme';

const cardDetail = [
    {image:IMAGES.BlogPic6, title:'5 Reasons Why You Should Invest In Jobs.', date:'10 April, 2023'},
    {image:IMAGES.BlogPic5, title:'Jobs You Should Answer Truthfully.', date:'22 May, 2023'},
];

function Commnon(props){
    return(
        <div className="comment-body">
            <div className="comment-author vcard"> 
                <img  className="avatar photo" src={props.image} alt="" /> 
                <cite className="fn">{props.title}</cite> 
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="reply"> 
                <Link to={"#"} className="comment-reply-link"><i className="fa fa-reply"></i>Reply</Link>
            </div>
        </div>
    )
}

const BlogDetails = () => {
    return (       
        <div className="page-content">
            <PageTitle mainPage="Blog" activePage="Blog Details" />
            <section className="content-inner position-relative" >
                <div className="container">
                    <div className="row ">
                        <div className="col-xl-8 col-lg-8">
                            <div className="blog-single pt-20 sidebar dz-card">
                                <div className="dz-media dz-media-rounded rounded">
                                    <img src={IMAGES.BlogLargePic1} alt="" />
                                </div>
                                <div className="dz-info m-b30">
                                    <div className="dz-meta">
                                        <ul>
                                            <li className="post-author">
                                                <Link to={"#"}>
                                                    <img src={IMAGES.Avatar3} alt="" /> 
                                                    <span>{" "}By Jone Doe</span>
                                                </Link>
                                            </li>
                                            <li className="post-date"><Link to={"#"}> 17 May 2022</Link></li>
                                            <li className="post-comment"><Link to={"#"}>3 comment</Link></li>
                                        </ul>
                                    </div>
                                    <h3 className="dz-title">How to convince recruiters and get your dream job</h3>
                                    <div className="dz-post-text">
                                        <p>Please make sure you understand what rights you are claiming before you submit a DMCA takedown notice because it is a serious legal document. Consider whether you need legal advice. It's really important not to make false claims as this could have serious legal consequences.</p>
                                        <p>penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer tristique elit lobortis purus bibendum, quis dictum metus mattis. Phasellus posuere felis sed eros porttitor mattis. Curabitur massa magna, tempor in blandit id, porta in ligula. Aliquam laoreet nisl massa, at interdum mauris sollicitudin et.Harvel is a copyright protection platform for next-gen creators, crawling the web on a daily basis in order to find piracy links and copyright infringement of your content.</p>
                                        <blockquote className="block-quote  style-1">
                                            <p>“A business consulting agency is involved in the planning, implementation, and education of businesses.”</p>
                                            <cite> Jobick </cite>
                                        </blockquote>
                                        <p>Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod and pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus. Sed consequat justo non mauris pretium at tempor justo sodales.</p>
                                        <ul className="m-b30">
                                            <li>You need to create an account to find the best and preferred job.</li>
                                            <li>After creating the account, you have to apply for the desired job.</li>
                                            <li>After filling all the relevant information you have to upload your resume.</li>
                                        </ul>
                                        <p>The inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty.</p>
                                    </div>
                                    <div className="dz-share-post">
                                        <div className="post-tags">
                                            <h6 className="m-b0 m-r10 d-inline">Tags:</h6>
                                            <Link to={"#"}><span>Corporate</span></Link>
                                            <Link to={"#"}><span>Blog</span></Link>
                                            <Link to={"#"}><span>Marketing</span></Link>
                                        </div>
                                        <div className="dz-social-icon dark">
                                            <ul>
                                                <li><a target="_blank"  rel="noreferrer" href="https://www.facebook.com/dexignzone/">
                                                    <i className='fab fa-facebook-f' />
                                                    </a>
                                                </li>
                                                <li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/dexignzone/">
                                                        <i className="fab fa-instagram"  />
                                                    </a>
                                                </li>
                                                <li><a target="_blank" rel="noreferrer" href="https://twitter.com/dexignzones">
                                                        <i className="fab fa-twitter" />
                                                    </a>
                                                </li>
                                                <li><a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCGL8V6uxNNMRrk3oZfVct1g">
                                                        <i className="fab fa-youtube"  />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>									
                                    </div>
                                </div>
                            </div>
                            
                            <div className="widget-title">
                                <h4 className="title">Related Blog</h4>
                            </div>
                            <div className="row m-b30 m-sm-b10">
                                {cardDetail.map((item, index)=>(
                                    <div className="col-md-6 col-xl-6 m-b30" key={index}>
                                        <div className="dz-card style-1 overlay-shine wow fadeInUp" data-wow-delay="1.0s">
                                            <div className="dz-media">
                                                <Link to={"/blog-details"}><img src={item.image} alt="" /></Link>
                                                <span className="date"><Link to={"#"}>{item.date}</Link></span>
                                            </div>
                                            <div className="dz-info">
                                                <div className="dz-meta">
                                                    <ul>
                                                        <li className="post-author text-primary">
                                                            <span>
                                                                <i className="fa-solid fa-user"></i>
                                                            </span>
                                                           {" "} By Kk Sharma</li>
                                                        <li className="post-date text-primary">
                                                            <span>
                                                                <i className="fa-solid fa-message"></i>
                                                            </span>
                                                        24 Comments</li>
                                                    </ul>
                                                </div>
                                                <h4 className="dz-title"><Link to={"/blog-details"}>{item.title}</Link></h4>
                                                <p>A wonderful serenity has taken of my entire soul, like these.</p>
                                                <Link to={"/blog-details"} className="btn btn-primary">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}                               
                            </div>
                           
                            <div className="clear" id="comment-list">
                                <div className="comments-area" id="comments">
                                    <div className="widget-title style-1">
                                        <h4 className="title">Comments</h4>
                                    </div>
                                    <div className="clearfix">
                                        
                                        <ol className="comment-list">
                                            <li className="comment">
                                                <Commnon title="Celesto Anderson"  image={IMAGES.Avatar1}/>
                                                <ol className="children">
                                                    <li className="comment odd parent">
                                                        <Commnon title="Jake Johnson"  image={IMAGES.Avatar2}/>
                                                    </li>
                                                </ol>
                                            </li>
                                            <li className="comment">                                                
                                                <Commnon title="John Doe" image={IMAGES.Avatar3}/>                                                
                                            </li>
                                            <li className="comment">
                                                <Commnon title="Celesto Anderson" image={IMAGES.Avatar1}/>   
                                            </li>
                                        </ol>                                      
                                        <div className="comment-respond" id="respond">
                                            <div className="widget-title style-1">
                                                <h4 className="title" id="reply-title">Leave Your Comment
                                                    <small><Link to={"#"} style={{display:"none"}} id="cancel-comment-reply-link" rel="nofollow">Cancel reply</Link></small>
                                                </h4>
                                            </div>
                                            <form className="comment-form" id="commentform" method="post">
                                                <p className="comment-form-author">
                                                    <label htmlFor="author">Name <span className="required">*</span></label>
                                                    <input type="text" name="Author"  placeholder="Author" id="author" />
                                                </p>
                                                <p className="comment-form-email">
                                                    <label htmlFor="email">Email <span className="required">*</span></label>
                                                    <input type="text" placeholder="Email" name="email" id="email" />
                                                </p>
                                                <p className="comment-form-comment">
                                                    <label htmlFor="comment">Comment</label>
                                                    <textarea rows="8" name="comment" placeholder="Comment" id="comment"></textarea>
                                                </p>
                                                <p className="form-submit">
                                                    <button type="submit" className="btn btn-primary" id="submit">SUBMIT</button>
                                                </p>
                                            </form>
                                        </div>
                                    </div>
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

export default BlogDetails;