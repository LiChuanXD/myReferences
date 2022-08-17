import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts, postPost } from "./asyncThunk";

const initialState = {
	posts: [],
	loading: false,
	error: null
};

const dataSlice = createSlice({
	name: "user",
	initialState,
	extraReducers: builder => {
		builder
			.addCase(fetchPosts.pending, (state, action) => (state.loading = true))
			.addCase(fetchPosts.rejected, (state, action) => {
				return {
					...state,
					loading: false,
					error: action.payload
				};
			})
			.addCase(fetchPosts.fulfilled, (state, action) => {
				return {
					...state,
					loading: false,
					error: null,
					posts: action.payload
				};
			});
	}
});

export default dataSlice.reducer;
