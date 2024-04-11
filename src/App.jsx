import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Topics from "./pages/Topics";
import AddTopic from "./pages/AddTopic";
import UpdateTopic from "./pages/UpdateTopic";
import ErrorPage from "./pages/ErrorPage";
import UpdateResource from "./pages/UpdateResource";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "avenir lt pro, Helvetica, Arial, sans-serif",
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
        element: <Navigate to="/topics" replace={true} />,
      },
      {
        path: "/topics",
        element: <Topics />,
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
        path: "resource/:resourceId",
        element: <UpdateResource />,
        loader: UpdateResource.loader,
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
