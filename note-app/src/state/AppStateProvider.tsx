import usePageState from "./usePageState";
import type { Page } from "../utils/types";
import { AppStateContext } from "./AppStateContext";



type AppStateProviderProps = {
    children: React.ReactNode;
    initialState: Page;
};

export function AppStateProvider({children, initialState}: AppStateProviderProps) {
    const pageStateHandlers = usePageState(initialState);

    return (
        <AppStateContext.Provider value={pageStateHandlers}>
            {children}
        </AppStateContext.Provider>
    );

};
