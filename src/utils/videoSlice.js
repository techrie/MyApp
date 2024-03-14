import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    videos: [],
  },
  reducers: {
    getSearchVideos: (state, action) => {
      state.videos = action.payload;
    },
  },
});

export const { getSearchVideos } = videoSlice.actions;
export default videoSlice.reducer;
