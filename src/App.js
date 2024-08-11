// app.js
import Footer from "./components/Footer";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="container">
      <main className="content">
        <Navbar />
        <Header />
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
