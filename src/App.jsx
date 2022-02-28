import { Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import PageList from "./pages/PageList";
import Modal from "./components/Modal";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/list" element={<PageList />} />
      <Route path="/modaltest" element={<Modal />} />
    </Routes>
  );
};

export default App;
