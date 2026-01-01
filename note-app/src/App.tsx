import './App.css';
import Page from "./Page/Page.tsx";
import { AppStateProvider } from './state/AppStateContext.tsx';
import { createPage } from './utils/createPage.ts';

const initialState = createPage();

export default function App() {
  return (
    <AppStateProvider initialState={initialState}>
      <Page />
    </AppStateProvider>
    
  )
}