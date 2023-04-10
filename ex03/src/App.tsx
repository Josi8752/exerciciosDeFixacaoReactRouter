import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Promotion from "./routes/Promotion"
import Home from "./routes/Home"
import HomeBody from "./routes/Home/HomeBody"
import Subscription from "./routes/Subscription"

export default function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomeBody />} />
          <Route path="promotion" element={<Promotion />} />
          <Route path="subscription" element={<Subscription />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

