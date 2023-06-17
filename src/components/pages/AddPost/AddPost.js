import AddPostForm from '../../features/AddPostForm/AddPostForm';
import Container from 'react-bootstrap/Container';
const AddPost = () => {
  return (
    <Container className="w-75">
      <h2 className="mb-3">AddPost</h2>
      <AddPostForm />
    </Container>
  );
};

export default AddPost;
