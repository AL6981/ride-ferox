import React, { Component } from 'react';
import CommentBodyField from '../components/CommentBodyField'

class CommentsFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      commentBody: ''
    }
    this.handleFormBodyChange=this.handleFormBodyChange.bind(this)
    this.handleFormSubmit=this.handleFormSubmit.bind(this)
    this.handleClearForm=this.handleClearForm.bind(this)
  }

  handleFormBodyChange(event){
    this.setState({commentBody: event.target.value})
  }

  handleFormSubmit(event){
    event.preventDefault()
    let formPayload = {
      body: this.state.commentBody
    }
    this.props.addNewComment(formPayload)
    this.handleClearForm(event)
  }

  handleClearForm(event){
    event.preventDefault()
    this.setState({
      commentBody: ''
    })
  }

  render() {
    return(
      <form className="new-comment-form panel">
        <fieldset>
          <div className="legend">Add Comment</div>
          <CommentBodyField
            body={this.state.commentBody}
            label="Write a Comment"
            handleFormBodyChange={this.handleFormBodyChange}
          />
          <button className="clear-button" id="clear-button" onClick={this.handleClearForm}>Clear</button>
          <input className="button" id="comment-submit" type="submit" value="Submit" onClick={this.handleFormSubmit}/>
        </fieldset>
      </form>
    )
  }
}

export default CommentsFormContainer;
