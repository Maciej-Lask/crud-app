import React from 'react';
import { getPosts, getPostsByCategory } from '../../../redux/postsRedux';
import { Card, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSelectedCategory } from '../../../redux/selectedCategoryRedux';
import styles from './PostsList.module.scss';
import dateToStr from '../../../utils/dateToStr';

const PostsList = ({ filterPosts }) => {
  const selectedCategory = useSelector(getSelectedCategory);
  const allPosts = useSelector(getPosts);
  const postsByCategory = useSelector((state) =>
    getPostsByCategory(state, selectedCategory)
  );

  const posts = filterPosts ? postsByCategory : allPosts;
  return (
    <div>
      {posts.length===0 ? (
        <h2 className='text-center'>No posts available.</h2>
      ) : (
        <Row className="d-flex">
          {posts.map((post) => (
            <div key={post.id} className="col-md-6 col-lg-4 mb-3">
              <Card>
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text className="mb-0">
                    <span className={styles.boldText}>Author: </span>
                    {post.author}
                  </Card.Text>
                  <Card.Text className="mb-0">
                    <span className={styles.boldText}>Published: </span>
                    {dateToStr(post.publishedDate)}
                  </Card.Text>
                  <Card.Text>
                    <span className={styles.boldText}>Category: </span>
                    {post.category}
                  </Card.Text>
                  <Card.Text>{post.shortDescription}</Card.Text>
                  <Link to={`/post/${post.id}`} className="btn btn-primary">
                    Read more
                  </Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Row>
      )}
    </div>
  );
};

export default PostsList;
