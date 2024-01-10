import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import requests from "../../utils/utils";
import views from "./../../constants/views";
import utils from "../../utils/utils";

interface userManagement {
  id: string;
  user: string;
  password: string;
}

interface userList {
  id: number;
  firstName: string;
  lastName: string;
  admissionDay: string;
  remainingDays: number;
}

type AllState = {
  userManagement: userManagement;
  userList: userList[];
  loading_record: boolean;
  user_created: boolean;
  currentView: string;
  userAuthenticated: boolean;
  sentToApi: boolean;
  userIsValid: boolean;
};

const initialState: AllState = {
  userManagement: { user: "", password: "", id: "" },
  userList: [],
  loading_record: false,
  user_created: false,
  currentView: views.LOGIN,
  userAuthenticated: false,
  sentToApi: false,
  userIsValid: false,
};

export const userManagementApi = createApi({
  reducerPath: "sendUserData",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3010/api/v1/user-management",
  }),
  endpoints: (builder) => ({
    postUserInformation: builder.query({
      query: (body: userManagement) => ({
        url: "/create_user",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const uploadUserInformation = createAsyncThunk(
  "createUser",
  async (_, { getState }) => {
    const { user } = getState() as { user: AllState };
    const request = requests;
    const response = await request.postData(
      "http://localhost:3010/api/v1/user-management/create_user",
      { user: user.userManagement.user, password: user.userManagement.password }
    );
    return response;
  }
);

export const checkUserInformation = createAsyncThunk(
  "checkUserInformation",
  async (userInformation: userManagement, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const request = requests;
    const userData = {
      user: userInformation.user,
      password: userInformation.password,
      id: userInformation.id,
    };
    const response = await request.postData(
      "http://localhost:3010/api/v1/user-management/validate_user",
      { user: userData.user, password: userData.password }
    );
    dispatch(setInformationUser(userData));
    return response;
  }
);

export const insertUserToDB = createAsyncThunk(
  "insertUsers",
  async (_, { getState }) => {
    const { user } = getState() as { user: AllState };
    const request = requests;
    const response = await request.postData(
      "http://localhost:3010/api/v1/user-management/insert_clients",
      {
        id: user.userList[user.userList.length].id,
        firstName: user.userManagement.password,
      }
    );
    return response;
  }
);

const calculateRemainingDays = (
  currentDate: Date,
  dateRegistered: string | null
) => {
  const currentDateConverted = utils.formatDate(currentDate);
  const dateCurrent = new Date(currentDateConverted);
  const dateAdded = new Date(dateRegistered ?? "");

  const difference = dateCurrent.getTime() - dateAdded.getTime();
  const differenceInDays = difference / (1000 * 3600 * 24);

  return 15 - differenceInDays;
};

const usermanagementSlice = createSlice({
  name: "userManagement",
  initialState,
  reducers: {
    setInitialState(state) {
      state = initialState;
    },
    setInformationUser(state, action: PayloadAction<userManagement>) {
      state.userManagement.id = action.payload.id;
      state.userManagement.user = action.payload.user;
      state.userManagement.password = action.payload.password;
    },
    setView(state, action: PayloadAction<string>) {
      state.currentView = action.payload;
    },
    addUserToList(state, action: PayloadAction<userList>) {
      const actualDate = new Date();
      state.userList.push({
        id: action.payload.id,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        admissionDay: action.payload.admissionDay,
        remainingDays: calculateRemainingDays(
          actualDate,
          action.payload.admissionDay
        ),
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(uploadUserInformation.pending, (state, action) => {
      state.loading_record = true;
    });
    builder.addCase(uploadUserInformation.fulfilled, (state, action) => {
      state.loading_record = false;
      state.user_created = true;
      state.sentToApi = true;
    });
    builder.addCase(uploadUserInformation.rejected, (state, action) => {
      state.user_created = false;
    });

    builder.addCase(checkUserInformation.pending, (state, action) => {
      state.loading_record = true;
    });
    builder.addCase(checkUserInformation.fulfilled, (state, action) => {
      state.loading_record = false;
      state.userIsValid = action.payload.userValid;
    });
    builder.addCase(checkUserInformation.rejected, (state, action) => {});
  },
});

export const { setInformationUser, setView, setInitialState, addUserToList } =
  usermanagementSlice.actions;
export const { usePostUserInformationQuery } = userManagementApi;
export default usermanagementSlice.reducer;
