import { BrowserRouter, Routes, Route } from "react-router-dom";

import { _404_, Home, Profile } from "./pages";

export const AppRouter: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<_404_ />} />
      </Routes>
    </BrowserRouter>
  );
};
