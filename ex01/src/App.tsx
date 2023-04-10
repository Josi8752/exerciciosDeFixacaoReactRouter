import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Promocao from "./routes/Promocao"
import Home from "./routes/Home"
import HomeBody from "./routes/Home/HomeBody"
import Inscricao from "./routes/Inscrição"

export default function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomeBody />} />
          <Route path="promocao" element={<Promocao />} />
          <Route path="inscricao" element={<Inscricao />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

