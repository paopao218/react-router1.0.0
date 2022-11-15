import React from "react";
import { HashRouter as Router,Route,Link } from "react-router-dom";
import Books from "../compnents/Books";
import Home from "../compnents/Home";
import News from "../compnents/News";
import Travel from "../compnents/Travel";
import Style from '@/css/style'
//创建一个路由组件--私有路由，--vue中叫路由守卫
//功能：给路由表中添加一条路由，并且在函数中执行一些业务
const PrivateRoute=({component:Component,...rest})=>{
    return (
        <Route {...rest} render={props=>(<Travel {...props}/>)}></Route>
    )
}
const BaseRouter=()=>{
    return (
        <Router>
            <div>
                <ul className={Style.nav}>
                    <li><Link to="/">Home页面</Link></li>
                    <li><Link to="/news/react全家桶/react-router4">News页面</Link></li>
                    <li><Link to="/books/?title=react全家桶&content=react-router4">Books页面</Link></li>
                    <li><Link to="/play">Play页面</Link></li>
                    <li><Link to={{pathname:"/travel",search:"?sort=name"}}>Travel页面</Link></li>
                </ul>
                <Route exact path="/" component={Home}></Route>
                <Route path="/news/:title/:content" component={News}></Route>
                <Route strict path="/books" component={Books}></Route>
                <Route path="/play" render={(props)=>{
                    console.log("props",props);
                    return(
                        <Home {...props} name={"p1"}/>
                    )
                }}></Route>
                <PrivateRoute path="/travel" component={Travel}/>
            </div>
        </Router>
    )
}
export default BaseRouter;