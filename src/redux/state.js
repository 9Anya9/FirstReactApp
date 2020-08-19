import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 12 },
        { id: 2, message: "Its my first post", likesCount: 11 },
      ],
      newPostText:"hello"
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Anya" },
        { id: 2, name: "Vova" },
        { id: 3, name: "Misha" },
        { id: 4, name: "Dima" },
        { id: 5, name: "Grisha" },
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "HELLOO" },
        { id: 3, message: "MayyyyY" },
        { id: 4, message: "byyyyyyyyyyyeee" },
        { id: 5, message: "LET ME" },
      ],
      newMessageBody:""
    }
  },
  _callSubscriber() {
    console.log('state changed');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage=profileReducer(this._state.profilePage,action);
    this._state.dialogsPage=dialogsReducer(this._state.dialogsPage,action);
  
      this._callSubscriber(this._state);
    }
}



export default store;
window.store=store;