import { Navigate, Route, Routes } from "react-router-dom";
import { SalesManagerRoute } from "../../types/modules";
import { Summary } from "../Summary/Summary";
import { useEffect } from "react";
import Register from "../Register/Register";
import { RequireAuth } from "../../auth/authContext";
import Login from "../Login/Login";

interface AppRoutesProps {
  routes: SalesManagerRoute[];
}

export const AppRoutes = ({ routes }: AppRoutesProps) => {
  useEffect(() => {
    console.log("entre en routes index");
  }, []);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/"
        element={
          <RequireAuth>
            <Summary />
          </RequireAuth>
        }
      />
      {/* {routes.map(({ name, path, component }) => {
        console.log("entre a component ", component);

        if (component) {
          const PageComponent = component;
          return <Route key={path} path={path} element={<PageComponent />} />;
        }

        return (
          <Route
            key={path}
            path={path}
            element={
              <div>
                <h1>{name}</h1>
                <h3>
                  This component has not yet been implemented on the route
                </h3>
              </div>
            }
          />
        );
      })} */}
      <Route path="/summary" element={<Summary />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
