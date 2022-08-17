import { createAsyncThunk } from "@reduxjs/toolkit";
import dataAPI from "./services";

export const fetchPosts = createAsyncThunk("posts/fetch", async (data, thunkAPI) => {
	try {
		const res = await dataAPI.fetchPosts();
		return res.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data.error);
	}
});

export const postPost = createAsyncThunk("post/post", async (data, thunkAPI) => {
	try {
		const res = await dataAPI.postPost(data);
		return res.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data.error);
	}
});
