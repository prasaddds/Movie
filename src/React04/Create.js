import React from "react";
import {useParams} from "react-router-dom";
function Create(){
    const {id}=useParams();
    return(
        <div>
            <h1>Create page: {id}</h1>
        </div>
    )
}
export default Create;