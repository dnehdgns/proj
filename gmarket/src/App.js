import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import Main from "./Main"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
