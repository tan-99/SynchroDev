import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./Signup";
import { useCookies } from "react-cookie";

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const authToken = cookies.AuthToken;
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
