import React from 'react';
import PageTitle from '../components/PageTitle';
import PriceBlog from '../elements/PriceBlog';

const Pricing = () => {
    return (
        <div className="page-content">
            <PageTitle mainPage="Home" activePage="Pricing" />
            <section className="content-inner bg-white position-relative">
			    <div className="container">
                    <PriceBlog />
                </div>
            </section>
        </div>       
    );
};

export default Pricing;