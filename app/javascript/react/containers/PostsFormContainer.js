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
      <form className="new-post-form">
          <div className="legend">Share with your Sisters</div>
          <PostTitleField
            title={this.state.postTitle}
            handleFormTitleChange={this.handleFormTitleChange}
          />
          <PostContentField
            content={this.state.postContent}
            label="Write a Post"
            handleFormContentChange={this.handleFormContentChange}
          />
          <div>
            <input className="button" type="submit" value="Clear" onClick={this.handleClearForm} />
            <input className="fa fa-sync-alt fa-2x" type="submit" value="Submit" onClick={this.handleFormSubmit}/>
          </div>
      </form>

    )
  }
}

export default PostsFormContainer;
