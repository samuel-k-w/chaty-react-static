import { createBrowserRouter, RouteObject } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import ResetPassword from "@/components/ResetPassword";
import ProfilePage from "@/pages/ProfilePage";
// import TaskDetailPage from "@/pages/TaskDetailPage";
// import TaskCreatePage from "@/pages/TaskCreatePage";
import PrivateRoute from "./PrivateRoute";
// import DesktopLayout from "@/layout/DesktopLayout";
// import ChatWindow from "@/pages/components/ChatWindow";
import ErrorBoundary from "@/components/ErrorBoundary";
import HomePage from "@/pages/HomePage";
import ChatPage from "@/pages/ChatPage";
// import Conversation from "@/pages/components/Conversation";

const routes: RouteObject[] = [
  {
    path: "/",
    errorElement: <ErrorBoundary />,
    element: <PrivateRoute />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      // {
      //   path: "/create",
      //   element: <TaskCreatePage />,
      // },
      {
        path: "/chat/:id",
        // element: <Conversation />,
        element: <ChatPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
];

const router = createBrowserRouter(routes);

export default router;
