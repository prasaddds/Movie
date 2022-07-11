import React,{useState,useEffect} from "react";
const UseEffect4=()=>{
    const [data,setData]=useState([]);
    const [inp,setInp]=useState("");
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>res.json())
        .then((result)=>setData(result));
    },[]);
    return(
        <>
        <h1>Api Calls</h1>
        {
            data.map((item)=>{
                return(
                    <li>{item.title}</li>
                )
        })
    }
    </>
    )
}
export default UseEffect4;