import React,{ useReducer, useState} from 'react';
import {Link} from 'react-router-dom';

import {IMAGES} from './../constants/theme';

const logo1 = require('./../assets/images/logo.png');
const logoWhite1 = require('./..//assets/images/logo.png');
const logo2 = require('./../assets/images/logo-2.png');
const logoWhite2 = require('./../assets/images/logo-2.png');
const logo3 = require('./../assets/images/logo-3.png');
const logoWhite3 = require('./../assets/images/logo-3.png');
const logo4 = require('./../assets/images/logo-4.png');
const logoWhite4 = require('./../assets/images/logo-4.png');
const logo5 = require('./../assets/images/logo-5.png');
const logoWhite5 = require('./../assets/images/logo-5.png');
const logo6 = require('./../assets/images/logo-6.png');
const logoWhite6 = require('./../assets/images/logo-6.png');
const logo7 = require('./../assets/images/logo-7.png');
const logoWhite7 = require('./../assets/images/logo-7.png');


const initialState = false;
const reducer = (state, action) =>{
	if(action.type ==='openswitcher'){
		return { ...state, openswitcher: !state.openswitcher};
	}
	
	return state;
}

const bgColorBlog = [
	{
		colorValue:'#4885ed', style : '1', 
		bgimage1: IMAGES.smallbgimg1, bgimage2: IMAGES.largebgimg1 ,
		patterimage1: IMAGES.smallpattern1, patterimage2: IMAGES.largepattern1 
	},
	{
		colorValue:'#977fff', style : '2', 
		bgimage1: IMAGES.smallbgimg2, bgimage2: IMAGES.largebgimg2 ,
		patterimage1: IMAGES.smallpattern2, patterimage2: IMAGES.largepattern2 
	},
	{
		colorValue:'#06c6d1', style : '3', 
		bgimage1: IMAGES.smallbgimg3, bgimage2: IMAGES.largebgimg3 ,
		patterimage1: IMAGES.smallpattern3, patterimage2: IMAGES.largepattern3 
	},
	{
		colorValue:'#F93A0B', style : '4', 
		bgimage1: IMAGES.smallbgimg4, bgimage2: IMAGES.largebgimg4 ,
		patterimage1: IMAGES.smallpattern4, patterimage2: IMAGES.largepattern4 
	},
	{
		colorValue:'#f7244f', style : '5', 
		bgimage1: IMAGES.smallbgimg5, bgimage2: IMAGES.largebgimg5 ,
		patterimage1: IMAGES.smallpattern5, patterimage2: IMAGES.largepattern5 
	},
	{
		colorValue:'#b65fbd', style : '6', 
		bgimage1: IMAGES.smallbgimg6, bgimage2: IMAGES.largebgimg6 ,
		patterimage1: IMAGES.smallpattern6, patterimage2: IMAGES.largepattern6 
	},
	{
		colorValue:'#558b2f', style : '7', 
		bgimage1: IMAGES.smallbgimg7, bgimage2: IMAGES.largebgimg7 ,
		patterimage1: IMAGES.smallpattern7, patterimage2: IMAGES.largepattern7 
	},
];

function Switcher(){
	const [changeColor, setChangeColor] = useState();	
	const [state, dispatch] = useReducer(reducer, initialState);	
	
	
	function handleChangeTheme(version){
		var thememode = document.body.classList; 
		var navUl = [].slice.call(document.querySelectorAll('.main-theme-version'));
		navUl.forEach(el => el.classList.remove('active'));
		document.getElementsByClassName(version)[0].classList.add('active');	
		if(version === 'light-theme'){
			thememode.remove('layout-dark'); 
			thememode.add('layout-light');
		}else if(version === 'dark-theme'){
			thememode.remove('layout-light'); 
			thememode.add('layout-dark');
		}
	}
	
		
	function HeaderPostion(postion){
		var headermode = document.getElementsByClassName('main-bar-wraper')[0].classList;
		var navUl = [].slice.call(document.querySelectorAll('.switcher-header-layout-btn'));
		navUl.forEach(el => el.classList.remove('active'));
		document.getElementsByClassName(postion)[0].classList.add('active');
		
		if(postion === 'header-fixed'){			
			headermode.remove('sticky-no');
			headermode.add('sticky-header');
		}else if(postion === 'header-static'){
			headermode.remove('sticky-header');
			headermode.add('sticky-no');
		}
		
	}
	
	function ChnageDirectionRtl(direction){
		const directionChnage = document.getElementsByTagName("html");			
		var switcherdirection = [].slice.call(document.querySelectorAll('.dir-theme-change'));
		switcherdirection.forEach(el => el.classList.remove('active'));
		document.getElementsByClassName(direction)[0].classList.add('active');
		if(direction === 'rtl-theme'){	
			directionChnage[0].setAttribute("dir", "rtl");
			
		}else if(direction ==='ltr-theme'){				
			directionChnage[0].removeAttribute("dir", "rtl");
		}
		
	}	
	
	function handleThemeLayout(layout){		
		var changeLayout = document.body.classList; 
		var switcherlayout = [].slice.call(document.querySelectorAll('.layout-theme-change'));
		switcherlayout.forEach(el => el.classList.remove('active'));
		document.getElementsByClassName(layout)[0].classList.add('active');
		
		if(layout === 'wide-layout') {
			changeLayout.remove('boxed');
			changeLayout.remove('frame');
			changeLayout.add('wide-layout');
		}else if(layout === 'boxed'){ 
			changeLayout.remove('wide-layout');
			changeLayout.remove('frame');
			changeLayout.add('boxed'); 
		}else if(layout === 'frame'){
			changeLayout.remove('boxed');
			changeLayout.remove('wide-layout');
			changeLayout.add('frame');
		}		
	}
	
	function dzhandleThemeBgColor(action,value){				 
		var backgchnage = document.body.classList;
		
		if(backgchnage.contains('boxed') || backgchnage.contains('frame')){				
			if(action === 'bgcolor'){
				document.body.style.backgroundColor = value;
				document.body.style.backgroundImage = "";
			}else if(action === 'bgImage'){
				document.body.style.backgroundImage = "url("+ value + ")";
				document.body.setAttribute('id','bg');
			}else if(action === 'bgPattern'){					
				document.body.style.backgroundImage = "url("+ value + ")";
				document.body.setAttribute('id','bg');
				document.body.style.backgroundSize = 'auto';
			}				
		}
	}

	function dzPrimaryColor(action,value,currentEvent){				 
		var colorTheme = document.body;
		colorTheme.setAttribute('data-theme-color',value);
		var colorThemeSelectorArr = [].slice.call(document.querySelectorAll('.color-skins > li'));
		colorThemeSelectorArr.forEach(el => el.classList.remove('active'));
	
		var logoSelectorArr = currentEvent.target.getAttribute('data-logo-selector').split(',');
		var logoSrcArr = currentEvent.target.getAttribute('data-logo-image').split(',');
		var arrCount = logoSelectorArr.length;
		
		for(var i=0; i<arrCount; i++){
			if(document.querySelector(logoSelectorArr[i]) != null){				
				var imageSrc = eval(logoSrcArr[i]);	
				const logoSelct = document.querySelectorAll(logoSelectorArr);
				logoSelct.forEach(el => el.setAttribute('src',imageSrc))
				
			}
		} 		
				
		setTimeout(function(){
			currentEvent.target.parentNode.classList.add('active');
		}, 200);

	}

		
	
	return(
		<>
			<div id="dzSwitcher-right" className={`styleswitcher ${state.openswitcher ? "open" : ""}`}>
				<div className="overlay-switch"  onClick={()=>dispatch({type:'openswitcher'})}></div>
				<div className="switcher-btn-bx"  onClick={()=>dispatch({type:'openswitcher'})}>
					<Link to={"#"} className="switch-btn closed"><span className="fas fa-cog"></span></Link>
				</div>
				<div className="styleswitcher-inner">
					<div className="sw-main-title">Theme Setting</div>
					<div className="theme-design row">
						<div className="theme-box col-md-12">
							<h5 className="switcher-title"><span>Theme</span></h5>
							<ul val="themeFullColor" className="color-skins theme-panel-save">
								<li className="active">
									<Link to={"#"}
										className="theme-skin skin-1 theme-color"										
										onClick={(el)=>{dzPrimaryColor('primaryColor','color_1',el)}}
										data-color-theme="skin-1"
										data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
										data-logo-image="logo1, logoWhite1,logoWhite1"
									></Link>
								</li>
								<li>
									<Link to={"#"}											
										onClick={(el)=>{dzPrimaryColor('primaryColor','color_2',el)}}
										className="theme-skin skin-2 theme-color"										
										data-color-theme="skin-2"
										data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
										data-logo-image= "logo2,logoWhite2,logoWhite2"										
									></Link>
								</li>
								<li>
									<Link to={"#"}
										onClick={(el)=>dzPrimaryColor('primaryColor','color_3',el)}
										className="theme-skin skin-3 theme-color"										
										data-color-theme="skin-3"
										data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
										data-logo-image="logo3, logoWhite3,logoWhite3"
									></Link>
								</li>
								<li>
									<Link to={"#"}
										onClick={(el)=>dzPrimaryColor('primaryColor','color_4',el)}
										className="theme-skin skin-4 theme-color"										
										data-color-theme="skin-4"
										data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
										data-logo-image="logo4, logoWhite4,logoWhite4"
									></Link>
								</li>
								<li>
									<Link to={"#"}
										onClick={(el)=>dzPrimaryColor('primaryColor','color_5',el)}
										className="theme-skin skin-5 theme-color"
										data-color-theme="skin-5"
										data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
										data-logo-image="logo5, logoWhite5,logoWhite5"
									></Link>
								</li>
								<li>
									<Link to={"#"}
										onClick={(el)=>dzPrimaryColor('primaryColor','color_6',el)}
										className="theme-skin skin-6 theme-color"
										data-color-theme="skin-6"
										data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
										data-logo-image="logo6, logoWhite6,logoWhite6"
									></Link>
								</li>
								<li>
									<Link to={"#"}
										onClick={(el)=>dzPrimaryColor('primaryColor','color_7',el)}
										className="theme-skin skin-7 theme-color"
										data-color-theme="skin-7"
										data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
										data-logo-image="logo7, logoWhite7,logoWhite7"
									></Link>
								</li>
								
							</ul>
						</div>
					</div>
					<div className="theme-design row theme-layout-wrapper">
						<div className="theme-box col-md-12">
							<h5 className="switcher-title"><span>Theme Layout</span></h5>
							<ul val="layout" className="layout layout-view theme-panel-save">
								<li className="wide-layout active layout-theme-change">
									<Link to={"#"} dir="wide-layout" 
										onClick={()=>handleThemeLayout('wide-layout')}
									>
										<div></div>
										<span>Wide</span>
									</Link>
								</li>
								 <li className="boxed layout-theme-change">
									<Link to={"#"} dir="boxed"  
										onClick={()=> handleThemeLayout('boxed')}
									>
										<div><span></span></div>
										<span>Boxed</span>
									</Link>
								</li>
								<li className="frame layout-theme-change">
									<Link to={"#"} dir="frame"
										onClick={()=>handleThemeLayout('frame')}	
									>
										<div><span></span></div>
										<span>Frame</span>
									</Link>
								</li> 
							</ul>							
						</div>
					</div>
					<div className="theme-design row theme-view-wrapper">
						
						<div className="col-xl-6 theme-box">
							<h5 className="switcher-title"><span>Header</span></h5>
							<ul val="header" className="tab-checkbx header-view theme-panel-save">
								<li className="switcher-header-layout-btn header-fixed active">
									<Link to={"#"} dir="sticky-header" 
										onClick={()=>HeaderPostion('header-fixed')}
									>
											Fixed
									</Link>
								</li>
								<li className="switcher-header-layout-btn header-static ">
									<Link to={"#"} dir="sticky-no" 
										onClick={()=>HeaderPostion('header-static')}
									>
										Static
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="theme-design row mb-0 theme-background-wrapper">
						<div className="col-md-12 theme-box mb-4">
							<h5 className="switcher-title"><span>Background Color</span></h5>
							<ul val="bgColor" className="bg-color-switcher theme-panel-save">
								{
									bgColorBlog.map((item, ind)=>(
										<li className={changeColor == item.colorValue ? 'active' : ''} key={ind}>
											<Link to={"#"} 
												className={`bg-color-${item.style}`}
												dir={item.colorValue}
												onClick={()=>
													{
														dzhandleThemeBgColor('bgcolor',item.colorValue);
														setChangeColor(item.colorValue);
													}
												}
											>										
											</Link>
										</li>
									))
								}
								
							</ul>
						</div>
						<div className="col-md-12 theme-box mb-4">
							<h5 className="switcher-title"><span>Background Image</span></h5>
							<ul val="bgImage" className="background-switcher theme-panel-save">
								{bgColorBlog.map((item, ind)=>(
									<li className={changeColor == item.bgimage1 ? 'active' : ''} key={ind}>
										<img 
											src={item.bgimage1}
											alt={'small'+(ind+1)}  
											onClick={()=>
												{
													dzhandleThemeBgColor('bgImage',item.bgimage1);
													setChangeColor(item.bgimage1);
												}
											}
										/>								
									</li>
								))}
							</ul>
						</div>
						<div className="col-md-12 theme-box">
							<h5 className="switcher-title"><span>Background Pattern</span></h5>
							<ul val="bgPatten" className="pattern-switcher theme-panel-save">

								{bgColorBlog.map((item, ind)=>(
									<li className={changeColor == item.patterimage1 ? 'active' : ''} key={ind}>
										<img 
											src={item.patterimage1} 
											alt={'pattern' + (ind + 1) }
											onClick={()=>
												{
													dzhandleThemeBgColor('bgPattern',item.patterimage1);
													setChangeColor(item.patterimage1);
												}
											}
										/>
									</li>		
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>		
	)
}
export default Switcher;