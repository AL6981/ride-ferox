import React, { Component } from 'react';
import { Link } from 'react-router';
import PostTile from '../components/PostTile';
import PostsFormContainer from './PostsFormContainer';

class PostIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
    this.addNewPost=this.addNewPost.bind(this)
  }

  componentDidMount() {
    fetch('/api/v1/posts')
    .then(response =>
      response.json())
    .then(body => {
      this.setState({posts: body})
    })
  }

  addNewPost(formPayload) {
    fetch('/api/v1/posts',
      {
      credentials: 'same-origin',
      headers: {
       'Content-Type': 'application/json',
       'X-Requested-With': 'XMLHttpRequest'
      },
      method: 'POST',
      body: JSON.stringify(formPayload)
    })
    .then(response => response.json())
    .then(body => {
      this.setState({posts: this.state.posts.concat(body)})
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
      <div>
        <div className="link-tabs">
          <Link className="fa fa-map fa-2x" to={`/maps`}/>
          <Link className="fa fa-comments fa-2x" to={`/posts`} />
          <i className="fa fa-sliders fa-2x"/>
        </div>
        <div className="post-container">
          <div className="forum-title">FeRox Forum</div>
            <div className="post-tile-container">
              <h5>Recent Postings</h5>
              {posts}
            </div>
          </div>
          <PostsFormContainer
            addNewPost={this.addNewPost}
          />
      </div>
    )
  }
}

export default PostIndexContainer;
