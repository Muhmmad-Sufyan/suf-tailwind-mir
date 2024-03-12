
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AddForm, Home, Login, Page2, ReapireCategorys, RepairCategoryAdd, RepairCategoryEdit } from './pages'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
const router = createBrowserRouter([
  {
    path: "/", element: <App />, children: [
      { path: "", element: <Home /> },
      { path: "add", element: <AddForm /> },
      { path: "page2", element: <Page2 /> },
      { path: "page2/add", element: <AddForm /> },
      { path: "repair-categorys", element: <ReapireCategorys /> },
      { path: "repair-categorys/add", element: <RepairCategoryAdd /> },
      { path: "repair-categorys/edit", element: <RepairCategoryEdit /> },
    ]
  },
  { path: "login", element: <Login /> }

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>

)
