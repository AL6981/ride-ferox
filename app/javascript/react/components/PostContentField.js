import React from 'react';

const PostContentField = (props) => {
  return (
    <label >
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
