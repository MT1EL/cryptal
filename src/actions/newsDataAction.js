import { SET_NEWS_DATA } from "../actionTypes";
export const setNewsData = ({ data }) => {
  return {
    type: SET_NEWS_DATA,
    payload: data,
  };
};
