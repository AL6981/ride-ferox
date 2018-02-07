import React, { Component } from 'react';
import PostContentField from '../components/PostContentField';
import PostTitleField from '../components/PostTitleField';

class PostsFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postTitle: '',
      postContent: ''
    }
    this.handleFormContentChange=this.handleFormContentChange.bind(this)
    this.handleFormTitleChange=this.handleFormTitleChange.bind(this)
    this.handleFormSubmit=this.handleFormSubmit.bind(this)
    this.handleClearForm=this.handleClearForm.bind(this)
  }

  handleFormTitleChange(event){
    this.setState({postTitle: event.target.value})
  }

  handleFormContentChange(event){
    this.setState({postContent: event.target.value})
  }

  handleFormSubmit(event){
    event.preventDefault()
    let formPayload = {
      title: this.state.postTitle,
      content: this.state.postContent
    }
    this.props.addNewPost(formPayload)
    this.handleClearForm(event)
  }

  handleClearForm(event){
    event.preventDefault()
    this.setState({
      postTitle: '',
      postContent: ''
    })
  }

  render() {
    return(
      <div className="new-post-form">
        <div className="fields-container">
          <div className="form-field-title">Submit a New Post</div>
            <div className="form-border">
              <PostTitleField
                title={this.state.postTitle}
                handleFormTitleChange={this.handleFormTitleChange}
              />
              <PostContentField
                content={this.state.postContent}
                label="Write a Post"
                handleFormContentChange={this.handleFormContentChange}
              />
            </div>
            <div>
              <button type="submit" onClick={this.handleClearForm}>Clear</button>
              <button className="button-sml" type="submit" value="Submit" onClick={this.handleFormSubmit}>Share</button>
            </div>
          </div>
      </div>
    )
  }
}

export default PostsFormContainer;
