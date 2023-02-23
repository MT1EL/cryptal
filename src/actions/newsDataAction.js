import { SET_NEWS_DATA } from "../actionTypes";
export const setNewsData = ({ data }) => {
  console.log(data);
  return {
    type: SET_NEWS_DATA,
    payload: data,
  };
};
