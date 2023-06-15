import React from 'react';
import { getPosts } from '../../../redux/postsRedux';
import { Card, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './AllPostsList.module.scss';

const AllPostsList = () => {
  const posts = useSelector(getPosts);
  return (
    <div>
      <Row className="d-flex ">
        {posts.map((post) => (
          <div key={post.id} className="col-md-6 col-lg-4 mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text className="mb-0">
                  <span className={styles.boldText}>Author: </span>
                  {post.author}
                </Card.Text>
                <Card.Text>
                  <span className={styles.boldText}>Published: </span>
                  {post.publishedDate}
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
    </div>
  );
};

export default AllPostsList;
