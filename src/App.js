import React from 'react';
// components
import Header from './components/Header';
import Footer from './components/Footer';
// pages
import Home from './pages/Home';
import About from './pages/About';
import Restaurant from './pages/Restaurant';
import RoomDetails from './pages/RoomDetails';

// react router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PreHeader from './components/PreHeader';
import Gallery from './pages/Gallery';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/room/:id',
    element: <RoomDetails />,
  },
  
  {
    path: '/about', // 
    element: <About />,
  },
  {
    path: '/restaurant', // 
    element: <Restaurant />,
  },
  {
    path: '/gellery', // 
    element: <Gallery />,
  },
]);

const App = () => {
  return (
    <div>
      <PreHeader/>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
};

export default App;
