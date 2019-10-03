

const UPDATENPOST = 'UPDATE-NEW-POST';

const UpdateNewPostReducer = (state,action)=> {
    switch (action.type) {
        case UPDATENPOST:
            state.newPostText = action.newText;
            return state;
        default:
            return state;


    }
};



export const UpdateNewPostActionCreator = () =>({type:UPDATENPOST});



export default UpdateNewPostReducer;

