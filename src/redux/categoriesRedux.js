//variables
const ADD_CATEGORY = 'app/categories/ADD_CATEGORY';
//selectors
export const getCategories = (state) => state.categories;

// action creators
export const addCategory = (payload) => ({
  type: ADD_CATEGORY,
  payload
})


const categoriesReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return [...statePart, action.payload];
    default:
      return statePart;
  }
};

export default categoriesReducer;