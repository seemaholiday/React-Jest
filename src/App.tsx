import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import User from './pages/user'
import Userlist from './pages/userList';
import Userdetail from './pages/userDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Userlist />,
  },
  {
    path: "/addUser",
    element: <User />
  },
  {
    path: "/userDetail/:id",
    element: <Userdetail />
  }
]);
function App() {
  return (
    <div className="App">
       <div>Welcome Home</div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
