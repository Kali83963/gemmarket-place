// third-party
import { createSlice } from "@reduxjs/toolkit";

// project imports
import axios from "../../utils/axios";
import { dispatch } from "../index";

// types
import { Reply } from "types/user-profile";

// ----------------------------------------------------------------------

const initialState: any = {
  error: null,
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // HAS ERROR
    hasError(state, action) {
      state.error = action.payload;
    },

    // GET USERS STYLE 1
    getUsersListStyle1Success(state, action) {
      state.usersS1 = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;
