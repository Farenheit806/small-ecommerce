import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { createRoot } from "react-dom/client"
import { StrictMode } from "react"

import Root from "./routes/Root"

import "./index.scss"
import HomePage from "./routes/HomePage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
])

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
