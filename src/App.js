import "./style/App.css";
import Home from "./pages/Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
function App() {
  return (
    <div className='App'>
      <Navbar />

      <Home />
      <Footer />
    </div>
  );
}

export default App;
