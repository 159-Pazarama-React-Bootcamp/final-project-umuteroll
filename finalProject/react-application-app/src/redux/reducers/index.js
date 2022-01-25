const INITIAL_STATE = {
     user: [],
     application: [],
     lastApplicationCode: "",
     message: "",
}


export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_TICKET_ANSWER_SUCCES': return { ...state, application: action.payload }
        case 'GET_TICKET_ANSWER_ERROR': return { ...state, message: action.payload }
        case "SET_TICKET_APPLICATION": return {...state, users:action.payload}
        case "POST_TICKET_APPLICATION_SUCCES": return {...state, message: action.payload}
        case "POST_TICKET_APPLICATION_ERROR": return {...state, message: action.payload}
        case "GET_LAST_APPLICATION_CODE_SUCCES": return {...state, lastApplicationCode: action.payload}
        case "GET_LAST_APPLICATION_CODE_ERROR": return {...state, message: action.payload}
        default: return state
    }
}