import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import HomePage from './Components/Home/HomePage/HomePage.jsx';
import Product from './Components/Product/Product.jsx';
import ServicesPupies from './Components/Product/ServicesPupies.jsx';
import PuppiesProduct from './Components/Product/PuppiesProduct/PuppiesProduct.jsx';
import OurShop from './Components/OurShop/OurShop.jsx';
import Appoinment from './Components/Appointment/Appoinment.jsx';
import AboutMe from './Components/Appointment/AboutMe.jsx';
import Contact from './Components/Contact/Contact.jsx';
import PussyService from './Components/PussyService/PussyService.jsx';
import BathService from './Components/BathService/BathService.jsx';
import Trainer from './Components/Trainer/Trainer.jsx';
import SingleShop from './Components/singleShop/singleShop.jsx';
import Review from './Components/Review/Review.jsx';
import Payment from './Components/Payment/Payment.jsx';
import Payment2 from './Components/Payment/Payment2.jsx';
import Payment3 from './Components/Payment/Payment3.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/findPuppy",
        element: <Product />,
      },
      {
        path: "/appointment",
        element: <Appoinment/>,
      },
      {
        path: "/appointmentMe",
        element: <AboutMe/>,
      },
      {
        path: "/ourShop",
        element: <OurShop />,
      },
      {
        path: "/pussyService",
        element: <PussyService></PussyService>
      },
      {
        path: "/bathService",
        element: <BathService></BathService>
      },
      {
        path: "/trainer",
        element: <Trainer></Trainer>
      },
      {
        path: "/singleShop",
        element: <SingleShop></SingleShop>
      },
      {
        path: "/review",
        element: <Review></Review>
      },
      {
        path: "/payment",
        element: <Payment></Payment>
      },
      {
        path: "/payment2",
        element: <Payment2></Payment2>
      },
      {
        path: "/payment3",
        element: <Payment3></Payment3>
      },
      
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    
      {
        path: "/services",
        element: <ServicesPupies></ServicesPupies>,
      },
      {
        path: "/puppyProducts",
        element: <PuppiesProduct></PuppiesProduct>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
