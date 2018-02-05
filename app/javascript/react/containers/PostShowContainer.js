import React from 'react';
import PostDetailTile from '../components/PostDetailTile'
import CommentsContainer from './CommentsContainer'
import CommentsFormContainer from './CommentsFormContainer'


class PostShowContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      comments: []
    }
    this.addNewComment = this.addNewComment.bind(this)
  }

  componentDidMount() {
    let postId = this.props.params.id
    fetch(`/api/v1/posts/${postId}`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        title: json.post.title,
        content: json.post.content,
        comments: json.comments
      })
    })
  }

  addNewComment(formPayload) {
    let postId = this.props.params.id
    fetch(`/api/v1/posts/${postId}/comments`,
      {
      credentials: 'same-origin',
      headers: {
       'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ comment: formPayload })
    })
    .then(response => response.json())
    .then(body => {
      this.setState({comments: body})
    })
  }

  render() {
    let postId = this.props.params.id
    return(
      <div>
        <PostDetailTile
          title={this.state.title}
          content={this.state.content}
        />
        <h3>Comments</h3>
        <div className="comments-container">
        <CommentsContainer
          comments={this.state.comments}
        />
        </div>
        <CommentsFormContainer
          addNewComment={this.addNewComment}
        />
      </div>
    )
  }
}


export default PostShowContainer;
