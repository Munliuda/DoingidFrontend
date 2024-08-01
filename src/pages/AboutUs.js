import React from 'react';
import PageTitle from '../components/PageTitle';
import HowItWork from '../elements/HowItWork';
import Company from '../elements/Company';
import PriceBlog from '../elements/PriceBlog';


const AboutUs = () => {
    return (        
        <div className="page-content">
            <PageTitle activePage="About Us" mainPage="Home"/>            
            <section className="content-inner overflow-hidden position-relative">
                <div className="container">
                    <div className="section-head text-center">
                        <h6 className="text">Working Process</h6>
                        <h2 className="title">How It Work</h2>
                    </div>
                    <HowItWork />
                </div>
            </section>    
            <section className="content-inner bg-light position-relative overflow-hidden">
			    <div className="container">
                    <Company />
                </div>
            </section>
            <section className="content-inner bg-white position-relative">
			    <div className="container">
                    <PriceBlog />
                </div>
            </section>
        </div>
        
    );
};

export default AboutUs;