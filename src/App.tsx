import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/homepage"
import NotFound from "./pages/notFound"

 function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
