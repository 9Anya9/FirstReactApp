const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
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
    newMessageBody: ""

}
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:{
            let stateCopy={...state};
            stateCopy.newMessageBody = action.body;
            return stateCopy;
        }
        case SEND_MESSAGE:{
            let stateCopy={...state};
            stateCopy.messages = [...state.messages];
            let body = stateCopy.newMessageBody;
            stateCopy.newMessageBody = '';
            stateCopy.messages.push({ id: 6, message: body });
            return stateCopy;
        }
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })


export default dialogsReducer;