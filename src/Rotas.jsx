import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaPadrao from "./pages/PaginaPadrao/PaginaPadrao";
import Home from "./pages/Home/Home";
import Sobre from "./pages/Sobre/Sobre";
import Portfolio from "./pages/Portfolio/Portfolio";
import Erro404 from "./pages/Erro404/Erro404";



function Rotas() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaPadrao />}>
          <Route index element={<Home/>} />
          <Route path='/Sobre' element={<Sobre />} />
          <Route path='/Portfolio' element={<Portfolio />} />
        </Route>
        <Route path='*' element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas
