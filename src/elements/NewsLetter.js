import React from 'react';
import {Link} from 'react-router-dom';

const NewsLetter = () => {
    return (       
        <section className="footer-action wow fadeInUp" data-wow-delay="1.0s">
            <div className="inner-content wow fadeInUp" data-wow-delay="1.2s">
                <div className="row justify-content-between align-items-center">
                    <div className="text-center text-xl-start col-xl-7 m-lg-b20">
                        <h2 className="title">Let’s Get Connected And Start Finding Your Dream Job</h2>
                    </div>
                    <div className="text-center text-xl-end col-xl-5">
                        <Link to={"#"} className="btn btn-light btn-lg">Create Free Account</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsLetter;