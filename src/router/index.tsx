import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import GuestLayout from "../pages/layout/GuestLayout";
import MainLayout from "../pages/layout/MainLayout";
import Login from "../pages/login/Login";
import NoteList from "../pages/note/NoteList";
import ThemePageWeb from "../pages/settings/theme/ThemePageWeb";
import ThemeWebEdit from "../pages/settings/theme/ThemeWebEdit";
import UserList from "../pages/users/Users/UserList";
import WelcomePage from "../pages/WelcomPage";

const ProtectRouter = ({ children }: any) => {
  const token = useSelector((state: any) => state.loginSlice.token);
  console.log(token);
  console.log(children);
  return token ? children : <Navigate to="/guest/login" />;
};
const Routers = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectRouter>
            <WelcomePage />
          </ProtectRouter>
        }
      />
      <Route path="/main" element={<MainLayout />}>
        <Route
          path="/main/dashboard"
          element={
            <ProtectRouter>
              <Dashboard />
            </ProtectRouter>
          }
        />
        <Route
          path="/main/notelist"
          element={
            <ProtectRouter>
              <NoteList />
            </ProtectRouter>
          }
        />
        <Route
          path="/main/UserList"
          element={
            <ProtectRouter>
              <UserList />
            </ProtectRouter>
          }
        />
        <Route
          path="/main/ThemePageWeb"
          element={
            <ProtectRouter>
              <ThemePageWeb />
            </ProtectRouter>
          }
        />
        <Route
          path="/main/ThemeWebEdit"
          element={
            <ProtectRouter>
              <ThemeWebEdit />
            </ProtectRouter>
          }
        />
      </Route>
      <Route path="/guest" element={<GuestLayout />}>
        <Route path="/guest/login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default Routers;
