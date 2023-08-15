import {
  BrowserRouter as Router, Routes, Route, Navigate,
} from 'react-router-dom';
import Calculate from './pages/Calculate';
import Home from './pages/Home';
import Quotes from './pages/Quotes';
import Menu from './components/Menu';

function App() {
  return (
    <div>
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/calculate" element={<Calculate />} />
          <Route path="/quotes" element={<Quotes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
