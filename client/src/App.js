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
import Order_Report from "./Pages/Order_Report";
import Jangbaguni_Nofood from "./Pages/Jangbaguni_Nofood";
import Jangbaguni_withfood_delivery from "./Pages/Jangbaguni_withfood_delivery";
import Jangbaguni_withfood_pickup from "./Pages/Jangbaguni_withfood_pickup";
import Jangbaguni_Pay_delivery from "./Pages/Jangbaguni_Pay_delivery";
import Jangbaguni_Pay_pickup from "./Pages/Jangbaguni_Pay_pickup";

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
    {path: '/Order_Report', element: <Order_Report/>},
    {path: '/Jangbaguni_Nofood', element: <Jangbaguni_Nofood/>},
    {path: '/Jangbaguni_withfood_delivery', element: <Jangbaguni_withfood_delivery/>},
    {path: '/Jangbaguni_withfood_pickup', element: <Jangbaguni_withfood_pickup/>},
    {path: '/Jangbaguni_Pay_delivery', element: <Jangbaguni_Pay_delivery/>},
    {path: '/Jangbaguni_Pay_pickup', element: <Jangbaguni_Pay_pickup/>},
  ]);

  return element;
}

export default App;
