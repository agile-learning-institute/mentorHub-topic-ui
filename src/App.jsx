import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import AddTopic from "./pages/AddTopic";
import UpdateTopic from "./pages/UpdateTopic";
import ErrorPage from "./pages/ErrorPage";
import UpdateResource from "./pages/UpdateResource";
import { createTheme, ThemeProvider } from "@mui/material";
import Path from "./pages/Path";
import Category from "./pages/Category";
import "./style.css";
import UpdateSkill from "./pages/UpdateSkill";
import Admin from "./pages/Admin";

const theme = createTheme({
  typography: {
    fontFamily: "avenir lt pro,  sans-serif",
  },
  palette: {
    primary: {
      main: "#2c3e50",
    },
    secondary: {
      main: "#235ac7",
    },
    error: {
      main: "#FF5252",
    },
    warning: {
      main: "#FFC107",
    },
    info: {
      main: "#3498db",
    },
    success: {
      main: "#4CAF50",
    },
    white: "#fff",
    text: {
      primary: "#2c3e50",
      secondary: "#757575",
      hint: "#BDBDBD",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F5F5F5",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          letterSpacing: "1.25px",
        },
      },
      defaultProps: {
        size: "large",
        variant: "contained",
        color: "white",
      },
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Navigate to="/path" replace={true} />,
      },
      {
        path: "/topic",
        element: <AddTopic />,
      },
      {
        path: "/topic/:topicId",
        element: <UpdateTopic />,
        loader: UpdateTopic.loader,
      },
      {
        path: "/topic/skills/:topicId/:skillId",
        element: <UpdateSkill />,
        // loader: UpdateTopic.loader,
      },
      {
        path: "topic/resource/:topicId/:resourceName",
        element: <UpdateResource />,
        loader: UpdateResource.loader,
      },
      {
        path: "/path",
        element: <Path />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  );
}
export default App;
