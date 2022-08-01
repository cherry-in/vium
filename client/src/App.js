import "./App.css";
import { useRoutes } from "react-router-dom";
import Main from "./Pages/Main";
import StoreList from "./Pages/StoreList";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import SignupDone from "./Pages/SignupDone";
import Restaurant from "./Pages/Restaurant";
import Restaurant_Pickup from "./Pages/Restaurant_Pickup";
import Detail_Restaurant from "./Pages/Detail_Restaurant";
import Zzim from "./Pages/Zzim";

function App() {
  let element = useRoutes([
    {path: '/', element: <Main />},
    {path: '/login', element: <Login />},
    {path: '/signup', element: <Signup />},
    {path: '/store/list', element: <StoreList />},
    {path: '/SignupDone', element: <SignupDone />},
    {path: '/Restaurant', element: <Restaurant />},
    {path: '/Restaurant_Pickup', element: <Restaurant_Pickup />},
    {path: '/Detail_Restaurant', element: <Detail_Restaurant/>},
    {path: '/Zzim', element: <Zzim/>},
  ]);

  return element;
}

export default App;
