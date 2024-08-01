import React from 'react';
import { IMAGES } from '../constants/theme';

const boxWrapper = [
    {image: IMAGES.IconPic1, title:'Regiter Your Account', number:'01', bgcolor:'sky'},
    {image: IMAGES.IconPic2, title:'Apply Your Drem Job', number:'02', bgcolor:'pink'},
    {image: IMAGES.IconPic3, title:'Upload Your Resume', number:'03', bgcolor:'green'},
];

function HowItWork(){
    return(
        <>
            <div className="row justify-content-center">
                {boxWrapper.map((item, ind)=>(
                    <div className="col-lg-4 col-md-6 m-b30" key={ind}>
                        <div className={`icon-bx-wraper style-1 bg-clr-${item.bgcolor}`}>
                            <div className="icon-media"> 
                                <img src={item.image} alt="multi" className="rounded" />
                            </div>
                            <div className="icon-content">
                                <h4 className="title">{item.title}</h4>
                                <p className="text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in</p>
                            </div>
                            <h3 className="count">{item.number}</h3>
                        </div>
                    </div>
                ))}                
            </div>
        </>
    )
}
export default HowItWork;