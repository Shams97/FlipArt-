import React, { Component ,useState } from 'react'
const [count ,setCount] = useState('0');
export default class Try extends Component {
    render() {
        return (
            <div>
                <button onclick={()=> setCount(count+1)}> you press number of {count} times </button>
            </div>
        )
    }
}
