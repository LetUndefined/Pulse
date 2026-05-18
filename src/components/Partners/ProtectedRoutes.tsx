import { useEffect, useState } from "react";
import { supabase } from "../../lib/Supabase";
import { Navigate, Outlet } from "react-router";

const ProtectedRoutes = () => {
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setAuthenticated(!!data.session);
      setLoading(false);
    });
  }, []);

  if (loading) return null;
  return isAuthenticated ? <Outlet /> : <Navigate to="/partner/login" />;
};

export default ProtectedRoutes;
