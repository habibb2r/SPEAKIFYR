import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";


const Banner = () => {
    const img = useRef(null);
    const slide = useRef(null);
    
    useEffect(()=> {
        const ban = img.current;
        const slides = slide.current;
        gsap.fromTo(ban, {x: -100} ,{ x: 0, duration: 1 })
        gsap.fromTo(slides, {x: 500} ,{ x: 0, duration: 1 })
    }, [])
    return (
        <div className="my-10 px-4 flex flex-col md:flex-row justify-evenly items-center gap-10">
            <div ref={img}  className="">
            <img className="rounded-3xl" src="https://i.ibb.co/N2wx23T/ezgif-com-optimize.gif" alt="" />
               
            </div>
            <div ref={slide} className="flex flex-col gap-6 text-left ">
                <p className="text-2xl font-semibold ">Inspiring the young -------</p>
                <p className="text-lg font-thin pr-10">To learn & gather knowledge about different skills in this summer camp campaign</p>
                <Link><button className="btn btn-accent">Join the camp now</button></Link>
            </div>
        </div>
    );
};

export default Banner;