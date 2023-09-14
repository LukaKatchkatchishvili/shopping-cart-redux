// import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";

function App() {
  // const name = useSelector((state) => state.user.userInfo);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
