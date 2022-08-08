import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	isAuthenticated: false,
	user: null,
	token: null
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		loginUser: (state, action) => ({
			...state,
			isAuthenticated: true,
			user: action.payload.user,
			token: action.payload.token
		}),
		logoutUser: state => ({
			...state,
			isAuthenticated: false,
			user: null,
			token: null
		})
	},
	// thunk example below
	extraReducers: builder => {}
});

// Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the Immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes
// so we can do something like increaseCount: state => { state.count += 1 }

// export all the actions to be used, userSlice.actions
export const { loginUser, logoutUser } = userSlice.actions;

// export the reducer to be used, userSlice.reducer
export default userSlice.reducer;

// THUNK EXAMPLE BELOW
// createAsyncThunk("action string", PROMISE)
export const loginFn = createAsyncThunk("user/LOGIN_USER", async data => {
	try {
		const response = await axios.post("/api/loginUser", data);
		return response.data;
	} catch (error) {
		return error.response.data.error;
	}
});
