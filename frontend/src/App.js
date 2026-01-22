/*import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedbackForm from "./components/FeedbackForm";
import AdminPanel from "./components/AdminPanel";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FeedbackForm />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;*/
/*import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedbackForm from "./components/FeedbackForm";
import AdminPanel from "./components/AdminPanel";
import AdminLogin from "./components/AdminLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FeedbackForm />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
*/

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedbackForm from "./components/FeedbackForm";
import AdminPanel from "./components/AdminPanel";
import AdminLogin from "./components/AdminLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FeedbackForm />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
