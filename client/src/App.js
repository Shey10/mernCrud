import React, { Component } from "react";
import { BrowserRouter,Route} from "react-router-dom";
import NavBar from "./Component/NavBar";
import Home from "./Component/Home";
import CreatePost from "./Component/CreatePost";
import EditPost from "./Component/EditPost";
import PostDetails from "./Component/PostDetails";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <NavBar/>
          
            <Route path="/" exact Component={Home}></Route> 
            <Route path="/add" Component={CreatePost}></Route>
            <Route path="/edit/:id" Component={EditPost}></Route>
            <Route path="/post/:id" Component={PostDetails}></Route>
          
        </div>
        </BrowserRouter>
    );
  }
}


