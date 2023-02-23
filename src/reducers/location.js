import { CHANGE_TO_GEORGIAN, CHANGE_TO_ENGLISH } from "../actionTypes";
const localeReducer = (state = "en", action) => {
  switch (action.type) {
    case CHANGE_TO_GEORGIAN:
      return ["ka"];
    case CHANGE_TO_ENGLISH:
      return ["en"];
    default:
      return state;
  }
};
export default localeReducer;
