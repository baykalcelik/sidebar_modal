import './navbar.css';
import logo from './logo.svg';
import {links, social} from './data.js';
// import social from './data.js';
import { useState, useRef, useEffect } from 'react';
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter,FaTimes } from 'react-icons/fa';
// import { GrClose } from 'react-icons/gr';



export default function Navbar(props){

    // let yukseklik = "auto";
    const [yukseklik, setYukseklik] = useState("auto");

    const  [menulinkler, setMenulinkler] = useState(links);
    const  [sociallinkler, setSociallinkler] = useState(social);

    // useEffect(()=>{window.addEventListener("resize", ()=>{
    //     if(window.innerWidth > 800) setMenugoster(true);
    // })},[]);

    return(
        <div className={'navbarCover ' + props.goster}>

            <div className='logoArea'>
                <img className="logoimg" src={logo} alt="gereksiz"/>

                <div className='close' onClick={()=>{
                        props.setGoster("");
                    }}>
                    <FaTimes className='kapatbtn'/>
                </div>
            </div>


            {/* <span style={{display:"none"}}>{ menugoster ? yukseklik = "auto" : yukseklik = "0px"}</span> */}

            {/* style={{height:yukseklik}} */}
             <div className={'menuArea' } >
            {menulinkler.map((item, index)=>{
                return <a className='menulink' key={index} href={"localhost:3000" + item.url}><span className='iconmenu'>{item.icon}</span>{item.text}</a>
            })}
            </div>

            <div className='socialLinksArea'>
            
            {sociallinkler.map((item, index)=>{
                return <a className='sociallink' key={index} href={item.url}><span className='sociallinkicon'>{item.icon}</span></a>
            })}
            </div>

            
        </div>
    )
}