import { Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import PageList from "./pages/PageList";
import Modal from "./components/Modal";

const App = () => {
  const testObject = {
    id: 2,
    name: "Jamalia Pratt",
    address: "4268 Scelerisque, St.",
    phone: "010-9678-7491",
  };
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/list" element={<PageList />} />
      <Route
        path="/modaltest"
        element={<Modal cardData={testObject} type="edit" />}
      />
    </Routes>
  );
};

export default App;
