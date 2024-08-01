import React, { useRef } from "react";
import {Link} from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { IMAGES, SVGICON } from "../constants/theme";

const swiperBlog = [
    {image:IMAGES.SmallPic1, title:'Ashley Jenkins', subtitle:'Designer'},
    {image:IMAGES.SmallPic2, title:'Jennifer', subtitle:'CEO & Founder'},
    {image:IMAGES.SmallPic3, title:'Ronald Richards', subtitle:'Consultant'},
    {image:IMAGES.SmallPic2, title:'Jennifer', subtitle:'CEO & Founder'},
];

export default function Testimonials() {
    const swiperRef = useRef();
    return (
        <>
            <div className="container">
                <div className="section-head text-center">
                    <h6 className="text" data-wow-delay="0.6s">Clents Testimonials</h6>
                    <h2 className="title" data-wow-delay="0.8s">What A Job Holder Says About Us.</h2>
                </div>
                <Swiper 
                    className="swiper-container blog-swiper-1 overflow-hidden"
                    //navigation={true}                
                    slidesPerView={3}
                    spaceBetween={30}
                    speed={1500}
                    loop={true}
                     
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}            
                    modules={[Navigation]} 
                    breakpoints= {{
                        1280: {
                            slidesPerView: 3,
                        },
                        991: {
                            slidesPerView: 2,
                        },
                        767: {
                            slidesPerView: 1,
                        },
                        320: {
                            slidesPerView: 1,
                        },
                    }}

            >
                    {swiperBlog.map((item, index)=>(        
                        <SwiperSlide key={index}>
                            <div className="dz-card blog-grid style-2 bg-light">
                                <div className="dz-text">
                                    <p className="text">This is the  best job searching site l’ve ever seen. i found my dream job through this site, come and grab this golden opportunity!  </p>
                                </div>
                                <div className="dz-info">
                                    <div className="bottom-contact">
                                        <div className="dz-media">
                                            <Link to={"/blog-details"}><img src={item.image} alt="" /></Link>
                                        </div>
                                        <div>
                                            <h6 className="dz-title"><Link to={"/blog-details"}>{item.title}</Link></h6>
                                            <p className="text">{item.subtitle}</p>
                                        </div>
                                    </div>
                                    {SVGICON.DoubleArrow}
                                </div>
                            </div>
                        </SwiperSlide>       
                    ))}
                </Swiper>
            </div>
            <div className="num-pagination style-1">
                <div className="testimonial-next btn-prev" onClick={() => swiperRef.current?.slidePrev()}><i className="fa-solid fa-angle-left"></i></div>
                <div className="testimonial-prev btn-next" onClick={() => swiperRef.current?.slideNext()}><i className="fa-solid fa-angle-right"></i></div>
            </div>
        </>
    );
}
