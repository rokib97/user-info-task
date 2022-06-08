import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import UserInfo from "./Pages/UserInfo";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/user:userId" element={<UserInfo />}></Route>
      </Routes>
    </>
  );
}

export default App;
