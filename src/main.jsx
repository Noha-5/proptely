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
      <Route index element={<Navigate to="portfolio" />} />
      <Route path="stats">
        <Route index element={<Navigate to="all" />} />
        <Route path="all" element={<h1>ALL stats</h1>} />
      </Route>
      <Route path="portfolio">
        <Route index element={<Navigate to="properties" />} />
        <Route
          path="properties"
          loader={propertyLoader}
          element={<PropertyPage />}
          hydrateFallbackElement={
            <div className="w-full h-[100vh] flex justify-center items-center">
              {console.log("loading in hydrate")}
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900"></div>
              <h1 className="ms-1 text-2xl">Loading Data...</h1>
            </div>
          }
        />
      </Route>
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
