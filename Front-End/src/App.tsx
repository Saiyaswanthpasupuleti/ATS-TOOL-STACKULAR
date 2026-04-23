import { RouterProvider } from "@tanstack/react-router";
import { AuthProvider } from "./context/AuthContext";
import { JDProvider } from "./context/JDContext";
import { router } from "./router.tsx";

export default function App() {
  return (
    <JDProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </JDProvider>
  );
}
