import React, { Component } from 'react'

 class EventBind extends Component {
    constructor(props) {
        super(props)
        this.state={
            message:"Hi"
        }
        // this.ClickHandler=this.ClickHandler.bind(this)
    }
    // ClickHandler(){
    //     this.setState({
    //         message:"Bye!"
    //     })
    //     console.log(this)
    // }
    ClickHandler=()=>{
        this.setState({
            message:"GoodBye!"
        })
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.ClickHandler.bind(this)}>Click</button> */}
        {/* <button onClick={()=>this.ClickHandler()}>Click</button> */}
        <button onClick={this.ClickHandler}>click</button>        

      </div>
    )
  }
}

export default EventBind