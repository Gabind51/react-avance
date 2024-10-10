import "./App.css";
import { DarkThemeProvider } from "./DarkThemeContext";
import Body from "./Page/Body";
import LoginButton from "./Component/LoginButton";
import { AuthProvider } from "./AuthContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProtectedRoute } from "./Component/ProtectedRoute";
import Hello from "./Page/Hello";
import Error401 from "./Page/Error401";
import Error404 from "./Page/Error404";
import Home from "./Page/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/hello",
    element: (
      <ProtectedRoute>
        <Hello />
      </ProtectedRoute>
    ),
  },
  {
    path: "/401",
    element: <Error401 />,
  },
  {
    path: "/404",
    element: <Error404 />,
  },
]);


function App() {
  return (
    <div className="app">
      <DarkThemeProvider>
        <AuthProvider>
          <Body />
          <LoginButton />
          <RouterProvider router={router} />
        </AuthProvider>
      </DarkThemeProvider>
    </div>
  );
}

export default App;
