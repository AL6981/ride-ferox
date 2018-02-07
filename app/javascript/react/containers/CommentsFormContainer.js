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
        <div>
          <div className="form-field-title">Add Comment</div>
          <div className="form-border">
            <CommentBodyField
              body={this.state.commentBody}
              label="Write a Comment"
              handleFormBodyChange={this.handleFormBodyChange}
            />
          </div>
          <div>
            <button type="submit" onClick={this.handleClearForm}>Clear</button>
            <button className="button-sml"  type="submit" value="Submit" onClick={this.handleFormSubmit}>Submit</button>
          </div>
        </div>
    )
  }
}

export default CommentsFormContainer;
