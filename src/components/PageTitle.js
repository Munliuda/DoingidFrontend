import React from 'react';
import {Link} from 'react-router-dom';
import { IMAGES } from '../constants/theme';

const PageTitle = (props) => {
    return (
        <div className="dz-bnr-inr dz-bnr-inr-sm text-center overlay-primary-dark" style={{backgroundImage: "url("+ IMAGES.Banner +")"}}>
            <div className="container">
                <div className="dz-bnr-inr-entry">
                    <h1>{props.activePage}</h1>                        
                    <nav className="breadcrumb-row m-t15">
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link to={"/"}>{props.mainPage}</Link></li>
                            <li className="breadcrumb-item active">{props.activePage}</li>
                        </ul>
                    </nav>
                    
                </div>
            </div>
        </div>
    );
};

export default PageTitle;