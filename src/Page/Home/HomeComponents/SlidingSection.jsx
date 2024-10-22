
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import banner1 from '../../../assets/banner/banner1.jpg'
import banner2 from '../../../assets/banner/banner2.jpg'
import banner3 from '../../../assets/banner/banner3.jpg'
gsap.registerPlugin(ScrollTrigger)


const SlidingSection = () => {
    const img = useRef(null);

    const onDown = () =>{
        // gsap.to(e.target, { y : -100, duration: 1})
        const ban = img.current;
        // gsap.to(e.target, { y : 0, duration: 1})
        gsap.to(ban,{ scale:0.7, duration: 1, scrollTrigger:{
            trigger: ban
        }})
    }
   
    const onUp = ()=>{
        const ban = img.current;
        // gsap.to(e.target, { y : 0, duration: 1})
        gsap.to(ban,{ scale: 1, x: 0, duration: 1 , scrollTrigger:{
            trigger: ban
        }})
    }
   
    
    useEffect(()=> {
        const ban = img.current;
        
        gsap.fromTo(ban, {y: 200} ,{ y: 0, duration: 2 , scrollTrigger:{
            trigger: ban
        }})
        
    }, [])
    return (
       <div ref={img} onMouseLeave={onDown} onMouseEnter={onUp}>
         <Carousel>
         <div>
             <img className="" src= {banner1}/>
           
            </div>
            <div>
             <img className="" src= {banner2}/>
           
            </div>
            <div>
             <img className="" src= {banner3}/>
           
            </div>
            <div>
             <img className="" src= "https://i.ibb.co/ZLxsBrF/jerry-wang-KV9-F7-Ypl2-N0-unsplash.jpg"/>
           
            </div>
        <div>
            <img className="" src= "https://i.ibb.co/s50Xcrn/national-cancer-institute-N-aihp118p8-unsplash.jpg"/>
            
        </div>
        <div>
            <img className="" src="https://i.ibb.co/tPrkQQ4/jonathan-borba-Z1-Oyw2snqn8-unsplash.jpg" />
           
        </div>
        <div>
            <img className="" src="https://i.ibb.co/h90pD9Q/cdc-8-LITu-Yk-ZRIo-unsplash.jpg" />
            
        </div>
        
       
        
    </Carousel>
       </div>
       
    );
};

export default SlidingSection;