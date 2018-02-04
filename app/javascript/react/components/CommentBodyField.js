import React from 'react';

const CommentBodyField = (props) => {
  return (
    <label >
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
