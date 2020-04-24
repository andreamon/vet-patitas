import { v4 as uuidv4 } from "uuid";
//Estado inicial
const INICIAL_STATE = {
  pets: [
    { id: uuidv4(), name: "Nina", age: "6 años", type: "Felino" },
    { id: uuidv4(), name: "Negrunildo", age: "2 años", type: "Canino" },
    { id: uuidv4(), name: "Michitina", age: "4 años", type: "Felino" },
  ],
};
//Reducer (se ejecutará al iniciarse la aplicación)
//Recibe el estado anterior y la acción, y a partir de ellas crea un nuevo estado (se lo podría llamar también generador de estados)
export function petApp(state = INICIAL_STATE, action) {
  console.log(state, action);
  switch (action.type) {
    case "GET_PET":
      return state;
    default:
      return state;
  }
}