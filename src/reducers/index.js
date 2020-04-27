import axios from "axios";
//Estado inicial
const INITIAL_STATE = {
  pets: [],
};
//Reducer (se ejecutará al iniciarse la aplicación)
//Recibe el estado anterior y la acción, y a partir de ellas crea un nuevo estado (se lo podría llamar también generador de estados)
export function petApp(state = INITIAL_STATE, action) {
  console.log(state, action);
  switch (action.type) {
    case "GET_PET":
      return axios.get("./api/petsList.js").then((response) => {
        state.pets = response.pets;
      });
    default:
      return state;
  }
}
