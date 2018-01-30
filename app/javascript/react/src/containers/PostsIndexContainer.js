import React, { Component } from 'react';
import PostTile from '../components/PostTile';
import { Link } from 'react-router';

class PostsIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    console.log('component mounted')
    fetch("/api/v1/posts")
    .then(response => response.json())
    .then(body => {
      this.setState({posts: body})
    })
  }

  render() {

    let posts = this.state.posts.map(post => {
      return(
        <PostTile
          key={post.id}
          id={post.id}
          title={post.title}
        />
      )
    })

    return(
      <div className="row">
        <h4>Check out what's here!</h4>
        <div className="small-8 small-centered columns">
          {posts}
          <hr/>
        </div>
      </div>
    )
  }
}

export default PostsIndexContainer;
