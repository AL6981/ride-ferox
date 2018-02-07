import React from 'react';

const PostTitleField = (props) => {
  return (
    <label className="form-field">
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
