import React, { Component } from "react";
import { BrowserRouter,Route} from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import CreatePost from "./Components/CreatePost";
import EditPost from "./Components/EditPost";
import PostDetails from "./Components/PostDetails";

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


