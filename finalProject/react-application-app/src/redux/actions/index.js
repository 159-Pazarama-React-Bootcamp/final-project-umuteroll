import axios from 'axios';
export const getTicketAnswer = () => dispatch => {
    axios.get('https://61e710d9ce3a2d00173595e7.mockapi.io/application')
    .then(
        response => dispatch ({ type: 'GET_TICKET_ANSWER_SUCCES', payload: response.data }))
    .catch(error => dispatch({ type: 'GET_TICKET_ANSWER_ERROR', payload: error }))
}