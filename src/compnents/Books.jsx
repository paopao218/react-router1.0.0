import React from "react";
import Style from '@/css/style.css'
const Books=(props)=>{
    let {location}=props;
    let url=new URLSearchParams(location.search);
    let title=url.get("title");
    let content=url.get("content");
    return(
        <div className={Style.container}>
            <h3>Books组件</h3>
            <p>title:{title}</p>
            <p>content:{content}</p>
        </div>
    )
}
export default Books;