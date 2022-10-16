import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './component/Blog/Blog';
import Home from './component/Home/Home';
import Main from './component/Layout/Main';
import QuizDetail from './component/QuizDetail/QuizDetail';
import Statics from './component/Statics/Statics';

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children:[
        {
          path:'/',
          loader: async ()=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz`)
          },
          element:<Home></Home>
        },
        {
          path:'/Statics',
          loader: async ()=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz`)
          },
          element:<Statics></Statics>
        },
        {
          path:'/Blog',
          element:<Blog></Blog>
        },
        {
          path:'/Quize/:QuizeId',
          loader: async({params})=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.QuizeId}`)
          },
          element:<QuizDetail></QuizDetail>
        }
      ]
    },
    {
      path:'*',
      element: <div>
        <h1>404</h1>
        <h2>This is Not Found</h2>
      </div>
    }
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
