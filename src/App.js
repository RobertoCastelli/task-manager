// app.js
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Ditte from "./components/forms/DitteForm";

function App() {
  return (
    <div className="container">
      <main className="content">
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/ditte" element={<Ditte />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
