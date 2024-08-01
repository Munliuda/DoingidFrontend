import React ,{Fragment} from 'react';
import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom';

import "./assets/vendor/switcher/switcher.css";
import './assets/css/style.css';
// import './assets/css/skin/skin-1.css';

//Layout
import Header from './components/Header';
import Footer from './components/Footer';
//pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import JobsGrid from './pages/JobsGrid';
import JobDetails from './pages/JobDetails';
import Pricing from './pages/Pricing';
import BlogGrid from './pages/BlogGrid';
import BlogList from './pages/BlogList';
import BlogDetails from './pages/BlogDetails';
import ContactUs from './pages/ContactUs';
import ScrollToTop from './components/ScrollToTop';
import Switcher from './components/Switcher';
import AnimatedCursor from './components/AnimatedCursor';

let basename = "frontend/react";
function App() {
    return (
      <Fragment>
        <BrowserRouter 
			basename={basename}
		>
          <Routes >			
			<Route path="/" element = {<Home />} />
			<Route element= {<Layouts/>} >
				<Route path="/about-us" element = {<AboutUs />} />
				<Route path="/jobs-grid" element = {<JobsGrid />} />
				<Route path="/job-detail" element = {<JobDetails />} />
				<Route path="/pricing" element = {<Pricing />} />
				<Route path="/blog-grid" element = {<BlogGrid />} />
				<Route path="/blog-list" element = {<BlogList />} />
				<Route path="/blog-details" element = {<BlogDetails />} />
				<Route path="/contact-us" element = {<ContactUs />} />
			</Route>	
          </Routes>
		  <AnimatedCursor />
		  <Switcher />
		  <ScrollToTop />
        </BrowserRouter>
      </Fragment>
    );
}

function Layouts(){
	return(
		<>
			<div className='page-wraper'>
				<Header/>
				<Outlet />
				<Footer />
			</div>			
		</>
	)
}

export default App;
