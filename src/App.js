import "./App.css";
import ContextProvider from "./contextApi/ContextProvider";
import AllRoutes from "./Routes/AllRoutes";
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
        <AllRoutes />
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
