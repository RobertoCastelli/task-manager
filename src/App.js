import Footer from "./components/Footer";
import Header from "./components/Header";
import MyProvider from "./context/Context";

// app.js
function App() {
  return (
    <MyProvider>
      <div className="App">
        <Header />
        <Footer />
      </div>
    </MyProvider>
  );
}

export default App;
