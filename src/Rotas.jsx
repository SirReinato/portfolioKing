import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaPadrao from "./pages/PaginaPadrao/PaginaPadrao";
import Home from "./pages/Home/Home";
import Sobre from "./pages/Sobre/Sobre";
import Portfolio from "./pages/Portfolio/Portfolio";
import Erro404 from "./pages/Erro404/Erro404";
import { DescricaoModalProvider } from "./context/DescricaoModalContext";



function Rotas() {

  return (
    <BrowserRouter>
      <DescricaoModalProvider>
        <Routes>
          <Route path='/' element={<PaginaPadrao />}>
            <Route index element={<Home />} />
            <Route path='/Sobre' element={<Sobre />} />
            <Route path='/Portfolio' element={<Portfolio />} />
          </Route>
          <Route path='*' element={<Erro404 />} />
        </Routes>
      </DescricaoModalProvider>
    </BrowserRouter>
  )
}

export default Rotas
