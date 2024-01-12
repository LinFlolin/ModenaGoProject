import React, { Component, useState } from "react";
import axios from "axios";
function Home(){

    const url = "http://127.0.0.1:8000/api/LuoghiAtrazioni/"
    const [data,serDara] = useState ([]);

    const fetchData =()=>{
        return axios.get(url).then((res) => setData(res.data));
        
        useIns
    }

    return{
        
    }
    
    
}