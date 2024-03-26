import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layout/Layout";
import ListedBooks from "../pages/ListedBooks";
import PagesToRead from "../pages/PagesToRead";
import BookDetails from "../pages/BookDetails";
import ReadBooks from "../components/ReadBooks";
import Wishlist from "../components/Wishlist";
import ErrorPage from "../pages/ErrorPage";
import Team from "../pages/Team";
import ContactUs from "../pages/ContactUs";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
            path: '/listed-books',
            element: <ListedBooks></ListedBooks>,
            children: [
              {
                index: true,
                element: <ReadBooks></ReadBooks>,
                loader: () => fetch('../books.json'),
              },
              {
                path: 'wishlist',
                element: <Wishlist></Wishlist>,
                loader: () => fetch('../books.json'),
              }
            ]
        },
        {
            path: '/pages-read',
            element: <PagesToRead></PagesToRead>,
            loader: () => fetch('/books.json')
        },
        {
            path: '/book/:id',
            element: <BookDetails></BookDetails>,
            loader: () => fetch('/books.json')
        },
        {
            path: '/team',
            element: <Team></Team>,
        },
        {
          path: '/contact',
          element: <ContactUs></ContactUs>
      },
      ],
    },
  ]);

export default router;
