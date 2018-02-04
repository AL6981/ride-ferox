import React, { Component } from 'react';
import PostTile from '../components/PostTile'

class PostIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/posts')
    .then(response => response.json())
    .then(body => {
      this.setState({posts: body.posts})
    })
  }

  render() {
    let posts = this.state.posts.map(post => {
      return(
        <PostTile
          key={post.id}
          id={post.id}
          title={post.name}
        />
      )
    })

    return(
      <div className="post-container">
        {posts}
      </div>
    )
  }
}

export default PostIndexContainer;
