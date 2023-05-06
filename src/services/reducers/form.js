import { SWITCH_MODAL } from "../actions/form";

const defaultState = {
  isPost: false,
  isModalOpen: false,
};

export const formReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SWITCH_MODAL:
      return {
        ...state,
        isModalOpen: action.item,
      };

    default:
      return state;
  }
};
