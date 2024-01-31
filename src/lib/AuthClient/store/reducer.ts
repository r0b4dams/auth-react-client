import { type Reducer } from "react";
import { type AuthState } from "./state";
import { ACTIONS, type BrightAuthAction } from "./actions";

export const reducer: Reducer<AuthState, BrightAuthAction> = (
  state,
  action
): AuthState => {
  switch (action.type) {
    case ACTIONS.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };

    case ACTIONS.SET_USER:
      return { ...state, user: action.payload };

    default: {
      console.error("reducer action not recognized");
      return state;
    }
  }
};
