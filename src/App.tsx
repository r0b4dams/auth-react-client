import { useEffect, useState } from "react";
import { AppRouter } from "./AppRouter";
import { AuthProvider } from "./lib/AuthClient/AuthProvider";
import { useAuth } from "./lib/AuthClient/hooks/useAuth";

const auth_config = {
  clientId: import.meta.env.VITE_FUSIONAUTH_CLIENT_ID,
  serverUrl: import.meta.env.VITE_TOKEN_EXCHANGE_URL,
  redirectUri: import.meta.env.VITE_TOKEN_EXCHANGE_REDIRECT_URL,
};

export const App = () => {
  const { isLoading } = useAuth();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTimeout(() => setReady(true), 1500);
  }, [isLoading]);

  return (
    <AuthProvider {...auth_config}>
      <AppRouter />
    </AuthProvider>
  );
};
