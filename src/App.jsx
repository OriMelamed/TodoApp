import Main from "./pages/Main";
import Contactpage from "./pages/Contactpage";
import RootLayout from "./pages/RootLayout";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Todopage from "./pages/Todopage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/contact",
        element: <Contactpage />
      },
      {
        path: "/todo",
        element: <Todopage />
      }
    ]
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
