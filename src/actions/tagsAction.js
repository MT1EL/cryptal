import { SET_TAGS } from "../actionTypes";

const setTag = ({ data }) => {
  return {
    type: SET_TAGS,
    payload: data,
  };
};

export { setTag };
