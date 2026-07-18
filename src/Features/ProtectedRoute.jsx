import { useEffect, useState } from "react";
import supabase from "../Services/Supabase";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      setSession(session);
      setLoading(false);
    };
    checkSession();
  }, []);

  if (loading) return <p>Loading...</p>;

  if (!session) {
    return <Navigate to="/login" />;
  }

  return children;
}
