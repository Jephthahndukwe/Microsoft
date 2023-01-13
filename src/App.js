import './App.css';
import Office from './Office';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import GoDaddy from './GoDaddy';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path='/' element={ <Office/> } />
            <Route path='GoDaddy' element={ <GoDaddy/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
