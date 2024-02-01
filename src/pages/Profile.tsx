import { Navigate } from "react-router-dom";
import { useFusionAuth, RequireAuth } from "@fusionauth/react-sdk";

export const Profile: React.FC = (): JSX.Element => {
  const { user, isAuthenticated } = useFusionAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  console.log(user);

  return (
    <RequireAuth>
      <div>Profile</div>;
    </RequireAuth>
  );
};
