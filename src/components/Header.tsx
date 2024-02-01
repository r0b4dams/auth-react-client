import { Button } from "./Button";

export const Header: React.FC = (): JSX.Element => {
  const logout = () => {
    console.log("logout");
  };

  return (
    <header className="h-[10vh] flex justify-end items-center px-5">
      <Button onClick={logout}>Logout</Button>
    </header>
  );
};
