
const ADD_POST = 'ADD-POST';

const AddPostReducer = (state,action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {postTxt: action.postText, user: action.poster};
            state.posts.unshift(newPost);
            return state;
        default:
            return state;
    }
};



export const AddPostActionCreator = (text,poster) =>({type:ADD_POST,postText:text,poster:poster});
export default AddPostReducer;





