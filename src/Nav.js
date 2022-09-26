import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./Nav.css";

function Nav() {
    const [show, setShow] = useState(false);
    const history = useHistory();

    const transitionNavBar = () => {
        if(window.scrollY>100){
            setShow(true);
        }else{
            setShow(false);
        }
    };

    useEffect( () =>{
        window.addEventListener("scroll", transitionNavBar);
        return ()=> window.removeEventListener("scroll", transitionNavBar);
    }, [])
  return (
    <div className={`nav ${show && "nav_black"}`}>
        <div className='nav_contents'>
            <img
            onClick={()=>history.push("/")} 
            className='nav_logo'
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt='' />
            <img
            onClick={()=> history.push("/profile")}
            className='nav_avatar'
            src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png' 
            alt=' '/>
        </div>
    </div>
  );
}

export default Nav;