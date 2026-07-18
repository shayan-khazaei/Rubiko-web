import { Navigate } from "react-router-dom";
import useAuth from "../Hook/useAuth";

export default function ProtectedRoute({ children }) {
  const { session, loading } = useAuth();

  if (loading) return <p>Loading...</p>;

  if (!session) {
    return <Navigate to="/login" />;
  }

  return children;
}
