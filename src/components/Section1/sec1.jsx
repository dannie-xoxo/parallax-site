import React, { useEffect, useState } from 'react'
import'./sec1.css';
import cloud from '../images/img1.png'
import mount from '../images/img2.png'
import trees from '../images/img3.png'

function Sec1() {

    const[active, setActive]= useState('mainNav');
    const[toggleIcon, setToggleIcon] = useState('toggler');

    const toggle =() => {
        active=== 'mainNav'
        ? setActive('mainNav nav-active')
        : setActive('mainNav')

        toggleIcon==='toggler'
        ? setToggleIcon ('toggler toggle')
        : setToggleIcon('toggler');
    }

    const[offsetY, setOffsetY]= useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset)
        useEffect(() => {
            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll)
            }
        }, []);
    
    return ( 
        <>
        <div className='container'>
            <nav className='keyNav'>
                <h1 className='header'>Travel <span>beta</span></h1>
                <ul className={active}>
                <li className='navItem'><a className='active' href="#Home" >Home</a></li>
                <li className='navItem'><a href="#menu" className='navLink'>Places</a></li>
                <li className='navItem'><a href="signIn" className='navLink'>Beaches</a></li>
                <li className='navItem'><a href="#create" className='navLink'>Contact Us</a></li>
                </ul>
                <div onClick={toggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            </nav>
            <h1 className='big-header' style={{transform: `translateY(${offsetY * 0.5}px)`}}>Thailand.</h1>
        <img className= 'clouds' src={cloud} alt='' />
        <img className= 'mount' src={mount} alt='' />
        <img className= 'trees' src={trees} alt='' />
        </div>
       
        </>
     );
}

export default Sec1;