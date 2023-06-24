//variables
const UPDATE_SELECTED_CATEGORY = 'UPDATE_SELECTED_CATEGORY';
//selectors
export const getSelectedCategory = (state) => state.selectedCategory;

// action creators
export const updateSelectedCategory = (payload) => ({
  type: UPDATE_SELECTED_CATEGORY,
  payload,
});

const selectedCategoryReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_SELECTED_CATEGORY:
      return action.payload;
    default:
      return statePart;
  }
};

export default selectedCategoryReducer;
