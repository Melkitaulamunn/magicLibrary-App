import actionTypes from "../actions/actionTypes";
const initialState = {
  pending: false,
  success: false,
  categories: [],
  error: false,
  errorMesage: "",
};
const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.categoryActions.GET_CATEGORIES_START:
      console.log("BAŞLANGIÇ");
      return {
        ...state,
        pending: true,
      };

    case actionTypes.categoryActions.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        pending: false,
        success: true,
        error: false,
        categories: action.payload,
      };

    case actionTypes.categoryActions.GET_CATEGORIES_FAIL:
      return {
        pending: false,
        success: false,
        error: true,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};
export default categoryReducer;
