import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import "./App.css";
import AppContext from "./context/AppContext";


function App() {
  return (
    <AppContext.Provider>
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Login />} />
         
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
    </AppContext.Provider>
  );
}

export default App;
