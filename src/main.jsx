import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages";
import FAQ from "./pages/faqpages";
import Contact from "./pages/contactpages";
import Listnews from "./pages/news/listnews";

// List Import Berita
import News1 from "./pages/news/news1";
import News2 from "./pages/news/news2";
import News3 from "./pages/news/news3";
import News4 from "./pages/news/news4";
import News5 from "./pages/news/news5";
import News6 from "./pages/news/news6";

// Import LoW
import Lowtahun from "./pages/low/lowtahun";
import Kategori23 from "./pages/low/2023/kategori23";
import Jenjangofl23 from "./pages/low/2023/jenjangofl23";
import Jenjangonl23 from "./pages/low/2023/jenjangonl23";
import Kategori25 from "./pages/low/2025/kategori25";
import Jenjangofl25 from "./pages/low/2025/jenjangofl25";
import Jenjangonl25 from "./pages/low/2025/jenjangonl25";
import HomeIndo from "./pages/registration/homeindo";
import IndonesiaOnline from "./pages/registration/indo-online";
import IndonesiaOffline from "./pages/registration/indo-offline";
import ThankYouIndo from "./pages/registration/thankyouindo";

// import ContactPage from "./pages/contactpages";
// import Faq from "./pages/faq";
// import PosterPage from "./pages/posterlayoutpages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/faq",
    element: <FAQ />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/listnews",
    element: <Listnews />
  },
  {
    path: "/news1",
    element: <News1 />
  },
  {
    path: "/news2",
    element: <News2 />
  },
  {
    path: "/news3",
    element: <News3 />
  },
  {
    path: "/news4",
    element: <News4 />
  },
  {
    path: "/news5",
    element: <News5 />
  },
  {
    path: "/news6",
    element: <News6 />
  },
  {
    path: "/lowtahun",
    element: <Lowtahun />
  },
  {
    path: "/kategori23",
    element: <Kategori23 />
  },
  {
    path: "/jenjangofl23",
    element: <Jenjangofl23 />
  },
  {
    path: "/jenjangonl23",
    element: <Jenjangonl23 />
  },
  {
    path: "/kategori25",
    element: <Kategori25 />
  },
  {
    path: "/jenjangofl25",
    element: <Jenjangofl25 />
  },
  {
    path: "/jenjangonl25",
    element: <Jenjangonl25 />
  },
  {
    path: "/homeindo",
    element: <HomeIndo />
  },
  {
    path: "/indoonline",
    element: <IndonesiaOnline />
  },
  {
    path: "/indooffline",
    element: <IndonesiaOffline />
  },
  {
    path: "/thankyouindo",
    element: <ThankYouIndo/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
