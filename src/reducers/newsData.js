import { SET_NEWS_DATA } from "../actionTypes";
const newsDataReducer = (state = [], action) => {
  switch (action.type) {
    case SET_NEWS_DATA:
      return [...action.payload, ...state];
    default:
      return state;
  }
};
export default newsDataReducer;
