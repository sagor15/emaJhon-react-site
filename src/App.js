import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Shop from "./Components/Shop/Shop";
import Orders from "./Components/Orders/Orders";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop></Shop>}>
          Shop
        </Route>
        <Route path="/shop" element={<Shop></Shop>}>
          Shop
        </Route>
      </Routes>
      {/* <Shop></Shop> */}
      {/* <Orders></Orders> */}
    </div>
  );
}

export default App;
