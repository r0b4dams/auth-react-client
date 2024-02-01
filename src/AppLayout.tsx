import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";

export const AppLayout: React.FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <main className="flex justify-center items-center bg-slate-100">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
