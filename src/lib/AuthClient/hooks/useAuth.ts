import { useContext } from "react";
import { AuthContext } from "../AuthContext";

export const useBrightAuth = () => useContext(AuthContext);
