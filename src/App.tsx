import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './app/pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;