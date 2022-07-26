import "./App.css";
import { useRoutes } from "react-router-dom";
import Main from "./Pages/Main";
import StoreList from "./Pages/StoreList";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  let element = useRoutes([
    {path: '/', element: <Main />},
    {path: '/login', element: <Login />},
    {path: '/signup', element: <Signup />},
    {path: '/store/list', element: <StoreList />},
  ]);

  return element;
}

export default App;
