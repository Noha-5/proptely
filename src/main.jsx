import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import App from "./App.jsx"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"
import RootLayout from "./layouts/RootLayout.jsx"
import PropertyPage from "./pages/PropertyPage.jsx"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="stats" element={<App />}>
        <Route path="all" element={<h1>hi</h1>} />
      </Route>
      <Route path="properties/index" element={<PropertyPage />} />
      <Route path="*" element={<h1 className="text-xl">404 - Not Found</h1>} />
    </Route>
  )
)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
