import Footer from "./components/Footer";
import LoginForm from "./components/forms/LoginForm";
import Header from "./components/Header";
import MyProvider from "./context/Context";

// app.js
function App() {
  return (
    <MyProvider>
      <div className="App">
        <Header />
        <LoginForm />
        <Footer />
      </div>
    </MyProvider>
  );
}

export default App;
