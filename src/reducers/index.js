const adoptedsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_ADOPTED":
      return {
        ...state,
        adopteds: [...state.adopteds, action.payload],
      };
    case "SHOW_MODAL":
      return {
        ...state,
        show: true,
        petSelected: action.payload,
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        show: false,
      };
    default:
      return state;
  }
};

export default adoptedsReducer;
