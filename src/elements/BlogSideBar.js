import React from 'react';
import {Link} from 'react-router-dom';

import { IMAGES } from '../constants/theme';

const widgetBlog = [
    {image:IMAGES.SmallPic1, title:'Equipment you can count on. People you can trust.', dateBlog:'17 May, 2023'},
    {image:IMAGES.SmallPic2, title:'Advanced Service Functions by Air Transport', dateBlog:'20 june, 2023'},
    {image:IMAGES.SmallPic3, title:'Proper arrangement for keeping the goods in the warehouse', dateBlog:'29 July, 2023'},
];

const BlogSideBar = () => {
    return (
        <aside className="side-bar sticky-top right">
            <div className="widget">
                    <div className="widget-title">
                        <h4 className="title">Search</h4>
                    </div>
                    <div className="search-bx">
                        <form role="search" method="post">
                            <div className="input-group">
                                <input name="text" className="form-control style-1" placeholder="Search.." type="text" />
                                <span className="input-group-btn">
                                    <button type="submit" className="btn btn-primary sharp radius-no"><i className="fa-solid fa-magnifying-glass scale3"></i></button>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="widget widget_categories">
                    <div className="widget-title">
                        <h4 className="title">Categories</h4>
                    </div>
                    <ul>
                        <li className="cat-item"><Link to={"#"}>Categories(10)</Link></li>
                        <li className="cat-item"><Link to={"#"}>Education(13)</Link></li>
                        <li className="cat-item"><Link to={"#"}>Information(9)</Link></li>
                        <li className="cat-item"><Link to={"#"}>Jobs(3)</Link></li>
                        <li className="cat-item"><Link to={"#"}>Learn(12)</Link></li>
                        <li className="cat-item"><Link to={"#"}>Skill(6)</Link></li>
                    </ul>
                </div>

                <div className="widget recent-posts-entry">
                    <div className="widget-title">
                        <h4 className="title">Recent Post</h4>
                    </div>
                    <div className="widget-post-bx">
                        {widgetBlog.map((item, ind)=>(
                            <div className="widget-post clearfix" key={ind}>
                                <div className="dz-media">
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="dz-info">
                                    <h6 className="title"><Link to={"/blog-details"}>{item.title}</Link></h6>
                                    <div className="dz-meta">
                                        <ul>
                                            <li className="post-date"><Link to={"#"}> {item.dateBlog}</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}                       
                    </div>
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
            
        
    );
};

export default BlogSideBar;