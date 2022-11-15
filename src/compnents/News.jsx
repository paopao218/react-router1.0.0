import React from "react";
import Style from '@/css/style.css'

const News=(props)=>{
    console.log("News props",props);
    let {title,content}=props.match.params;
    return(
        <div className={Style.container}>
            <h3>News组件</h3>
            <p>title:{title}</p>
            <p>content:{content}</p>
        </div>
    )
}
export default News;