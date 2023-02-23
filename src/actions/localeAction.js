import { CHANGE_TO_ENGLISH, CHANGE_TO_GEORGIAN } from "../actionTypes";

const changeToGeo = () => {
  return {
    type: CHANGE_TO_GEORGIAN,
  };
};

const changeToEng = () => {
  return {
    type: CHANGE_TO_ENGLISH,
  };
};

export { changeToGeo, changeToEng };
