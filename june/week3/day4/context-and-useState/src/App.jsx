import { createContext } from "react";
import "./App.css";
import Child1 from "./components/Child1";
import { NameProvider } from "./providers/NameProvider";

export const Context = createContext();

function App() {
  return (
    <>
      <NameProvider>
        <Context.Provider value={"kaibalya"}>
          <Child1 />
        </Context.Provider>
      </NameProvider>
    </>
  );
}

export default App;
