import PostsList from '../../views/PostsList/PostsList';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <div className="d-flex justify-content-between my-2">
        <h2>All Posts</h2>
        <Link to={`/post/add`} className="btn btn-outline-info">
          {' '}
          Add Post{' '}
        </Link>
      </div>
      <PostsList filterPosts={false} />
    </div>
  );
};

export default Home;
