import './App.css';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from './Home';
import Paginate from './Paginate';
import Excel from './Excel';

function App() {

  return (
    <div className="App">
      <h2>Welcome to Demo</h2>
      <BrowserRouter>
        <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/excel" element={<Excel />} />
              <Route path="/paginate" element={<Paginate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
