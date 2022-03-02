import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import PageList from './pages/PageList';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/list" element={<PageList />} />
    </Routes>
  );
};

export default App;
