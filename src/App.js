import './App.css';
import BotCollection from './components/BotCollection';
import BotSpecs from './components/BotSpecs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<BotCollection />} />
          <Route path="/botspecs/:id" element={<BotSpecs />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
