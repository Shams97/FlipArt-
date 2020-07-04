//import React, { Component ,useState } from 'react'
//export default class Try extends Component {
  //  render() {
    //    const [count ,setCount] = useState('0');
//
  //      return (
    //        <div>
      //          <button onclick={()=> setCount(count+1)}> you press number of {count} times </button>
        //    </div>
       // )/
   // }
//}

import React,{useState} from 'react'

export default function Try() {
    const [count ,setCount] = useState('0');
    
    return (
        <div>
            <button onclick={()=> setCount(count+1)}> you press number of {count} times </button> 
        </div>
    )
}
