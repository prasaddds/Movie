import React,{useState,useEffect} from "react";
const UseEffect5=()=>{
    const [data,setData]=useState([]);
    const [inp,setInp]=useState("");
    const [id,setId]=useState(inp);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${inp}`)
        .then((res)=>res.json())
        .then((result)=>setData(result));
    },[id]);
    return(
        <>
        <h1>API</h1>
        <input type="text" value={inp} onChange={(e)=>setInp(e.target.value)}/>
        <li>{data.title}</li>
        <button onClick={()=>setId(inp)}>Call API</button>
    </>
    )
}
export default UseEffect5;