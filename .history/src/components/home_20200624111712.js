import React from "react";
import Imagee from '../assets/images/lines and sun.jpg';
import Image2 from '../assets/images/color.png';
export default function Home() {
    return <div>
    <div className="flex justify-evenly max-w-md mx-auto flex p-6 bg-gray-90 mt-10 rounded-lg shadow-xl">
   <img src={Imagee} className="image1"/>
   <img src={Image2} className="image2"/>
    </div>
    </div>;

  }