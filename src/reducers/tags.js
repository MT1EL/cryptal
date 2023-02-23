import { SET_TAGS } from "../actionTypes";
const tagReducer = (state = null, action) => {
  switch (action.type) {
    case SET_TAGS:
      return action.payload;
    default:
      return state;
  }
};
export default tagReducer;
