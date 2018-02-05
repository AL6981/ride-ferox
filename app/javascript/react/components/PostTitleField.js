import React from 'react';

const PostTitleField = (props) => {
  return (
    <label >
      <input
        placeholder='... add title'
        type='text'
        value={props.title}
        onChange={props.handleFormTitleChange}
      />
    </label>
  );
}

export default PostTitleField;
