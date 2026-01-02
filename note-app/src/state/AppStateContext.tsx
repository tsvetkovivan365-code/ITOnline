import { createContext, useContext } from "react";
import usePageState from "./usePageState";

type AppStateContextType = ReturnType<typeof usePageState>

export const AppStateContext = createContext<AppStateContextType>({} as AppStateContextType)

export const useAppState = () => useContext(AppStateContext);