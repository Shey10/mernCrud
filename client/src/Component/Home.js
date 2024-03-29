import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get("/posts").then((res) => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts,
        });

        console.log(this.state.posts);
      }
    });
  }

  render() {
    return (
      <div>
        <p>All Posts</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Topic</th>
              <th scope="col">Description</th>
              <th scope="col">Post Category</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
            {this.state.posts.map((post, index) => (
              <tr key={index}>
                <th scope="raw">{index + 1}</th>
                <td>
                  <a href={`/post/${post.id}`} style={{ textDecoration: "none" }}>
                    {post.topic}
                  </a>
                </td>
                <td>{post.description}</td>
                <td>{post.postCategory}</td>

                <td>
                  <button className="btn btn-warning" onClick={() => window.location.href=`/edit/${post.id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </button>

                  &nbsp;

                  <a className="btn btn-danger" href="#">
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="btn btn-success">
          <a href="/add" style={{ textDecoration: "none", color: "white" }}>
            Create New Post
          </a>
        </button>
      </div>
    );
  }
}

export default Home;
