import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import About from "./pages/About";
import { DatabaseProvider } from "./contexts/DataBaseContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DatabaseProvider>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </DatabaseProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
