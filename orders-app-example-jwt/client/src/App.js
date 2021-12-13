import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import ListUsers from "./components/ListUsers";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/list-users" element={<ListUsers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
