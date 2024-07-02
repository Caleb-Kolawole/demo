import './App.css';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from './Home';
import Paginate from './Paginate';
import Excel from './Excel';
import Login from './Login';
import Prime from './prime';
import FetchData from './FetchData';

function App() {

  // Hello from caleb

  return (
    <div className="App">
      <h2>Welcome to Demo</h2>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/excel" element={<Excel />} />
          <Route path="/paginate" element={<Paginate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/prime" element={<Prime />} />
          <Route path="/test" element={<FetchData />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
