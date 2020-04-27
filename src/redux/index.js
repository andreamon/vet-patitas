import axios from 'axios'

// Constantes
const dataInicial = {
    array: [],
}
const GET_PET = 'GET_PET'

// Reducer
export default function petReducer (state = dataInicial, action) {
    switch(action.type){
        case GET_PET:
            return {...state, array: action.payload}
        default: 
            return state
    }
}

// Acciones
export const getPetAction = () => async (dispatch, getState) => {
    // console.log(getState())
    return dispatch => axios.get('/api/petsList.js').then(response => dispatch(
        {
            type: GET_PET,
            payload: response.data,
        }
    ))
}