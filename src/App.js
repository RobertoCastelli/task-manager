// app.js
import Footer from "./components/Footer";
import AnagraficaDitteForm from "./components/forms/AnagraficaDitteForm";
import Header from "./components/Header";

function App() {
  return (
    <div className="container">
      <main className="content">
        <Header />
        <AnagraficaDitteForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
