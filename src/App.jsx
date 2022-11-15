import React, { Component } from 'react'
import BaseRouter from './router/BaseRouter'
import Style from '@/css/style'
export default class App extends Component {
  render() {
    return (
      <div>
        <h3 className={Style.special}>App组件</h3>
        <BaseRouter />
      </div>
      
    )
  }
}

