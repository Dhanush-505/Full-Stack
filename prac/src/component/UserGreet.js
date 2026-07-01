import React, { Component } from 'react'

 class UserGreet extends Component {
    constructor(props){
        super(props)
        this.state={
            isloggedin:true
        }
    }
  render() {
    return(
    //   this.state.isloggedin?
    // <div>Welcome back!</div>:
    // <div>Please log in.</div>
    this.state.isloggedin && <div>Welcome back!</div>
    )
    // let message
    // if(this.state.isloggedin){
    //     message=<div>Welcome back!</div>
    // } else {
    //     message=<div>Please log in.</div>
    // }
    // return <div>{message}</div>
    //   if (this.state.isloggedin){
    //     return <div>Welcome back!</div>
    //   } else {
    //     return <div>Please log in.</div>
    //   }
   
  }
}

export default UserGreet