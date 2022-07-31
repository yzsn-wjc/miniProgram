import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Page1 from "./miniPage/page1";
import Page2 from './miniPage/page2'
import Page3 from './miniPage/page3'
import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <div className="app-header">
          <h3>
            <Link to="/my-page1">点击跳转子应用1</Link>
          </h3>
          <h3>
            <Link to="/h5">点击跳转子应用2</Link>
          </h3>
          <h3>
            <Link to="/admin">点击跳转子应用3</Link>
          </h3>
        </div>
        <div className="app-content">
          <Routes>
            <Route path="/" element={<div>首页</div>} />
            <Route path="/my-page1/*" element={<Page1 />}></Route>
            <Route path="/h5/*" element={<Page2 />}></Route>
            <Route path="/admin/*" element={<Page3 />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
