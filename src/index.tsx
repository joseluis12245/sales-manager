import "./index.css";
import App from "./components/App";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { RequireAuth } from "./auth/authContext";
import { AuthProvider } from "./auth/authContext";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import Summary from "./components/Summary/Summary";
import ResponsiveAppBar from "./components/elements/MenuBar";
import { AppRoutes } from "./components/Routes";
import { Modules } from "./components/Modules";

const rootElement = document.getElementById("root");
render(
  <AuthProvider>
    <Provider store={store}>
      <BrowserRouter>
        {/* <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <ResponsiveAppBar> */}
        {/* <App /> */}
        <ResponsiveAppBar>
          <AppRoutes routes={Modules} />
        </ResponsiveAppBar>
        {/* </ResponsiveAppBar>
              </RequireAuth>
            }
          /> */}

        {/* <Route path="/summary" element={<Summary />} />
            <Route path="/register" element={<Register />} /> */}
        {/* </Routes>
      </BrowserRouter> */}
      </BrowserRouter>
    </Provider>
  </AuthProvider>,
  rootElement
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
