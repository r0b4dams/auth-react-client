import { Button } from "../components/Button";

export const Home: React.FC = (): JSX.Element => {
  const handleSignup = () => {
    console.log("signup");
  };

  const handleLogin = () => {
    console.log("login");
  };

  return (
    <div className="flex flex-col space-y-10">
      <Button onClick={handleSignup}>Signup</Button>
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
};
