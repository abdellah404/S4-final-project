import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage.jsx";
import SearchPage from "./components/SearchPage/SearchPage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import Nav from "./components/Nav/Nav"; 

function App() {
  return (
    <Router>
      <Nav /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/app" element={<HomePage />} />
        <Route path="/app/search" element={<SearchPage />} />
        <Route path="/app/login" element={<LoginPage />} />
        <Route path="/app/register" element={<RegisterPage />} />
        <Route path="*" element={<h1>Note Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
