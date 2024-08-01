import React from 'react';
import PageTitle from '../components/PageTitle';
import JobsPost from '../elements/JobsPost';

const JobsGrid = () => {
    return (
        <div className='page-content'>
            <PageTitle mainPage="Jobs" activePage="Jobs Grid" />
            <section className="content-inner overflow-hidden position-relative">
			    <div className="container">
                    <JobsPost />
                </div>
            </section>
        </div>
    );
};

export default JobsGrid;