import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sample from './components/Sample'
import Header from "./components/Header";
import Home from "./components/Home.jsx"

function App() {
  return (
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
      </BrowserRouter>
  );
}

export default App;
