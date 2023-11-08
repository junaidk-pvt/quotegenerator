import { lazy } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import {Path} from './utils/Path'
const QuotesGenerator =  lazy(() => import("./pages/QuotesGenerator"));
const Bookmarks =  lazy(()=> ("./pages/Bookmarks"));
// import QuotesGenerator from "./pages/QuotesGenerator";
console.log('Path[0].path', Path[0].path)
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to={Path[0].path} replace />,
      },
    
    {
        path:"/",
        element: <Layout/>,
        children: [
            {
                path: Path[0].path,
                element: <QuotesGenerator/>,
            },
            {
                path:  Path[1].path,
                element: <Bookmarks/>,
            },
        ]
    }
])