import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form"
class DataProvider extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: [],
      loaded: false,
      placeholder: "Loading..."
    };
    this.reloadPosts = this.reloadPosts.bind(this);
  }
  reloadPosts(){
    fetch(this.props.endpoint)
      .then(response => {
        if (response.status !== 200) {
          return this.setState({ placeholder: "Something went wrong" });
        }
        return response.json();
      })
      .then(data => this.setState({ posts: data, loaded: true }));
  }
  componentDidMount() {
    this.reloadPosts();
  }
  addPost(){

  }
  render() {
    const { posts, loaded, placeholder } = this.state;
    return loaded ?
      (<div>
        <Table whenSubmit={this.reloadPosts} data={posts} />
        <Form whenSubmit={this.reloadPosts}/>
      </div>) : (<p>{placeholder}</p>);
  }
}
export default DataProvider;
