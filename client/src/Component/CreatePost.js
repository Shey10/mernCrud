import React, {Component} from "react";

export default class CreatePost extends Component {
  constructor(props){
    super(props);
    this.state={
      topic:"",
      description:"",
      postCategory:""
    }
  }

  handleInputChange = (e) =>{
    const {name,value} = e.target;

       this.setState({
        ...this.state,
        [name]:value
       })

  }
  render(){
    return (
      <div>


          Create Post


      </div>
    );
  }
}