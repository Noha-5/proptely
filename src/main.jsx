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
import FinancialStatsPage, {
  financialStatsLoader,
} from "./pages/FinancialStatsPage.jsx"
import UnitLayout from "./layouts/UnitLayout.jsx"
import OverviewPage, { overviewLoader } from "./pages/OverviewPage.jsx"
import HydrateFallback from "./components/HydrateFallback.jsx"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/proptely" element={<RootLayout />}>
      <Route index element={<Navigate to="portfolio" />} />
      <Route path="stats">
        <Route index element={<Navigate to="all" />} />
        <Route path="all" element={<h1>ALL stats</h1>} />
        <Route
          path="financial"
          element={<FinancialStatsPage />}
          loader={financialStatsLoader}
          hydrateFallbackElement={<HydrateFallback />}
        />
      </Route>
      <Route path="portfolio">
        <Route index element={<Navigate to="properties" />} />
        <Route
          path="properties"
          loader={propertyLoader}
          element={<PropertyPage />}
          hydrateFallbackElement={<HydrateFallback />}
        />
        <Route path="units" element={<UnitLayout />}>
          <Route index element={<Navigate to="overview" />} />
          <Route
            path="overview"
            element={<OverviewPage />}
            loader={overviewLoader}
            hydrateFallbackElement={<HydrateFallback />}
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
