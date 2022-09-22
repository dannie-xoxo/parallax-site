import React,{useState, useEffect, useRef}from 'react'
import '../Section2/sec2.css'
import buddha from '../images/buddha.jpg';
 function Sec2() {
     
    const inner = useRef()
    

    const[offsetY, setOffsetY]= useState(0);
    const[offsetHeight, setOffsetHeight] = useState(0)
    const[contY, setContY] = useState(0)

    const handleScroll = () => {
        setOffsetY(window.pageYOffset);
        setOffsetHeight(inner.current.offsetHeight);
        setContY(inner.current.getBoundingClientRect())
    }

        useEffect(() => {
            window.addEventListener('scroll', handleScroll);
            console.log(inner.current.getBoundingClientRect())

            return () => {
                window.removeEventListener('scroll', handleScroll)
            }
        }, []);
    
    return ( 
        <>
        <div className='container2'>
        <div className="shadow" style={{height: `${offsetY * 0.5 + 300}px`}}></div>
            <div className='cont1' ref={inner} style=
            {{transform: `translateY(${offsetY / (offsetHeight + contY.top)* 50 -50}px)`,
             opacity:offsetY /(contY.top + offsetHeight)}} >
                <h2 className='title'> About
                <div className="border" ref={inner}  style={{width:`${offsetY / (contY.top + offsetHeight)* 15}%`}} ></div>
                </h2>
                <p className='text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Sequi vitae quibusdam voluptatibus architecto. Porro officiis voluptates ratione 
                 voluptatem non eaque reprehenderit cum neque in veniam? Vero unde deleniti inventore 
                 obcaecati sunt quis vel ea necessitatibus atque dolor cum, optio quasi esse ipsam expedita 
                 suscipit temporibus excepturi neque illo, incidunt cumque.
                 Saepe ratione similique reprehenderit aperiam, 
                 repellat impedit iusto sequi explicabo suscipit cumque?</p>
            </div>
            <div className='cont-2 'ref={inner} style=
            {{transform: `translateY(${offsetY / (offsetHeight + contY.top)* -50 + 50}px)`,
             opacity:offsetY /(contY.top + offsetHeight)}}>
                <img src= {buddha} alt= '' />
            </div>

        </div>
        </>
     );
 }
 
 export default Sec2;