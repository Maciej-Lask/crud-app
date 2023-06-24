import React from 'react';
import shortid from 'shortid';
import { useSelector } from 'react-redux';
import { getCategories } from '../../../redux/categoriesRedux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useCallback } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { updateSelectedCategory } from '../../../redux/selectedCategoryRedux';

const Categories = () => {
  const categories = useSelector((state) => getCategories(state));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const [selectedCategory, setSelectedCategory] = useState('News');

  const handleClick = useCallback((e) => {
    e.preventDefault();
    const category = e.target.innerText;
    setSelectedCategory(category);
    dispatch(updateSelectedCategory(category));
    navigate(`/category/${category}`);
  }, [dispatch, navigate]);

  return (
    <>
      <h2 className="mb-3">Categories</h2>
      <ListGroup className="w-50 mx-auto text-center">
        {categories.map((category) => (
          <ListGroup.Item key={shortid.generate()} action onClick={handleClick}>
            {category}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default Categories;
