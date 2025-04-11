import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom"
import RootLayout from "./layouts/RootLayout.jsx"
import PropertyPage, { propertyLoader } from "./pages/PropertyPage.jsx"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/proptely" element={<RootLayout />}>
      <Route
        index
        element={<Navigate from="/proptely" to="/proptely/properties/index" />}
      />
      <Route path="stats" element={<h1>Stats page</h1>}>
        <Route path="all" element={<h1>ALL stats</h1>} />
      </Route>
      <Route
        path="properties/index"
        loader={propertyLoader}
        element={<PropertyPage />}
      />
      <Route
        path="*"
        element={
          <div className="h-[50%] flex justify-center items-center">
            <h1 className="text-2xl">404 - Not Found</h1>
          </div>
        }
      />
    </Route>
  )
)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
