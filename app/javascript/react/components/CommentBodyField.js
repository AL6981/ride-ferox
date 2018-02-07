import React from 'react';

const CommentBodyField = (props) => {

  return (
      <label className="form-field">
        <textarea
          placeholder='... add comment'
          type='text'
          value={props.body}
          onChange={props.handleFormBodyChange}
        />
      </label>
  );
}

export default CommentBodyField;
