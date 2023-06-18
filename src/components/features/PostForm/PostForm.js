import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';
import shortid from 'shortid';

const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(
    props.shortDescription || ''
  );
  const [content, setContent] = useState(props.content || '');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handlePublishedDateChange = (event) => {
    setPublishedDate(event.target.value);
  };

  const handleShortDescriptionChange = (event) => {
    setShortDescription(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    action({
      id: shortid.generate(),
      title,
      author,
      publishedDate,
      shortDescription,
      content
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control w-50"
            id="title"
            placeholder="Enter title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">
            Author
          </label>
          <input
            type="text"
            className="form-control w-50"
            id="author"
            placeholder="Enter author"
            value={author}
            onChange={handleAuthorChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="publishedDate" className="form-label">
            Published
          </label>
          <input
            type="text"
            className="form-control w-50"
            id="publishedDate"
            placeholder="Enter publication date"
            value={publishedDate}
            onChange={handlePublishedDateChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="shortDescription" className="form-label">
            Short Description
          </label>
          <textarea
            className="form-control"
            id="shortDescription"
            rows="4"
            placeholder="Enter short description"
            value={shortDescription}
            onChange={handleShortDescriptionChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <textarea
            className="form-control"
            id="content"
            rows="10"
            placeholder="Enter content"
            value={content}
            onChange={handleContentChange}
          />
        </div>
        <Button type="submit">{actionText}</Button>
      </form>
    </div>
  );
};

PostForm.propTypes = {
  action: PropTypes.func.isRequired,
  actionText: PropTypes.string.isRequired,
  title: PropTypes.string,
  shortDescription: PropTypes.string,
  content: PropTypes.string,
  author: PropTypes.string,
  publishedDate: PropTypes.string,
};

export default PostForm;
