import React, {Component} from "react";
import PropTypes from "prop-types";
import key from "weak-key";
class Table extends Component{
  deletePost(post_id){
    fetch('blog/posts/'+post_id+"/", {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        pk: post_id,
      })
    }).then(response => {
      if (response.status !== 204) {

      }
      this.props.whenSubmit();
    });
  }
  render(){
    return (
      <div>
        <h2>
          Showing <strong>{this.props.data.length} items</strong>
        </h2>
        {this.props.data.map(post => (
            <div class="card" key={post.static_id}>
              <div class="card-body">
                <h5 class="card-title">{post.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{post.postTime}</h6>
                <p class="card-text">{post.content}</p>
                <button class="btn btn-outline-danger" onClick={() => this.deletePost(post.static_id)}><i class="fas fa-minus-circle"></i></button>
              </div>
            </div>
        ))}
      </div>
    );
  }
}
export default Table;
