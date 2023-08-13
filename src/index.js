import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactPage from './Components/contact';
import OurProducts from './Components/products';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/products" element={<OurProducts />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  </BrowserRouter>
);
*/
const router = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/products", 
    element: <OurProducts />,
  },

  {
    path: "/contact", 
    element: <ContactPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>
);
