import "./../styles/App.css";
import { DataGrid, GridValueGetterParams, GridColDef } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useAppSelector, useAppDispatch } from "./../app/hooks";
import React, { useEffect, useState } from "react";
import DialogContentComponent from "./elements/DialogContent";
import { RequireAuth, useAuth } from "./../auth/authContext";
import { addUserToList } from "./../features/userManagement/user-management-slice";
import { checkUserInformation } from "./../features/userManagement/user-management-slice";
import { useNavigate } from "react-router-dom";
import ResponsiveAppBar from "./elements/MenuBar";
import { AppRoutes } from "./Routes";
import Summary from "./Summary/Summary";
import { SalesManagerRoute } from "../types/modules";
import { Modules } from "./Modules";

const App: React.FC = () => {
  const userInformation = useAppSelector((state) => state.user.userManagement);
  const userInformationList = useAppSelector((state) => state.user.userList);
  const [openModal, setOpenModal] = useState(false);
  const [userList, setUserList] = useState(userInformationList);
  const auth = useAuth();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const logOut = () => {
    auth.signout(() => {
      navigate("/login", { replace: true });
    });
  };

  useEffect(() => {
    console.log("entre aqui");
    //Setting default component
    // navigate("/login");
  }, []);

  return (
    <>
        <ResponsiveAppBar>
          <AppRoutes routes={Modules} />
        </ResponsiveAppBar>

      {/* <ResponsiveAppBar /> */}

      {/* <div className="App-body"> */}
      {/* <div className="Logout">
        Welcome <strong> {userInformation.user} </strong>
          <Button variant="text" style={{ color: "white" }} onClick={logOut}>
            Log Out
          </Button>
      </div> */}

      {/* <div style={{ marginRight: "inherit", width: "90%" }}>
          <Button variant="contained" onClick={handleClickOpen}>
            Add User
          </Button>
        </div>
        <DialogContentComponent
          handleClose={handleClose}
          handleClickOpen={handleClickOpen}
          open={openModal}
        />
      </div> */}
    </>
  );
};

export default App;
