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
      header: {
       'Content-Type': 'application/json',
       'X-Requested-With': 'XMLHttpRequest'
      },
      method: 'POST',
      body: JSON.stringify(formPayload)
    })
    .then(response => response.json())
    .then(body => {
      this.setState({comments: body.comments})
    })
  }

  render() {
    let postId = this.props.params.id
    return(
      <div>
        <div>
          <PostDetailTile
            name={this.state.name}
            description={this.state.description}
          />
        </div>
        <div className="row">
          <div className="comments large-10 columns">
            <CommentsContainer
              comments={this.state.comments}
              postId={postId}
            />
            <CommentsFormContainer
              addNewComment={this.addNewComment}
            />
          </div>
        </div>
      </div>
    )
  }
}


export default PostShowContainer;
