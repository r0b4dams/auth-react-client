import { type User } from "./state";

export enum ACTIONS {
  SET_IS_LOADING = "SET_IS_LOADING",
  SET_USER = "SET_USER",
}

interface BooleanAction {
  payload: boolean;
  type: ACTIONS.SET_IS_LOADING;
}

interface UserAction {
  payload: User;
  type: ACTIONS.SET_USER;
}

export type BrightAuthAction = BooleanAction | UserAction;

// action creators

export const setIsLoading = (payload: boolean): BooleanAction => {
  return {
    type: ACTIONS.SET_IS_LOADING,
    payload,
  };
};

export const setUser = (payload: User): UserAction => {
  return {
    type: ACTIONS.SET_USER,
    payload,
  };
};
