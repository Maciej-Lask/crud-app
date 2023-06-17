//variables
const REMOVE_POST = 'app/posts/REMOVE_POST';
const ADD_POST = 'app/posts/ADD_POST';
//selectors
export const getPosts = (state) => state.posts;
export const getPostById = (state, postId) => {
  return state.posts.find((post) => post.id === postId);
}
// action creators
export const removePost = (payload) => ({
  type: REMOVE_POST,
  payload
})
export const addPost = (payload) => ({
  type: ADD_POST,
  payload
})
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_POST:
      return [...statePart, action.payload];
    case REMOVE_POST:
      return statePart.filter((post) => post.id !== action.payload);
    default:
      return statePart;
  }
};

export default postsReducer;
