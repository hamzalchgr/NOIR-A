import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import Menu from "./pages/menu/Menu";
import NotFound from "./pages/NotFound";
import Booking from "./pages/booking/Booking";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/booking" element={<Booking />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
