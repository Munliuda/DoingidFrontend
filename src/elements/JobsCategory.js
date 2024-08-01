import React from 'react';
import {Link} from 'react-router-dom';

const wraperBox = [
    {title:'UI/Ux Design', subtitle:'100+Posted New Jobs', svgitem:'#2769ee'},
    {title:'Illustration', subtitle:'200+Posted New Jobs', svgitem:'#ee27c0'},
    {title:'Cool Art', subtitle:'300+Posted New Jobs', svgitem:'#27beee',},
    {title:'Web Design', subtitle:'150+Posted New Jobs', svgitem:'#bec747',},
    {title:'Produt Design', subtitle:'240+Posted New Jobs', svgitem:'#7b25d1',},
    {title:'Developer', subtitle:'200+Posted New Jobs', svgitem:'#858585',},
    {title:'Animation', subtitle:'150+Posted New Jobs', svgitem:'#ee9827',},
];

const JobsCategory = () => {
    return (
        <div className="row">
            {wraperBox.map((item, index)=>(
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" key={index}>
                    <div className="icon-bx-wraper style-2 text-center wow fadeInUp" data-wow-delay="1.0s" >
                        <div className="icon-media"> 
                            <svg className="mb-3" xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 71 71">
                                <g transform="translate(-457 -443)">
                                    <rect width="71" height="71" rx="12" transform="translate(457 443)" fill="#c5c5c5"></rect>
                                    <g transform="translate(457 443)">
                                        <rect data-name="placeholder" width="71" height="71" rx="12" fill={item.svgitem}></rect>
                                        <circle data-name="Ellipse 12" cx="18" cy="18" r="18" transform="translate(15 20)" fill="#fff"></circle>
                                        <circle data-name="Ellipse 11" cx="11" cy="11" r="11" transform="translate(36 15)" fill="#ffe70c" style={{mixBlendMode: "multiply", isolation: "isolate"}}></circle>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div className="icon-content">
                            <h5 className="fs-20 mb-0"><Link to={"#"}>{item.title}</Link></h5>
                            <p className="text"><Link to={"#"}>{item.subtitle}</Link></p>
                        </div>
                    </div>
                </div>
            ))}            
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="icon-bx-wraper style-2 bg-primary text-center wow fadeInUp" data-wow-delay="2.4s" >
                    <div className="icon-content">
                        <h4 className="title"><Link to={"#"}>100+ More Category</Link></h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobsCategory;