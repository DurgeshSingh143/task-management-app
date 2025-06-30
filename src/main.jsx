import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingScreen from "./pages/LandingScreen/LandingScreen.jsx";
import SignupScreen from "./pages/SignupScreen/SignupScreen.jsx";
import LoginScreen from "./pages/LoginScreen/LoginScreen.jsx";
import TaskApp from "./pages/TaskApp/TaskApp.jsx";
import { Provider } from "react-redux";
import { store } from "./features/store.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <LandingScreen /> },
      { path: "/signup", element: <SignupScreen /> },
      { path: "/login", element: <LoginScreen /> },
      { path: "/dashboard", element: <TaskApp /> },
      
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
