import { useEffect, useState } from "react";
import React from "react";
function UseEffect1(){
    const [heading,setHeading]=useState(1);
    useEffect(()=>{
        document.title=heading;
    },[heading])
    return(
        <div>
            <h1>Using useEffect</h1>
            <button onClick={()=>setHeading((prev)=>prev+1)}>modify</button>
        </div>
    )
}
export default UseEffect1;