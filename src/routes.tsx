import { createBrowserRouter } from "react-router-dom";
import Resume from "./Resume";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Resume />,
  },
]);

export default router;