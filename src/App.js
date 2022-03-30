import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Shop from "./Components/Shop/Shop";
import Orders from "./Components/Orders/Orders";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import OrdersReview from "./Components/OrdersReview/OrdersReview";
import NotFound from "./Components/NotFound/NotFound";

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
        <Route path="/about" element={<About></About>}>
          About
        </Route>
        <Route path="/orders" element={<Orders></Orders>}>
          Orders
        </Route>
        <Route path="/oreder-reveiw" element={<OrdersReview></OrdersReview>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
