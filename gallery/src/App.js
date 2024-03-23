import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import data from "./asset/data.js";

function App() {
  console.log(data);
  return (
    <div>
      <Navbar message="🎆🎉 Photo Fest 🎉🎆" />
      <Main data={data} />
      <Footer />
    </div>
  );
}

export default App;
