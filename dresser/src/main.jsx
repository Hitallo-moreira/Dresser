import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './styles/styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './App';
import HomePage from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import CreateAccount from "./pages/CreateAccount.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App>
      <HomePage />
    </App>,
  },
  {
    path: "login",
    element: <Login />, 
  },
  {
    path: "criarconta",
    element: <CreateAccount />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
