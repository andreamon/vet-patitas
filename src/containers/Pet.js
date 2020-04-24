import { connect } from "react-redux";
import PetsList from "../ListTest";

//Primer parámetro para pasarle al método connect
const mapStateToProps = (state) => {
  return { pets: state.pets };
};

//Segundo parámetro del método connect
const mapDispatchToProps = (dispatch) => {
  return {
    get: () => dispatch({ type: "GET_PET" }),
    // add: () => dispatch({ type: "ADD" }),
    // delete: () => dispatch({ type: "DELETE" }),
  };
};

const createConnection = connect(mapStateToProps, mapDispatchToProps);

const ComponentWithConnectionToRedux = createConnection(PetsList);

export default ComponentWithConnectionToRedux;
