import { useEffect, useState } from "react";
import React from "react";
function UseEffect3(){
    const [x,setx]=useState(0);
    const [y,sety]=useState(0);
    const [show,setShow]=useState(true);
    useEffect(()=>{
        console.log("useEffect triggered");
        document.addEventListener('mousemove',(e)=>{
            setx(e.clientX)
            sety(e.clientY)
        },[])
    })
    return(
        <div>
            {show && <h1>Using useEffect x{x} y{y}</h1>}
            <button onClick={()=>setShow(false)}>Unmount</button>
        </div>
    )
}
export default UseEffect3;