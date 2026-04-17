import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router';
import RootLayout from './layout/RootLayout';
import TimeLine from './pages/timeline/TimeLine';
import Stats from './pages/stats/Stats';
import Home from './pages/home/Home';
import CardDetails from './pages/details/CardDetails';
import CallCardProvider from './context/CallCardProvider';
import NotFoundPage from './pages/notFound';

const router = createBrowserRouter(
  [
  {
    path: "/",
    element: <RootLayout/>,
    children:[
      {
       path: "/",
       element : <Home></Home>,
      },
      {
       path: "/home/:id",
       element : <CardDetails></CardDetails>,
      },
      
      {
         path: "/timeline",
       element : <TimeLine/>,
      },
       {
         path: "/stats",
       element : <Stats/>,
      },

    ],
    errorElement: <NotFoundPage />,
  },

]
);


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <CallCardProvider>
   <RouterProvider router={router} />
    </CallCardProvider>

  </StrictMode>,
)
