import React from "react";
import Style from '@/css/style.css'

const Home=(props)=>{
    console.log("props",props)
    return(
        <div className={Style.container}>
            <h3>Home组件</h3>
        </div>
    )
}
export default Home;