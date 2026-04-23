import { AuthProvider } from "./context/AuthContext";
import { JDProvider } from "./context/JDContext";
import AuthRoutes from "./routes/routes";
export default function App() {
  return (
    <JDProvider>
      <AuthProvider>
        <AuthRoutes />
      </AuthProvider>
    </JDProvider>
  );
}
