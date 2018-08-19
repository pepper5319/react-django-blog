import React, { Component } from "react";
class Form extends Component {

  constructor(props){
    super(props);
    this.state = {
      title: null,
      message: null,
    };
    this.handleTChange = this.handleTChange.bind(this);
    this.handleMChange = this.handleMChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTChange(e) {
    this.setState({ title: e.target.value });
  }

  handleMChange(e) {
    this.setState({ message: e.target.value });
  }

  handleSubmit(e) {
    fetch('blog/posts/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        static_id: Math.floor(Math.random()*900000) + 100000,
        title: this.state.title,
        content: this.state.message,
        date: new Date().toLocaleString()
      })
    })
    .then(response => {
      if (response.status !== 201) {

      }
      document.getElementById("blog-form").reset();
      this.props.whenSubmit();
    });
    e.preventDefault();
  }

  render(){
    return(
      <form id="blog-form" onSubmit={this.handleSubmit}>
        <div class="form-group">
          <label for="postTitle">Post Title:</label>
          <input type="text" autocomplete="off" class="form-control" value={this.state.value} onChange={this.handleTChange} id="postTitle" placeholder="Title: " />
        </div>
        <div class="form-group">
          <label for="postMessage">Content:</label>
          <textarea type="text" class="form-control" value={this.state.value} onChange={this.handleMChange} id="postMessage" placeholder="Enter your post here... " />
        </div>
        <input type="submit" value="Post" class="btn btn-primary"></input>
      </form>
    );
  }
}

export default Form;
