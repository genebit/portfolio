import React from "react"

import { BrowserRouter } from "react-router-dom"

import App from "@/App.tsx"
import ReactDOM from "react-dom/client"

import "@/assets/styles/globals.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
