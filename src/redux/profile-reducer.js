const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 12 },
        { id: 2, message: "Its my first post", likesCount: 11 },
      ],
      newPostText:"hello",
      profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:{
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            let stateCopy={...state};
            stateCopy.posts=[...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = "";
            return stateCopy;
        }
        case SET_USER_PROFILE:{
            return{...state,profile:action.profile}
        }
        case UPDATE_NEW_POST_TEXT:{
            let stateCopy=[...state];
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}


export const addPostActionCreator = () => ({ type: ADD_POST })
export const setUserProfile =(profile)=>({type:SET_USER_PROFILE, profile})
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText:text });


export default profileReducer;