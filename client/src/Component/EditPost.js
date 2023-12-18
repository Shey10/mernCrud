import React, {Component} from "react";

export default class EditPost extends Component {
    

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get('/post/${id').then((res) =>{
            if(res.data.success){
                this.setState({
                    post:res.data.post 
                });

                console.log(this.state.post);
            }
        });

        }


  render(){
    return (
      <div>
        EditPost
      </div>
    );
  }
}