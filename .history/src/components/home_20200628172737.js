import React from "react";
import Imagee from '../assets/images/lines and sun.jpg';
import Image2 from '../assets/images/color.png';
import './home.css';


export default function Home() {
    return <div className="flip-outer">
    <div className="flip-inner flex justify-evenly max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl	">
   <img src={Imagee} className="flip-front"/>
   <img src={Image2} className="flip-back"/>
    </div>
    <div>this is proof of the relative </div>
  </div>;

  }

  