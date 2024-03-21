import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider.tsx'

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
}])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
