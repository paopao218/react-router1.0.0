import React from "react";
import Style from '@/css/style.css'
const Travel=(props)=>{
    console.log("Travel props",props)
    return(
        <div className={Style.container}>
            <h3>Travel组件</h3>
        </div>
    )
}
export default Travel;