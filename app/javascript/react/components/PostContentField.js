import React from 'react';

const PostContentField = (props) => {
  return (
    <label className="form-field">
      <textarea
        placeholder='... add content'
        type='text'
        value={props.content}
        onChange={props.handleFormContentChange}
      />
    </label>
  );
}

export default PostContentField;
