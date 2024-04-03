import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import AppLayout from "./ui/AppLayout"
import Topics from "./pages/Topics"
import AddTopic from "./pages/AddTopic"
import UpdateTopic from "./pages/UpdateTopic"
import ErrorPage from "./pages/ErrorPage"
import UpdateResource from "./pages/UpdateResource"

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Navigate to="/topics" replace={true}/>,
      },
      {
        path: "/topics",
        element: <Topics />
      },
      {
        path: "/topic",
        element: <AddTopic />
      },
      {
        path: "/topic/:topicId",
        element: <UpdateTopic />,
        loader: UpdateTopic.loader,
      },
      {
        path: "resource/:resourceId",
        element: <UpdateResource />,
        loader: UpdateResource.loader
      },
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}
export default App
