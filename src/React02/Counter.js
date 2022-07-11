import React, { useState } from "react";
import UseState from "./UseState";
function Counter(){
    const [count,setCount]=useState(0);
    function inc(){
        setCount(count+1);
        console.log(count);
        console.log("Changing");
    }
    function dec(){
        setCount(count-1);
    }
    return(
        <div>
        <br/>
        <h1>Counter</h1>
            value is {count} <br/>
            <button onClick={inc}>Increament</button>
            <button onClick={dec}>Decreament</button>
        </div>
    )
}
export default Counter;