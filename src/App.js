import Level1 from "./Level1";
import Level2 from "./Level2";
import Level3 from "./Level3";
import { RouterProvider ,createBrowserRouter} from "react-router-dom";

function App() {
    const router = createBrowserRouter([
      {path:'/',element:<Level1 />},
      {path:'/level2',element:<Level2 />},
      {path:'/level3',element:<Level3 />}
    ] )

  return (
    <RouterProvider router={router}>
     
    </RouterProvider>
  );
}

export default App;
