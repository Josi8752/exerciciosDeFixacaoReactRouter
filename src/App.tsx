import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import MySite from "./routes/Home"
import Promocao from "./routes/Promocao"
import Inscricao from "./routes/Inscricao"

export default function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MySite />}>
          <Route index element={<MySite />} />
        </Route>
        <Route path="promocao" element={<Promocao />} />

        <Route path="inscricao" element={<Inscricao />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

