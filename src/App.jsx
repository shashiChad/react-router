
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import ParamComp from './components/ParamComp';
import Mocktest from './components/Mocktest';
import Course from './components/Course';
import Report from './components/Report';
import NotFound from './components/NotFound';
const router = createBrowserRouter([
  {
    path:"/home",
    element:<div>
      <Navbar/>
      <Home/>
    </div>
  },
  {
    path:"/about",
    element:<div>
      <Navbar/>
      <About/>
    </div>
  },
  {
    path:"/dashboard",
    element:<div>
      <Navbar/>
      <Dashboard/>
    </div>,
    children:[
      {
         path:'courses',
         element:<Course/>
      },
      {
        path:'mocktest',
        element:<Mocktest/>
      },
      {
        path:'reports',
        element:<Report/>
      }
    ]
  },
  {
    path:"/student/:id",
    element:
    <div>
      <Navbar/>
      <ParamComp/>
    </div>
  },
  {
    path:'*',
    element:<NotFound/>
  }
]);

function App() {

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
        
  )
}

export default App
