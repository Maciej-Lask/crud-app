import Button from 'react-bootstrap/Button';
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {addPost} from '../../../redux/postsRedux';
import shortid from 'shortid';
const AddPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const {title, shortDescription, content, publishedDate, author} = e.target.elements;
    dispatch(addPost({
      id: shortid.generate(),
      title: title.value,
      shortDescription: shortDescription.value,
      content: content.value,
      publishedDate: publishedDate.value,
      author: author.value
    }));
    e.target.reset();
    navigate('/');
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
            name="title"
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
            name="author"
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
            name="publishedDate"
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
            name="shortDescription"
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
            name="content"
          />
        </div>
        <Button type="submit">Add Post</Button>
      </form>
    </div>
  );
};

export default AddPostForm;
