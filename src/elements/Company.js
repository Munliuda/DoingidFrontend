import React from 'react';
import {Link} from 'react-router-dom';
import { IMAGES } from '../constants/theme';

const Company = () => {
    return (
        <div className="row align-items-center"> 
            <div className="col-lg-6 m-b30">
                <div className="dz-media style-1">
                    <div className="row">
                        <div className="col-6">
                            <img src={IMAGES.About1} alt="pic1" />
                        </div>				
                        <div className="col-6">
                            <img src={IMAGES.About2} alt="pic2" />
                        </div>
                    </div>
                    <span className="text wow bounceInLeft">We Need A UI/UX<br/>Designer For Our Team</span>
                </div>
            </div>
            <div className="col-lg-6 m-b30">
                <div className="dz-contant style-1">
                    <div className="section-head">
                        <h6 className="text wow fadeInUp">Companies</h6>
                        <h2 className="title wow fadeInUp">500+ World Top Company Posted There Job</h2>
                    </div>
                    <Link to={"#"} className="btn btn-primary btn-lg">Find Jobs</Link>
                </div>
            </div>
        </div>
    );
};

export default Company;