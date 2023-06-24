import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { React, useState } from 'react';
import shortid from 'shortid';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { getCategories } from '../../../redux/categoriesRedux';
import Form from 'react-bootstrap/Form';

const PostForm = ({ action, actionText, ...props }) => {
  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  const [formData, setFormData] = useState({
    title: props.title || '',
    author: props.author || '',
    publishedDate: props.publishedDate || new Date(),
    shortDescription: props.shortDescription || '',
    content: props.content || '',
    category: props.category || '',
  });
  const categories = useSelector((state) => getCategories(state));

  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);

  const handleInputChange = ({ target: { name, value } }) => {
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleEditorChange = (content) => {
    setFormData((prevState) => ({ ...prevState, content }));
  };

  const handleSubmit = () => {
    setContentError(!formData.content);
    setDateError(!formData.publishedDate);
    setCategoryError(!formData.category);
    if (formData.content && formData.publishedDate && formData.category) {
      action({ id: shortid.generate(), ...formData });
    }
  };

  return (
    <div>
      <form onSubmit={validate(handleSubmit)}>
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
            {...register('title', { required: true, minLength: 3 })}
            value={formData.title}
            onChange={handleInputChange}
          />
          {errors.title && (
            <small className="d-block form-text text-danger mt-2">
              Title is too short (min is 3)
            </small>
          )}
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
            {...register('author', { required: true, minLength: 3 })}
            value={formData.author}
            onChange={handleInputChange}
          />
          {errors.author && (
            <small className="d-block form-text text-danger mt-2">
              Author is required and should be at least 3 characters long.
            </small>
          )}
        </div>
        <div className="mb-3">
          <DatePicker
            id="publishedDate"
            selected={formData.publishedDate}
            onChange={(date) =>
              handleInputChange({
                target: { name: 'publishedDate', value: date },
              })
            }
          />
          {dateError && (
            <small className="d-block form-text text-danger mt-2">
              Date is required
            </small>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <Form.Select
            aria-label="Default select example"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
          >
            <option value="">Select category</option>
            {categories.map((category) => (
              <option key={shortid.generate()} value={category.id}>
                {category}
              </option>
            ))}
          </Form.Select>
          {categoryError && (
            <small className="d-block form-text text-danger mt-2">
              Category is required
            </small>
          )}
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
            {...register('shortDescription', { required: true, minLength: 20 })}
            value={formData.shortDescription}
            onChange={handleInputChange}
          />
          {errors.shortDescription && (
            <small className="d-block form-text text-danger mt-2">
              Short description is required and should have at least 20
              characters.
            </small>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <ReactQuill
            theme="snow"
            id="content"
            placeholder="Enter content"
            name="content"
            value={formData.content}
            onChange={handleEditorChange}
          />
          {contentError && (
            <small className="d-block form-text text-danger mt-2">
              Content can't be empty
            </small>
          )}
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
  publishedDate: PropTypes.instanceOf(Date),
};

export default PostForm;
