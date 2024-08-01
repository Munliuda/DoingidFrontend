import React,{useEffect, useReducer, useState} from 'react';
import { Link} from 'react-router-dom';
import { IMAGES } from '../constants/theme';

function NavMenuToggle(){
    setTimeout(()=>{
        let toggleBtn = document.getElementById('navbutton');
        let sidebarOpen = document.getElementById('navbarNavDropdown');
        toggleBtn.classList.toggle("open");
        sidebarOpen.classList.toggle("show")
    },200)
}

const menuItem = [
    {
        title:'Home',
        to: '/',  
        path:'1'      
    },
    {
        title:'About Us',
        to:'/about-us',
        path:'2'
    },
    {
        title:'Jobs',    
        // to:'#'    
        dropmenu:'sub-menu-down',
        content: [
            { subtitle:'Jobs Grid', to:'/jobs-grid', path:'3' },
            { subtitle:'Job Detail', to:'/job-detail', path:'4' },
        ],
    },
    {
        title:'Pricing',
        to:'/pricing',
        path:'5'
    },
    {
        title:'Blog',
        // to:'#',
        dropmenu:'sub-menu-down',
        content: [
            { subtitle:'Blog List', to:'/blog-list', path:'6' },
            { subtitle:'Blog Grid', to:'/blog-grid', path:'7' },
            { subtitle:'Blog Details', to:'/blog-details', path:'8' },
        ],
    },
    {
        title:'Contact Us',
        to:'/contact-us',
        path:'9'
    },
];


const reducer = (previousState, updatedState) => ({
    ...previousState,
    ...updatedState,
});
const initialState = {
    //active : "",
    activeSubmenu : "",
  }
  
  function Header(props){
    const [state, setState] = useReducer(reducer, initialState);	
    const handleSubmenuActive = (status) => {		
        setState({activeSubmenu : status})
        if(state.activeSubmenu === status){
          setState({activeSubmenu : ""})			
        }    
    }   
    const [headerFix, setheaderFix] = React.useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			setheaderFix(window.scrollY > 50);
		});
	}, []); 
   
    const [pathActive, setPathActive] = useState('1');
    
    return(
        <>
            <header className={`site-header mo-left header ${props.style}`}>                
                <div className={`sticky-header main-bar-wraper navbar-expand-lg ${headerFix ? "is-fixed" : ""}`}>
                    <div className="main-bar clearfix ">
                        <div className="container clearfix">
                            <div className="logo-header">
                                <Link to={"/"} className="logo-dark"><img src={IMAGES.Logo} alt="" /></Link>
                            </div>
                            <button className="navbar-toggler collapsed navicon justify-content-end" type="button" id="navbutton"                            
                                onClick={()=>NavMenuToggle()}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            <div className="extra-nav">
                                <div className="extra-cell">
                                    <button id="quik-search-btn" type="button" className="header-search-btn"><i className="fa-solid fa-magnifying-glass"></i></button>
                                    <Link to={"http://jobick.dexignlab.com/react/demo/"} className="btn btn-dark btn-lg btn-shadow" target="_blank">login</Link>
                                </div>
                            </div>
                            <div className="dz-quik-search on">                                
                                <input name="search"  type="text" className="form-control" placeholder="Enter Your Keyword ..." />
                                <span id="quik-search-remove"><i className="fa-solid fa-xmark"></i></span>                                
                            </div>
                            <div className="header-nav navbar-collapse collapse justify-content-end" id="navbarNavDropdown" >
                                <div className="logo-header">
                                    <Link to={"/"} className="logo-dark"><img src={IMAGES.Logo} alt="" /></Link>
                                </div>
                                <ul className="nav navbar-nav navbar navbar-left">	
                                    {menuItem.map((item, index)=>{     
                                        let menuClass = item.dropmenu;   
                                        if(menuClass === "sub-menu-down"){ 
                                            return(
                                                <li key={index}  className={`sub-menu-down  ${state.activeSubmenu === item.title ? "open" : ''} `}                                                    
                                                ><Link to={"#"}
                                                    onClick={()=>handleSubmenuActive(item.title)}
                                                >{item.title}</Link>
                                                    <ul className="sub-menu"> 
                                                        {item.content && item.content.map((data, ind)=>{
                                                            return(
                                                                <li key={ind}                                                       
                                                                ><Link to={data.to}                                                                    
                                                                >{data.subtitle}</Link></li>
                                                            )
                                                        })}
                                                    </ul>
                                                </li>
                                            )
                                        }else{
                                            return (
                                                <li key={index}
                                                    className={`${pathActive === item.path ? 'active' : ''}`}
                                                >
                                                    <Link to={item.to}                                                        
                                                        onClick={()=>setPathActive(item.path)}    
                                                    >{item.title}
                                                    </Link>
                                                </li>
                                            )
                                        }
                                    })}                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;