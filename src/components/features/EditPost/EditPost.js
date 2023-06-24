import { editPost } from '../../../redux/postsRedux';
import PostForm from '../PostForm/PostForm';
import { getPostById } from '../../../redux/postsRedux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
const EditPost = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const postData = useSelector((state) => getPostById(state, id));
  const handleSubmit = (post) => {
    dispatch(editPost({ ...post, id }));
    navigate('/');
  };
  return (
    <div>
      <h2>EditPost</h2>
      <PostForm
        action={handleSubmit}
        actionText={'Edit Post'}
        title={postData.title}
        author={postData.author}
        publishedDate={postData.publishedDate}
        content={postData.content}
        shortDescription={postData.shortDescription}
        category={postData.category}
      />
    </div>
  );
};

export default EditPost;
