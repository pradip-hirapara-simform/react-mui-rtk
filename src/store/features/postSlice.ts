import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getPosts, PostType } from "src/utils/api";
export const getPostApi = createAsyncThunk("posts", async () => {
  try {
    const response = await getPosts();
    return response;
  } catch (error) {
    // you can create util functon to handle errors.
    return Promise.reject(error);
  }
});

type PostState = {
  loading: boolean;
  error: string | undefined;
  posts: PostType[];
};
const initialState: PostState = { posts: [], loading: false, error: "" };
export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getPostApi.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPostApi.fulfilled, (state, action: PayloadAction<PostType[]>) => {
      state.loading = false;
      state.posts = action.payload;
      state.error = "";
    });
    builder.addCase(getPostApi.rejected, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.error.message;
    });
  },
});
export default postSlice.reducer;
