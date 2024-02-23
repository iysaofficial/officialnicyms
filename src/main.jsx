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
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
