//variables
const REMOVE_POST = 'app/posts/REMOVE_POST';

//selectors
export const getPosts = (state) => state.posts;
export const getPostById = (state, postId) => {
  return state.posts.find((post) => post.id === postId);
}
// actions
//const createActionName = (actionName) => `app/posts/${actionName}`;
// action creators
export const removePost = (payload) => ({
  type: REMOVE_POST,
  payload
})
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case REMOVE_POST:
      return statePart.filter((post) => post.id !== action.payload);
    default:
      return statePart;
  }
};

export default postsReducer;
