import { createContext } from "react";
import { AuthState } from "./store";

interface IAuthContext extends AuthState {
  isAuthenticated: () => boolean;
  login: () => void;
  logout: () => void;
  register: () => void;
}

export const AuthContext = createContext<IAuthContext>({
  isLoading: false,
  isAuthenticated: () => false,
  user: null,
  login: () => {},
  logout: () => {},
  register: () => {},
});
