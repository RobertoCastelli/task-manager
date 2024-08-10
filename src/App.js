// app.js
import Footer from "./components/Footer";
import AnagraficaDitteForm from "./components/forms/AnagraficaDitteForm";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="container">
      <main className="content">
        <Header />
        <HomePage />
        <AnagraficaDitteForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
