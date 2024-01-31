import {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  type PropsWithChildren,
} from "react";
import cookies from "js-cookie";

import { AuthContext } from "./AuthContext";
import { initialAuthState, setIsLoading, setUser, reducer } from "./store";
import { generateState } from "./utils";
import { DEFAULTS } from "./defaults";

export interface AuthConfig extends PropsWithChildren {
  clientId: string;
  serverUrl: string;
  redirectUri: string;

  loginPath?: string;
  logoutPath?: string;
  refreshPath?: string;
  registerPath?: string;
  userPath?: string;
}

export const AuthProvider: React.FC<AuthConfig> = (props) => {
  const [state, dispatch] = useReducer(reducer, initialAuthState);

  const { isLoading, user } = state;
  const { clientId, serverUrl, redirectUri } = props;

  const isAuthenticated = useCallback(() => {
    return cookies.get("app.at_exp") ? true : false;
  }, []);

  /**
   * fetch user data from FusionAuth via Auth
   */
  const getUser = useCallback(async () => {
    try {
      dispatch(setIsLoading(true));
      const response = await fetch(`${serverUrl}/auth/user`, {
        credentials: "include",
      });
      const data = await response.json();
      dispatch(setUser(data));
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  }, [serverUrl]);

  /**
   * redirect to login URL
   */
  const login = useCallback(() => {
    try {
      const loginState = generateState();
      cookies.set("lastState", loginState);

      const query = new URLSearchParams({
        client_id: clientId,
        redirect_uri: redirectUri,
        state: loginState,
        scope: DEFAULTS.SCOPE,
      });

      const redirect = `${serverUrl}/auth/login?${query}`;
      window.location.assign(redirect);
    } catch (error) {
      console.error(error);
    }
  }, [clientId, serverUrl, redirectUri]);

  /**
   * remove cookies and redirect to logout URL
   */
  const logout = useCallback(() => {
    try {
      cookies.remove("lastState");

      const query = new URLSearchParams({
        client_id: clientId,
        post_logout_redirect_uri: redirectUri,
      });

      const redirect = `${serverUrl}/auth/logout?${query}`;
      window.location.assign(redirect);
    } catch (error) {
      console.error(error);
    }
  }, [clientId, serverUrl, redirectUri]);

  /**
   * redirect to register URL
   */
  const register = useCallback(() => {
    try {
      const registerState = generateState();
      cookies.set("lastState", registerState);

      const query = new URLSearchParams({
        client_id: clientId,
        redirect_uri: redirectUri,
        state: registerState,
        scope: DEFAULTS.SCOPE,
      });

      const redirect = `${serverUrl}/auth/register?${query}`;
      window.location.assign(redirect);
    } catch (error) {
      console.error(error);
    }
  }, [clientId, serverUrl, redirectUri]);

  /**
   * if token not expired, fetch user data
   */
  useEffect(() => {
    if (isAuthenticated()) {
      getUser();
    } else {
      dispatch(setIsLoading(false));
    }
  }, [isAuthenticated, getUser]);

  const providerValue = useMemo(
    () => ({
      isAuthenticated,
      isLoading,
      user,
      login,
      logout,
      register,
    }),
    [isAuthenticated, isLoading, user, login, logout, register]
  );

  return (
    <AuthContext.Provider value={providerValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
