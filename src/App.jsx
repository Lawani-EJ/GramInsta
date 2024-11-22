import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import AuthPage from './pages/AuthPage/AuthPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/AuthPage" element={<AuthPage/>} />
      </Routes>
    </>
  );
}

export default App;
