import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import Menu from "./pages/menu/Menu";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      </Route>
    </Routes>
  )
}

export default App