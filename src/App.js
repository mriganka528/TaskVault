import './App.css';
import Add from './Components/AddTodo/Add';
import Home from './Components/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addtodo" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
