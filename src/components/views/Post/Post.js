import { useSelector } from 'react-redux';
import { getPostById } from '../../../redux/postsRedux';
import { useParams, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, Container } from 'react-bootstrap';
import { removePost } from '../../../redux/postsRedux';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Post = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const postData = useSelector((state) => getPostById(state, id));
  const [showModal, setShowModal] = useState(false);

  const handleRemovePost = () => {
    setShowModal(true);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleDelete = () => {
    dispatch(removePost(id));
    setShowModal(false);
    navigate('/');
  };
  if (!postData) return <Navigate to="/" />;
  else
    return (
      <Container className='w-75'>
        <div className="d-flex justify-content-between my-2">
          <h2>{postData.title}</h2>
          <div>
            <Link to={`/post/edit/${id}`} className="btn btn-outline-info mx-2">
              Edit
            </Link>
            <Button variant="btn btn-outline-danger" onClick={handleRemovePost}>
              Delete
            </Button>
          </div>
        </div>
        <div>
          <p className="mb-0">
            <span className="fw-bold">Author: </span>
            {postData.author}
          </p>
          <p>
            <span className="fw-bold">Published: </span>
            {postData.publishedDate}
          </p>
          <p>{postData.content}</p>
        </div>

        <Modal show={showModal} onHide={handleCancel}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete this post?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCancel}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
};

export default Post;
