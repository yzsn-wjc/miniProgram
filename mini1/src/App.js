import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "./pages/page1";

function App() {
  return (
    <BrowserRouter basename={window.__MICRO_APP_BASE_ROUTE__ || "/"}>
      <Routes>
        <Route path="/" element={<Page1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
