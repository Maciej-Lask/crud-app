//variables
const REMOVE_POST = 'app/posts/REMOVE_POST';
const ADD_POST = 'app/posts/ADD_POST';
const EDIT_POST = 'app/posts/EDIT_POST';
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
export const editPost = (payload) => ({
  type: EDIT_POST,
  payload
})
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_POST:
      return [...statePart, action.payload];
    case REMOVE_POST:
      return statePart.filter((post) => post.id !== action.payload);
    // pytanko tak chyba też być może
    // case EDIT_POST:
    //   return statePart.map((post) => {
    //     if (post.id === action.payload.id) {
    //       return action.payload;
    //     }
    //     return post;
    //   });
    case EDIT_POST:
      return statePart.map((post) =>
        post.id === action.payload.id ? { ...post, ...action.payload } : post
      );
    default:
      return statePart;
  }
};

export default postsReducer;
