import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PrivateRoute() {
    const token = useSelector((state) => state.user.value.token);
    return token ? <Outlet /> : <Navigate to="/login" />;
}